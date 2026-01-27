# Personal Homepage (GitHub Pages)

A bold, single-page personal site built with vanilla HTML/CSS/JS.

## Files
- `index.html` - content and structure
- `styles.css` - visual design and layout
- `script.js` - mobile menu + reveal animations

## Customize
- Replace name, bio, and links in `index.html`.
- Update colors and fonts in `styles.css` under `:root`.
- Replace project cards and stats with your real data.

## Run locally
Open `index.html` directly in your browser, or use a simple server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy to GitHub Pages
1. Create a repo on GitHub (public is easiest).
2. Push this folder to the repo.
3. In GitHub: Settings -> Pages -> Build and deployment.
4. Choose branch `main` and folder `/ (root)`.
5. Save. Your site will be available at:
   `https://<your-username>.github.io/<repo-name>/`

If the repo is named `<your-username>.github.io`, the site will be at:
`https://<your-username>.github.io/`
