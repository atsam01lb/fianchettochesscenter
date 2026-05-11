# Fianchetto Chess Center — Blog Page

A test page for the Fianchetto Chess Center blog, featuring tournament articles with a click-to-read modal popup.

## Files
- `index.html` — the complete page (HTML, CSS, JS all in one file)
- `logo.png` — the Fianchetto logo (header + footer)
- `photo1.jpg` through `photo10.jpg` — article photos (2 per article × 5 articles)

## How to add your photos
Each article uses 2 photos. Drop your images into the same folder as `index.html` and name them:

| Article | Photo 1 | Photo 2 |
|---|---|---|
| Article 1 (Autumn Open) | `photo1.jpg` | `photo2.jpg` |
| Article 2 (Junior Championship) | `photo3.jpg` | `photo4.jpg` |
| Article 3 (Rapid & Blitz) | `photo5.jpg` | `photo6.jpg` |
| Article 4 (Team League) | `photo7.jpg` | `photo8.jpg` |
| Article 5 (Simul Night) | `photo9.jpg` | `photo10.jpg` |

If any photo is missing, the page falls back to a placeholder chess image so it still looks good.

## The "3rd photo" gallery link
The third image in each modal is a styled tile labeled **"View Full Gallery"** that links to:
`https://samhindy.smugmug.com/MyFirstGallery/n-DpC8Gh`

## Deploying to GitHub Pages
1. Create a new GitHub repo (e.g., `fianchetto-test`)
2. Upload `index.html`, `logo.png`, and your photos
3. Go to **Settings → Pages → Source → main branch / root**
4. Your page will be live at `https://<your-username>.github.io/fianchetto-test/`

## What you can edit later
- **Article titles, dates, tags, excerpts** — top of the `<script>` block, in the `articles` array
- **Article body text** — the `articleBody` variable in the same `<script>` block
- **Header nav links / Footer links** — directly in the HTML
- **Colors** — top of the `<style>` block, the `:root` CSS variables
