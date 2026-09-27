# Happy Birthday, Harshita 💜

A cinematic, one-page interactive birthday surprise built with Next.js,
React, Tailwind CSS and Framer Motion. No backend or database — just add
your photos and song, then deploy.

## 1. Install and run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — click "Open Your Surprise" to see the full
experience (the browser blocks audio until that first click, by design).

## 2. Add your content (no code changes needed)

- **Photos** → drop 8 images into `public/images/` named
  `photo1.jpg` through `photo8.jpg`. See `public/images/README.txt`.
- **Music** → drop one file into `public/music/` named
  `birthday-song.mp3`. See `public/music/README.txt`.
- **Messages** → open `components/SpecialMessage.jsx` and
  `components/MemoryTimeline.jsx` to edit the wording — everything is a
  plain array at the top of the file.
- **Sign-off** → edit the last line in `components/FinalReveal.jsx`
  ("— Your Best Friend") if you'd like to sign with your name.

## 3. Deploy on Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave all settings as default (Next.js is auto-detected) and click Deploy.
4. Share the resulting `https://your-project.vercel.app` link with Harshita.

## Project structure

```
app/
  layout.js        → fonts + SEO metadata
  page.js           → orchestrates the whole flow/state
  globals.css       → theme tokens, glass utility, reduced-motion support
components/
  BirthdayIntro.jsx    → opening cinematic screen
  MusicPlayer.jsx      → floating music toggle (autoplay-safe)
  Hero.jsx             → animated headline section
  PhotoGallery.jsx     → interactive gallery + lightbox
  MemoryTimeline.jsx   → scroll-triggered vertical timeline
  SpecialMessage.jsx   → handwritten-style letter
  SurpriseGift.jsx     → gift-box reveal sequence
  Confetti.jsx         → elegant multi-shape confetti
  FinalReveal.jsx      → closing screen + signature
  FloatingParticles.jsx→ reusable stars/hearts background
public/
  images/  → put photo1.jpg – photo8.jpg here
  music/   → put birthday-song.mp3 here
```

## Notes

- Fully responsive; designed mobile-first.
- Respects `prefers-reduced-motion`.
- No console errors if photos/music aren't added yet — placeholders show instead.
