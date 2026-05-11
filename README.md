# Fianchetto Chess Center — Website

A two-page website for Fianchetto Chess Center, ready to push to GitHub Pages.

## Files
- `index.html` — **Home page** (hero, about, programs, features, stats, blog preview, testimonials, CTA)
- `blog.html` — **Blog page** with tournament articles and click-to-read modals
- `logo.png` — the Fianchetto logo (used in headers & footers)
- `photo1.jpg` through `photo10.jpg` — *(you upload these)* article photos, 2 per blog article

## Pages overview

### Home page (`index.html`)
A full marketing home page with:
- **Hero** — animated logo, tagline, and call-to-action buttons
- **About** — short intro with "Established 2015" visual badge
- **Programs** — 4 cards (Beginner, Intermediate, Advanced, Tournaments)
- **Features** — 4 reasons to choose Fianchetto
- **Stats** — counters (500+ students, 50+ tournaments, etc.)
- **Blog preview** — 3 latest tournament articles linking to the blog
- **Testimonials** — 3 player/parent quotes
- **CTA banner** — "Get in Touch" + contact email
- Smooth scroll-reveal animations on every section

### Blog page (`blog.html`)
- 5 article cards in a grid
- Click any card → full-screen modal with the full article, 2 photos, and a 3rd "View Full Gallery" tile linking to your SmugMug
- Closes with ✕ button, clicking outside, or pressing Escape

## How to add your photos (for the blog page)
Drop your images in the same folder as the HTML files, named:

| Article | Photo 1 | Photo 2 |
|---|---|---|
| Article 1 (Autumn Open) | `photo1.jpg` | `photo2.jpg` |
| Article 2 (Junior Championship) | `photo3.jpg` | `photo4.jpg` |
| Article 3 (Rapid & Blitz) | `photo5.jpg` | `photo6.jpg` |
| Article 4 (Team League) | `photo7.jpg` | `photo8.jpg` |
| Article 5 (Simul Night) | `photo9.jpg` | `photo10.jpg` |

If any photo is missing, fallback chess images load automatically so the page never breaks.

## Deploying to GitHub Pages
1. Create a new GitHub repo (e.g., `fianchetto`)
2. Upload all the files (`index.html`, `blog.html`, `logo.png`, and your photos)
3. Go to **Settings → Pages → Source → main branch / root → Save**
4. Your site will be live at `https://<your-username>.github.io/fianchetto/`

The home page loads at the root URL; the blog page is at `/blog.html`.

## Editing content later
**Home page** (`index.html`)
- Tagline, about text, program names, stats, testimonials, CTA text — all directly in the HTML, easy to find
- Colors — top of the `<style>` block, the `:root` CSS variables

**Blog page** (`blog.html`)
- Article titles, dates, tags, excerpts — top of the `<script>` block, in the `articles` array
- Article body text — the `articleBody` variable
- Colors — same `:root` variables as the home page

## Color palette (matches your logo)
- Gold: `#C9A961`
- Dark gold: `#8B7340`
- Black: `#1a1a1a`
- Cream: `#F5F0E6`
- Paper: `#FAF7F0`
