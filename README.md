# Morlai Mansaray — Premium Portfolio

Premium personal portfolio website for Morlai Mansaray, Year 3 Computer Science student and aspiring web developer from Freetown, Sierra Leone.

Built with **React + Vite + Tailwind CSS** and a glassmorphism design system.

## Features

- Floating glass navigation with active section highlighting
- Hero with Developer Orbit visual and statistics
- About, Skills (with honest proficiency labels), Services
- Featured projects including Solar Solutions (live demo)
- Education timeline + Practical Experience
- GitHub panel, contact section, premium footer
- Fully responsive, accessible, SEO-ready

## Getting Started

```bash
cd morlai-portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

This repository includes `vercel.json`, so Vercel can build and deploy the Vite frontend.

1. Push the repository to GitHub.
2. In Vercel, select **Add New Project** and import the repository.
3. Set **Framework Preset** to **Vite** and leave **Root Directory** at the folder containing `package.json`.
4. Deploy. Vercel will run `npm ci`, `npm run build`, and serve the `dist` directory.

If Vercel reports that it cannot find `package.json`, the **Root Directory** is pointing at the parent folder. Set it to `morlai-portfolio` if the GitHub repository contains this app inside that subfolder.

## Project Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Services.jsx
    Projects.jsx
    Education.jsx
    GitHub.jsx
    Contact.jsx
    Footer.jsx
    Button.jsx
    GlassCard.jsx
    SectionHeading.jsx
  assets/
    profile.jpg
  App.jsx
  index.css
  main.jsx
```

## Notes

- The contact form is temporarily unavailable.
- GitHub links point to `https://github.com/MorlaiMansaray` — update if the username differs.
- Profile photo is taken from the supplied assets.
- Design follows the premium glassmorphism brief: dark navy/charcoal palette, blue→violet→cyan accents, subtle animations.

© 2026 Morlai Mansaray
