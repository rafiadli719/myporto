# Avery Johnson – Portfolio

Modern, minimalist, and animation-rich portfolio experience for a product designer and creative engineer. Built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Features

- ⚡️ Fast, responsive, and mobile-first layout with smooth scroll behaviour
- 🌓 Dark/light mode toggle with animated switcher and localStorage persistence
- 🎬 Motion-driven hero, staggered project grid, and scroll-triggered reveals via Framer Motion
- 🧾 Projects showcase with hover micro-interactions, tech stack tags, and external links
- 🛠 Skills dashboard featuring animated proficiency bars and focus area highlights
- ✉️ Contact hub with validation-ready form, social links, and success messaging

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/) for fast development and bundling
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling and theme theming
- [Framer Motion](https://www.framer.com/motion/) for page-load, scroll, and hover animations
- [React Icons](https://react-icons.github.io/react-icons/) for consistent iconography

## Getting Started

```bash
npm install
npm run dev
```

Open the development server at the URL provided in the terminal (typically http://localhost:5173).

### Additional scripts

- `npm run build` – create a production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Project Structure

```
src/
  components/   # Reusable UI building blocks and section layouts
  data/         # Structured data for projects and skill categories
  assets/       # Static media (currently using remote imagery)
  App.jsx       # Main application shell and theme management
```

## Accessibility & Performance Considerations

- Theme preference stored in `localStorage` and applied to the `<html>` element for reduced flashes
- Focus-visible outlines maintained across interactive elements
- Lightweight, responsive images delivered via optimised remote sources
- Animations respect motion preferences by using semantic easing and durations

## License

This project is provided as part of a portfolio showcase. Adapt and extend for your own creative storytelling.
