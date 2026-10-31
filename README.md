# Rohit Jha: portfolio

Plain HTML, CSS and JavaScript. No build step.

```
rohit-portfolio/
├── index.html          page structure and text (about, journey, contact)
├── css/
│   ├── base.css        colours, fonts, layout, nav, buttons
│   ├── sections.css    each section's styles + certificate viewer
│   └── motion.css      every animation (delete a block to switch it off)
├── js/
│   ├── data.js         EDIT THIS: projects, links, skills, AI tools, certificates
│   └── main.js         builds the page from data.js, filters, viewer, theme toggle
└── assets/
    ├── tech/           logos for skills and the scrolling strip
    ├── ai/             logos for AI tools
    └── certs/          certificate images (full size + thumbnails)
```

## Run it
Open `index.html` in a browser, or run `python -m http.server` in this folder.

## Publish on GitHub Pages
Create a repo (for example `rohit-portfolio`), upload everything in this folder, then
Settings → Pages → Deploy from branch → `main` / root.

## Common edits (all in `js/data.js`)
- **Add a project:** copy one block in `projects`, change the text and links. Set `live: ''` if there is no demo yet.
- **Change a code link:** edit the `code:` value of that project.
- **Add a certificate:** put `name.jpg` and `name-thumb.jpg` in `assets/certs/`, add an entry in `certs`.
- **Add a logo:** drop the `.svg` into `assets/tech/` or `assets/ai/` and reference its file name.

## Things to fill in later
- **ShipSense, AI Cloud Cost, Chest X-Ray:** the READMEs do not list test metrics. Add your accuracy, recall or R² to `stats` in `data.js`.
- **Other repos you could add as cards:** Customer-Churn-Prediction, Cat-vs-Dog-Image-Classifier-PyTorch, Fake-Job-Posting-Detection-System, Indian-Food-Image-Classifier, Medical-insurance-cost-predictor, Resume-Skill-Extracter, Sentence-Auto-Completer-Bot.
