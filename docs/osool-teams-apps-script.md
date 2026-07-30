# Giving the teams form its own sheet

The form at `/osool/teams` is a static page. It cannot write to Google Sheets by
itself — something inside the Google account has to receive the POST. That is
what an Apps Script web app is, and creating one requires signing in as the
sheet's owner, so this is the one step that cannot be done from the repo.

Everything below is copy-paste. Budget five minutes.

## Approach

A **brand new, standalone** Apps Script project — not an edit to the crew form's
script. It writes into a tab of whichever spreadsheet you point it at, so you can
have either outcome:

- **Same spreadsheet, new tab** — put the crew sheet's id in `SHEET_ID`.
- **A separate spreadsheet** — make a new sheet and use its id instead.

Either way the crew script is never opened, so crew registration cannot break.

## 1. Create the project

Go to <https://script.google.com> → **New project**. Delete the sample
`function myFunction() {}` and paste this in full:

```js
/**
 * Osool National Day — فريق أصول / فريق بولد registration endpoint.
 * Standalone: independent of the crew form's Apps Script.
 */

// From your sheet's URL:
// https://docs.google.com/spreadsheets/d/THIS_LONG_PART_HERE/edit
const SHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE';

// Created automatically on the first submission if it doesn't exist.
const TAB_NAME = 'Guests';

// Column order, fixed here so the sheet stays stable and readable.
const COLUMNS = [
  'submitted_at', 'visitor_type', 'full_name', 'id_number', 'mobile', 'email',
  'arrival', 'pickup_location', 'plate_number', 'car_type',
  'drink', 'food', 'special_requests', 'source'
];

const HEADERS = [
  'وقت الإرسال', 'الصفة', 'الاسم الكامل', 'رقم الهوية', 'الجوال', 'البريد',
  'طريقة الوصول', 'موقع الاستلام', 'رقم اللوحة', 'نوع السيارة',
  'المشروب', 'الأكل', 'ملاحظات', 'المصدر'
];

function doPost(e) {
  // Serialise concurrent submissions so two people saving at once can't
  // overwrite each other's row.
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    const data = JSON.parse(e.postData.contents);
    getSheet_().appendRow(COLUMNS.map(function (k) {
      return data[k] !== undefined ? data[k] : '';
    }));
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (ignored) {}
  }
}

// Visiting the /exec URL in a browser should show {"ok":true,...} — a quick way
// to confirm the deployment is live before wiring up the form.
function doGet() {
  try {
    return json_({ ok: true, tab: getSheet_().getName() });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(TAB_NAME);
  if (!sheet) sheet = ss.insertSheet(TAB_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 2. Set the spreadsheet id

Open the target sheet. Its URL looks like:

```
https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/edit#gid=0
                                       └──────── this part ────────┘
```

Paste that into `SHEET_ID`, then save (⌘S).

## 3. Deploy it

**Deploy → New deployment →** the gear icon **→ Web app**, then set:

| Field | Value |
|---|---|
| Execute as | **Me** |
| Who has access | **Anyone** |

**Deploy**. Google will ask you to authorize: choose your account →
**Advanced** → **Go to (project name) (unsafe)** → **Allow**. That warning is
normal for your own unpublished script.

Copy the **Web app URL** — it ends in `/exec`.

## 4. Check it, then send it over

Paste the `/exec` URL into a browser tab. You should see:

```json
{"ok":true,"tab":"Guests"}
```

and the `Guests` tab should now exist in the sheet. Send me that URL and I'll
point the form at it — it is a one-line change to `SHEET_WEB_APP_URL` at the top
of `osool/teams/teams.js`.

## Notes

- **"Anyone" is required.** The form posts from a visitor's browser with no
  Google login, so the endpoint must accept anonymous requests. This means
  anyone holding the URL can append rows to that tab — inherent to this pattern,
  and already true of the crew form's endpoint. It grants no read access to the
  spreadsheet.
- **Re-deploy after any edit.** Apps Script serves the version you *deployed*,
  not the version you saved. Use **Deploy → Manage deployments → edit → Version:
  New version**, which keeps the same `/exec` URL.
- **Renaming the tab** is just `TAB_NAME`; it will be created on next submit.
