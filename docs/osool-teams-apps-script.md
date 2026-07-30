# Routing the Osool teams form into its own sheet tab

The teams form at `/osool/teams` posts to the **same Apps Script web app** as the
crew form at `/osool`, and tags every submission with:

```json
{ "sheet_tab": "Guests", "source": "Osool National Day Teams Form" }
```

The form cannot choose a tab on its own — only the Apps Script can. Until the
script reads `sheet_tab`, these rows land wherever crew rows land, and the guest
columns (`visitor_type`, `arrival`, `drink`, `food`, …) will not line up with the
crew headers.

## The change

In the Apps Script project bound to the spreadsheet, add this helper:

```js
// Resolves the target tab from the payload, creating it on first use and
// writing a header row that matches the payload's own keys.
function resolveSheet_(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // No routing key -> unchanged behaviour, so the crew form keeps working.
  if (!data.sheet_tab) return ss.getSheets()[0];

  var sheet = ss.getSheetByName(data.sheet_tab);
  if (!sheet) sheet = ss.insertSheet(data.sheet_tab);

  if (sheet.getLastRow() === 0) {
    var headers = Object.keys(data);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Appends a row ordered by the tab's existing header row, so column order stays
// stable even if the payload key order changes later.
function appendByHeader_(sheet, data) {
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  sheet.appendRow(headers.map(function (h) {
    return data[h] !== undefined ? data[h] : '';
  }));
}
```

Then, inside `doPost`, use them for routed submissions:

```js
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.sheet_tab) {
      appendByHeader_(resolveSheet_(data), data);
      return ContentService
        .createTextOutput(JSON.stringify({ ok: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // ... existing crew-form handling, untouched ...

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Why it is shaped this way

- **The crew path is not touched.** Crew submissions carry no `sheet_tab`, so
  they take the existing branch exactly as before, including the Drive upload of
  ID scans.
- **The tab creates itself.** No manual setup in the spreadsheet.
- **Column order survives.** `appendByHeader_` writes against the header row
  rather than the payload's key order.

## After editing

Apps Script serves the version that was deployed, not the saved code. Re-deploy:

**Deploy → Manage deployments → (edit the active deployment) → Version: New
version → Deploy**

The `/exec` URL stays the same, so nothing in `teams.js` needs changing.

## Renaming the tab

Change `SHEET_TAB` at the top of `osool/teams/teams.js`. The script creates
whatever name it receives.
