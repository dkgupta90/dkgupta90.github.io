# Deepak K. Gupta — Personal Website

A professional academic and industry profile built from Dr. Deepak K. Gupta's current CV. The site is responsive, statically exported, and ready for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy with GitHub Pages

1. Create a new GitHub repository and add this project.
2. Push the project to the `main` branch.
3. In the repository, open **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Run the **Deploy to GitHub Pages** workflow, or push another commit to `main`.

The GitHub build detects the repository name and prepares the exported files for both project pages (`username.github.io/repository`) and user pages (`username.github.io`).

## Update content

- Main content: `app/page.tsx`
- Visual design: `app/globals.css`
- Downloadable CV: `public/Deepak-K-Gupta-CV.pdf`
- Page metadata: `app/layout.tsx`

## Content sources

Current career details are based on the supplied CV. The adjunct faculty appointment at IIT (ISM) Dhanbad and TA mentions for Rishabh Tiwari were supplied by the site requester. The INF-8605 term is unspecified and is omitted.

Earlier courses, dates, levels and Dr. Gupta's teaching roles are taken from https://dkgupta90.github.io/teaching/. The page distinguishes course coordination from his own earlier teaching assistant roles. His original site's 2019–20 “TBA” entry is not included as a course.

## Share this project

Send the source ZIP to Dr. Gupta. Unzip it and upload the contents, including `.github`, to the repository root. Do not upload the enclosing folder as a nested directory. Dependencies and generated caches are excluded intentionally; GitHub Actions installs them automatically.

A separate static ZIP contains the built site for review or conventional static hosting. The source ZIP is the recommended option for GitHub Pages and future editing.

The portrait is reused from Dr. Gupta’s original website: https://dkgupta90.github.io/images/bio-photo3.png. The visual structure follows a traditional academic profile with a portrait and contact sidebar, research and publication lists, teaching, appointments, and education.

The requester supplied Udbhav Bamba as an additional TA for NCSC513. INF-8605 retains Rishabh Tiwari as its listed TA. All courses appear in one Teaching list with the historical teaching roles preserved. Education is included in the biography. Publication author lists were verified against the papers' arXiv records; the bibliography uses year groups, authors, venue and paper links.

Selected publications include 10 entries through 2025. Added sources are the TMLR paper, ACL Anthology, CVF proceedings, ICLR Tiny Papers and arXiv. Workshop papers and preprints are labeled separately from main-conference and journal papers. No 2026 publications are included in this list.
