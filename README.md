# Mariano Portfolio

A responsive, multi-page React + Vite + Tailwind CSS portfolio for Mariano, a Statistical Analyst, Data Analyst, and Data Visualization Specialist.

## Pages

- `index.html` — Home
- `projects.html` — Projects
- `services.html` — Services
- `about.html` — About
- `contact.html` — Contact

Each page has its own HTML entry and shares the same navigation, visual styling, and React page entry point. The navigation links between actual HTML pages, and the current page is highlighted in the sidebar.

## Run locally

```bash
npm install
npm run dev
```

## Run tests

```bash
npm test
```

## Build

```bash
npm run build
```

## Structure

- `src/components` — reusable portfolio sections and navigation
- `src/page-entry.jsx` — selects the page content from each HTML page's `data-page`
- `src/__tests__` — unit and integration tests using Vitest and React Testing Library
- `src/index.css` — Tailwind and global styles
- `public/profile-avatar.svg` — profile avatar
