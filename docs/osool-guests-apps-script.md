# Giving the teams form its own spreadsheet

The form at `/osool/Guests` is a static page. It cannot write to Google Sheets by
itself — something inside the Google account has to receive the POST, and that is
what an Apps Script web app is. Creating one requires signing in as the sheet's
owner, so this is the one step that cannot be done from the repo.

Everything below is copy-paste. Budget five minutes.

## Approach

A **brand new spreadsheet**, with the script created *from inside it* so the two
are bound together. This avoids both of the things that can go wrong:

- **No spreadsheet id to copy.** A bound script already knows its own sheet.
- **No name collisions.** A script created this way starts empty, so it cannot
  clash with leftover code. (Every `.gs` file in a project shares one global
  scope, and a duplicate declaration is a syntax error that disables the entire
  deployment — including `doGet`, which is why a broken project serves an error
  page rather than JSON.)

The crew form's script and spreadsheet are never opened, so crew registration
cannot regress.

## 1. Create the spreadsheet

Go to <https://sheets.new>. Name it something like
**Osool National Day — Guests**. Leave the empty tab alone; the script renames
and fills it on the first submission.

## 2. Open its script editor

In that spreadsheet: **Extensions → Apps Script**.

This must be done from inside the new sheet — that is what binds them. Delete the
sample `function myFunction() {}` and paste this in full:

```js
/**
 * Osool National Day — فريق أصول / فريق بولد registration endpoint.
 *
 * Bound to its own spreadsheet: created via Extensions > Apps Script from the
 * sheet it writes to, so it needs no spreadsheet id and is fully independent of
 * the crew form's script.
 *
 * Everything is function-scoped and prefixed on purpose. Top-level `const`
 * declarations share a global namespace with every other file in the project,
 * so they collide easily; only doPost and doGet have to be global, because
 * Apps Script calls them by exact name.
 */

function osoolConfig_() {
  return {
    tabName: 'Guests',

    // Column order, fixed here so the sheet stays stable and readable.
    // These keys must match what osool/Guests/guests.js sends.
    columns: [
      'submitted_at', 'visitor_type', 'full_name', 'id_number', 'mobile',
      'email', 'arrival', 'pickup_location', 'plate_number', 'car_type',
      'drink', 'food', 'special_requests', 'source'
    ],

    headers: [
      'وقت الإرسال', 'الصفة', 'الاسم الكامل', 'رقم الهوية', 'الجوال', 'البريد',
      'طريقة الوصول', 'موقع الاستلام', 'رقم اللوحة', 'نوع السيارة',
      'المشروب', 'الأكل', 'ملاحظات', 'المصدر'
    ]
  };
}

function doPost(e) {
  // Serialise concurrent submissions so two people saving at once can't
  // overwrite each other's row.
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var cfg = osoolConfig_();
    var data = JSON.parse(e.postData.contents);
    osoolSheet_(cfg).appendRow(cfg.columns.map(function (key) {
      return data[key] !== undefined ? data[key] : '';
    }));
    return osoolJson_({ ok: true });
  } catch (err) {
    return osoolJson_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (ignored) {}
  }
}

// Visiting the /exec URL in a browser should show {"ok":true,...} — a quick way
// to confirm the deployment is live before wiring up the form.
function doGet() {
  try {
    var cfg = osoolConfig_();
    return osoolJson_({ ok: true, tab: osoolSheet_(cfg).getName() });
  } catch (err) {
    return osoolJson_({ ok: false, error: String(err) });
  }
}

function osoolSheet_(cfg) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(cfg.tabName);

  if (!sheet) {
    var sheets = ss.getSheets();
    // On a fresh spreadsheet, rename the default empty tab instead of leaving
    // a stray "Sheet1" sitting next to the real one.
    if (sheets.length === 1 && sheets[0].getLastRow() === 0) {
      sheet = sheets[0].setName(cfg.tabName);
    } else {
      sheet = ss.insertSheet(cfg.tabName);
    }
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(cfg.headers);
    sheet.getRange(1, 1, 1, cfg.headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setRightToLeft(true);
  }
  return sheet;
}

function osoolJson_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Save (⌘S).

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

and the spreadsheet's tab should now be named **Guests** with bold Arabic
headers. Send that URL over and the form gets pointed at it — a one-line change
to `SHEET_WEB_APP_URL` at the top of `osool/Guests/guests.js`.

## Notes

- **"Anyone" is required.** The form posts from a visitor's browser with no
  Google login, so the endpoint must accept anonymous requests. Anyone holding
  the URL can append rows to that sheet — inherent to this pattern, and already
  true of the crew form's endpoint. It grants no read access to the spreadsheet.
- **Re-deploy after any edit.** Apps Script serves the version you *deployed*,
  not the version you saved. **Deploy → Manage deployments → edit → Version: New
  version** keeps the same `/exec` URL; a brand new deployment gives a new one.
- **If the URL returns a `خطأ` / error page instead of JSON**, the project failed
  to compile. Check the sidebar for a second `.gs` file — a duplicate
  declaration disables the whole deployment, not just the duplicated part.
- **Renaming the tab** is just `tabName`.
