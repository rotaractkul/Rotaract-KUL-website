# Rotaract KUL website

This is the source code for the Rotaract KUL website, built with [Astro](https://astro.build). You don't need to understand the code to run or update the site — this guide walks through everything step by step.

## What's inside

- `src/pages/` — one file per page (Home, About, What We Do, Events, Team, Join Us, Partnerships, Contact)
- `src/content/events/` — one file per event. Duplicate an existing one to add a new event.
- `src/content/team/` — one file per team member. Duplicate an existing one to add a new person.
- `src/site-config.ts` — the join-form link, contact email and social links, all in one place.
- `public/images/` — where photos and the eventual official logo go.

## Part 1 — Put this on GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click the **+** icon in the top right → **New repository**.
3. Name it `rotaract-kul-website`, keep it **Public** (or Private if you prefer), and click **Create repository**.
4. On the new repository's page, click **uploading an existing file**.
5. Drag the entire contents of this folder (everything *inside* `rotaract-kul-website/`, not the folder itself) into the browser window, then click **Commit changes**.

You now have the website's code safely on GitHub. You'll come back here whenever you want to update a page — GitHub lets you edit files like `src/content/events/` directly in the browser, no software required.

## Part 2 — Put it online with Netlify (free)

1. Go to [netlify.com](https://netlify.com) and sign up using your GitHub account (this is the easiest option — one click, no separate password).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub**, then select the `rotaract-kul-website` repository.
4. Netlify will detect Astro automatically. Confirm these settings if asked:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**. After a minute or two, Netlify gives you a live link like `random-name-123.netlify.app` — the site is now online.

From now on, every time you change a file on GitHub, Netlify rebuilds and updates the live site automatically within a couple of minutes.

## Part 3 — Connect rotaractkul.be

1. In your Netlify site dashboard, go to **Domain settings → Add a custom domain**, and enter `rotaractkul.be`.
2. Netlify will show you one or two DNS records (usually an "A record" and a "CNAME record") to add.
3. Log in to wherever you registered `rotaractkul.be` (your domain registrar) and find the **DNS settings** page.
4. Add the records exactly as Netlify shows them.
5. Come back to Netlify — once the DNS change is detected (can take a few minutes to a few hours), it will issue a free HTTPS certificate automatically. Your site is now live at `https://rotaractkul.be`.

If you get stuck on this part, tell me which domain registrar you used and I'll write exact instructions for that provider.

## Editing content day to day

**Add an event:** in `src/content/events/`, duplicate an existing file, rename it, and edit the fields at the top (title, date, location, status, image, registration link) and the description below.

**Add a team member:** same idea, in `src/content/team/`.

**Change the join form link, email, or social links:** edit `src/site-config.ts` — one file, used everywhere those links appear.

**Add real photos:** drop image files into `public/images/` (see `public/images/README.txt`) and reference their path (e.g. `/images/events/mixer.jpg`) in the relevant content file.

Every edit can be made directly on GitHub's website (open the file, click the pencil icon, edit, commit) — Netlify rebuilds the live site automatically afterward.

## Running it on your own computer (optional)

Only needed if you want to preview changes before publishing them.

1. Install [Node.js](https://nodejs.org) (choose the LTS version).
2. Open a terminal in this folder and run `npm install` (once).
3. Run `npm run dev` and open the link it prints (usually `http://localhost:4321`).
