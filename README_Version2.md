```markdown
# JohnnyRV — Static Site Draft

This repository is a lightweight, responsive static website draft for JohnnyRV. The site is designed for review and quick deployment to GitHub Pages.

What I included:
- index.html — single-page layout with hero, about, amenities, rates, map placeholder, gallery, and booking form
- styles.css — responsive styling, color palette matched to your logo
- script.js — small interactions (mobile nav, year, demo form feedback)
- images/ — add your logo and photos here. Place your provided logo at `images/logo.png`

Quick local preview:
1. Save the project files and your logo to a folder.
2. From that folder run a simple local server:
   - Python 3: `python3 -m http.server 8000`
   - Then open: `http://localhost:8000`

How to get this draft up on GitHub Pages (step-by-step)

Option A — Using the GitHub website (easy):
1. Create a new repository on GitHub (example name: `johnnyrv-site`) under your account `saxaphone72dre`.
2. Upload the project files (Upload files -> choose your files and the `images/` folder).
3. After pushing, go to the repository on GitHub -> Settings -> Pages (or "Pages" in the left sidebar).
4. Under "Build and deployment", select:
   - Source: Branch: `main` (or `master`) / Folder: `/ (root)`
5. Save. GitHub will provide a URL like `https://saxaphone72dre.github.io/johnnyrv-site/`.
6. It may take a minute for the site to become live. Refresh the provided URL until content appears.

Option B — Using git locally (recommended if you use the command line):
1. Create the repo on GitHub (example repo name `johnnyrv-site`). Copy the repo URL.
2. From your project folder run:
   ```
   git init
   git add .
   git commit -m "Initial JohnnyRV site draft"
   git branch -M main
   git remote add origin git@github.com:saxaphone72dre/johnnyrv-site.git
   git push -u origin main
   ```
   (If you prefer HTTPS: replace the remote URL with `https://github.com/saxaphone72dre/johnnyrv-site.git`.)
3. Open the repo on GitHub and enable Pages as described in Option A.
4. Site URL will be `https://saxaphone72dre.github.io/johnnyrv-site/` (or similar).

Notes and recommended next steps for review:
- Add your supplied logo to `images/logo.png` (already referenced by index.html).
- Replace the placeholder gallery images in `images/photo1.jpg`, `images/photo2.jpg`, etc.
- The map iframe is empty — when you're ready to show location, paste your Google Maps embed src or add a Leaflet map.
- The booking form action is currently `#` to act as a demo. When ready, replace the action with:
  - Formspree endpoint, or
  - Netlify Forms, or
  - your backend endpoint for processing bookings.
- After you confirm layout & copy, I can:
  - Add real contact info where you want it.
  - Wire the booking form to Formspree/Netlify or a booking engine.
  - Create a small review checklist (accessibility, SEO meta tags, Open Graph).

If you'd like, I can also:
- Prepare a single commit you can push, or produce a zipped archive of the draft.
- Walk you through enabling Pages using the GitHub web UI while you share screens or copy/paste.