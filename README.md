# Training & Research Institute Landing Page

Professional, responsive landing page for a training and research institute. Built with Next.js and Tailwind CSS v4, featuring a hero image slider, scroll reveals, count-up stats, dropdown navigation, and a dark/light theme toggle.

## Features

- Full-width hero slider with overlay and CTA
- Count-up stats and smooth reveal animations
- Responsive navbar with About Us dropdown
- Dark/light mode toggle with smooth transition
- WhatsApp floating action button

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 (@tailwindcss/postcss)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Where to Edit

- Main layout: `app/page.tsx`
- Sections: `app/components/*`
- Theme + animations: `app/globals.css`
- Hero images: `public/hero/hero-1.jpg`, `public/hero/hero-2.jpg`, `public/hero/hero-3.jpg`

## Notes

- Update contact info and WhatsApp number in `app/components/Footer.jsx`.
- Update menu and dropdown items in `app/components/Navbar.jsx`.
