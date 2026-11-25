# Two Keys

Two Keys is an [OwnYourWeb](https://ownyourweb.xyz/) studio. Alexis leads creative direction. Nasirr “G” Mayo leads build and care. This repository is the one-page site: websites with vibe, ownership built in.

The live site is meant to be [https://innergclaw.github.io/two-keys/](https://innergclaw.github.io/two-keys/).

## What the owner still fills in

Nothing below is invented. Search the repo for `___` and `coming soon`.

- **Prices.** In `index.html`, each offer shows `$___` (revamp, new build, monthly care).
- **Monthly content changes.** The monthly card says `___ content changes a month`.
- **Public contact line.** The form and the red close both say “contact coming soon”.
- **Work.** The four circles say “project coming soon”. Replace them with real project images, names, and alt text when work exists. Do not add clients that are not real.
- **Form delivery.** See below. No personal email is hardcoded.

## Hook up the project request form

The form works on a static host. It does not send until you choose one option. Submitting before that shows “Contact coming soon. Nothing was sent.”

### Option A — Formspree (recommended)

1. Create a form at [formspree.io](https://formspree.io/).
2. In `index.html`, replace the placeholder action:

   `action="https://formspree.io/f/YOUR_FORM_ID"`

   with your endpoint, for example `action="https://formspree.io/f/abcdwxyz"`.
3. The id must be letters and numbers only. `YOUR_FORM_ID` is ignored on purpose.
4. Push to `main`. The page posts with `fetch` and stays on the page. A hidden `_gotcha` field is the Formspree honeypot.

### Option B — mailto fallback

1. On the same `<form>`, set `data-mailto` to the studio inbox:

   `data-mailto="studio@yourdomain.com"`

2. This is used only when the action is still the placeholder.
3. The address is visible in the page source. Anyone can read it. Prefer Formspree if the inbox should stay off the site.

If both are set, Formspree wins.

## Pages

The site is plain HTML, CSS, and JS at the repository root (`index.html`, `styles.css`, `script.js`, `favicon.svg`). `.nojekyll` is there so GitHub Pages serves the files as-is.

**Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)`.**

A GitHub Actions workflow is also in `.github/workflows/pages.yml`. Use it only if the source is set to **GitHub Actions** instead of the branch. Do not enable both.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8765
```

Then visit `http://localhost:8765/`.
