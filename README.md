# Mukesh Sahu Portfolio

A responsive personal portfolio website built with plain HTML, CSS, and JavaScript.

## Run locally

Open `index.html` in a browser, or serve the folder with a simple local server:

```bash
cd /Users/mukeshsahu/Developer/mukesh-portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow that publishes the site whenever
you push to the `main` or `master` branch. The site is static, so no build step is
needed.

1. Create a GitHub repository. For the root URL, name it
   `mukesh86637584.github.io`; otherwise, use any repository name.
2. Push this project to the repository's `main` or `master` branch.
3. In the repository, open **Settings → Pages** and set the build and deployment
   source to **GitHub Actions**.
4. Open the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow
   to finish.

Your live site will be available at `https://mukesh86637584.github.io/` for the
username-based repository, or at
`https://mukesh86637584.github.io/<repo-name>/` for a project repository.

## Customize content

Edit the text in `index.html` to update:

- Your name, bio, skills, experience, and project descriptions
- Contact links and email
- GitHub profile and LinkedIn URL

## Files

- `index.html` — portfolio content
- `styles.css` — styling and layout
- `script.js` — mobile menu and footer year
