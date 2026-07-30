# Osool National Day — teams registration form

**Date:** 2026-07-30
**URL:** `captains.film/osool/Guests` (unlisted, noindexed)
**Source:** `~/Documents/osool_national_day_guest_package/index.html`

## Goal

Rebuild the standalone Osool guest form in the Captains brand, relabel its two
audience options, and publish it at its own URL without altering the existing
site.

## Decisions

| Question | Decision |
|---|---|
| Where data goes | Its own separate spreadsheet, via a bound Apps Script web app — see "Submission" below for why the original plan was dropped |
| Page structure | Single scrolling page (brief → crew → form → thanks), matching `/osool` |
| URL | `/osool/Guests`, nested so it inherits the existing `/osool/*` header rules |
| Project brief | Kept in full, including dates, both locations and all crew names |
| Palette & type | Live-site mint `#3EFFA3` on `#0C0705` + Montserrat for Latin; IBM Plex Sans Arabic for Arabic body |

### On the palette

The live site (`index.html`, `v2/assets/css/main.css`) and the existing crew form
disagree. The site is mint `#3EFFA3` on `#0C0705`; the crew form is lime
`#d8ff3e` on `#050505` with IBM Plex Sans Arabic. The site is the brand; the crew
form is an outlier.

Typography splits the difference deliberately. The site's `--arabic` stack leads
with *DIN Next LT Arabic*, which is **never served** — there are no `@font-face`
rules and no font files in the repo — so it resolves to Tahoma for anyone without
DIN installed locally. For a page that is almost entirely Arabic that is a poor
result, so Arabic body text uses IBM Plex Sans Arabic (Google-hosted, and already
permitted by the `/osool/*` CSP), while Latin runs use Montserrat as on the site.

Two site-wide `h1` treatments are deliberately **not** carried over:
`letter-spacing: -.025em` and `line-height: .92`. Both are Latin display tricks.
Negative tracking breaks the cursive joining of Arabic glyphs, and `.92` clips
diacritics. Arabic keeps `letter-spacing: 0` and generous line-height, with
tracking scoped to `.latin` elements only.

## Files

```
osool/Guests/index.html    # page + styles
osool/Guests/guests.js      # behaviour (CSP forbids inline script)
docs/osool-guests-apps-script.md
```

The logo is referenced at `/osool/captains-logo-ar-white.png` — absolute, reusing
the file already shipped for the crew form, so no binary is duplicated and no
`<base>` tag is needed.

### Not modified

`index.html`, `about.html`, `projects.html`, `ai-studio.html`, `v2/`,
`sitemap.xml`, `robots.txt`, `osool/index.html`, `osool/form.js`.

`_headers` needed **no** change: the existing `/osool/*` rule already matches
nested paths. Verified against `wrangler dev` — `/osool/Guests/` and
`/osool/Guests/guests.js` each return exactly one `content-security-policy` header
plus `x-robots-tag: noindex, nofollow`. That inherited policy happens to be
exactly right: `script-src 'self'` (hence the external `guests.js`) and
`connect-src` already allowing `script.google.com` and
`script.googleusercontent.com` for the Apps Script POST.

`.assetsignore` gains one line (`docs`) so the specs directory is never served.
This excludes new files only; no existing path changes behaviour.

## Copy changes

The requested relabel, plus the surrounding copy it invalidates:

| Where | Before | After |
|---|---|---|
| `visitor_type` option | عميل | **فريق أصول** |
| `visitor_type` option | ضيف | **فريق بولد** |
| `<title>` | …تسجيل العميل والزوار | كابتنز \| فريق أصول وفريق بولد – اليوم الوطني 2026 |
| Form heading | بيانات العميل أو الضيف | بيانات فريق أصول وفريق بولد |
| Footer | بوابة ضيوف وعملاء… | نموذج داخلي خاص بكابتنز - مشروع أصول لليوم الوطني |
| Partner name | Bold Brands | **Bold** |
| Partner name | أصول العقارية | **أصول** |

Two source typos are also corrected: `المعلومات نكملة` → `المعلومات`, and
`Production` → `إنتاج` in the brief.

## Fields

`visitor_type*`, `full_name*`, `id_number*`, `mobile*`, `email`, `arrival*`,
`drink*`, `food*`, `special_requests`.

Conditional on `arrival`:

- `Pick-up` → `pickup_location*`
- `بسيارتي` → `plate_number*`, `car_type*`

Hidden branches have `required` cleared in JS, otherwise the form refuses to
submit with no visible invalid control to focus.

### Bug fixed from the source

The source's Pick-up radio submits `بيك أب` while its validation compares against
the literal string `Pick-up`, so the "location is required" check could never
fire and pick-up could be submitted with no address. The rebuild matches on a
single stable value.

## Submission

`guests.js` builds a flat object and POSTs JSON to an Apps Script `/exec` URL,
expecting `{ok: true}`. Errors surface in Arabic in a message strip. Untaken
branch fields are sent as empty strings so sheet columns stay stable. Each row
carries `source: "Osool National Day Teams Form"`.

### Why the shared endpoint was abandoned

The first plan reused the crew form's Apps Script, tagging rows with
`sheet_tab: "Guests"` for it to route on. A live test showed the script returns
`{ok: true}` for those rows while ignoring the key entirely — so submissions were
accepted but landed in its default sheet with columns misaligned against the crew
headers. Routing them properly would have meant editing the script that crew
registration depends on.

Replaced by a **separate spreadsheet** with its own bound Apps Script, created
via *Extensions → Apps Script* from inside that sheet. The crew script and sheet
are never opened, so crew registration cannot regress. The page no longer sends
`sheet_tab` — the destination belongs to the script.

Two earlier variants were discarded after failing in practice. Routing by a
`sheet_tab` key on the crew endpoint failed because that script ignores unknown
keys while still answering `{ok: true}`. A standalone script taking a
spreadsheet id then failed to compile with
`Identifier 'HEADERS' has already been declared` — every `.gs` file in a project
shares one global scope, and a syntax error anywhere disables the whole
deployment including `doGet`, which surfaces as an HTML error page rather than
JSON. The current version therefore keeps all configuration inside
`osoolConfig_()` with prefixed helpers, leaving only `doPost`/`doGet` global, and
binding to its own sheet removes the id-copying step entirely.

The payload's keys are exactly the script's `columns` list, so column order is
fixed in one place and the sheet gets readable Arabic headers.

Creating the spreadsheet and deploying the web app required signing in as its
owner, so that step was done by hand rather than from the repo; the script and
instructions live in `docs/osool-guests-apps-script.md`. The resulting `/exec`
URL is now wired into `guests.js` and verified end to end from the live page.

Note for future testing: `curl` cannot exercise this endpoint. Apps Script
answers a POST with a 302 to `script.googleusercontent.com`, and following it
either downgrades the request to GET or 404s on the single-use echo URL. Use a
real browser, or hit the `/exec` URL directly for the `doGet` health check.

## Verification

- Both arrival branches toggle visibility and `required` correctly.
- Select offers exactly `فريق أصول` / `فريق بولد`; no `عميل`/`ضيف`/`زوار` remains
  anywhere in rendered text.
- Payload shape confirmed via an intercepted `fetch`; whitespace trimmed.
- Success state hides the form and reveals the thanks panel.
- No console errors; no horizontal overflow at 1280px or 375px.
