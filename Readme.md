# Personal Portfolio

A modern, responsive portfolio website for Nicholas Korcynski that highlights computer science, software engineering, and applied AI experience across academics, internships, and entrepreneurial projects.

## Getting Started

1. No build step is required. Serve the site locally with any static web server.
2. Example using Python:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000` to explore the site.

## Structure

- `index.html` – Landing page featuring hero, about, skills, experience, education, achievements, projects, resume snapshot, and contact sections tailored to Nicholas.
- `resume.html` – Printable resume view that mirrors the primary brand and content.
- `assets/css/` – Stylesheets for the main site and resume.
- `assets/js/main.js` – Navigation behavior and GitHub project fetching.

## Customization

- Update copy, contact details, and section content in `index.html` and `resume.html` to reflect your story.
- Configure the GitHub integration by editing the `data-github-user` and `data-featured-repos` attributes on the `#repo-grid` element. The JavaScript automatically fetches these repositories and falls back to curated content if unavailable.
- Replace the placeholder email, social profiles, and any statistics with your own information.
- Add personal imagery or brand assets under `assets/img/` and reference them in the markup or CSS.

## Deployment

Because the project is fully static, it can be deployed to GitHub Pages, Netlify, Vercel, AWS Amplify, or any static hosting provider. Configure a custom domain if desired and enable HTTPS for best results.
