<h1 align="center">MacBook GSAP 3D Showcase</h1>

<p align="center">
  An interactive 3D MacBook showcase built with React, Three.js, and GSAP — featuring scroll-driven animations, a 3D model viewer, and a responsive, modern UI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Three.js-0.185-black?logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="TailwindCSS 4" />
  <img src="https://img.shields.io/badge/Zustand-5-443E38?logo=react&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white" alt="Node.js 22" />
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#deployment">Deployment</a>
</p>

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Data Model](#data-model)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

## Features

- Interactive 3D MacBook model rendered with React Three Fiber and `@react-three/drei`.
- Scroll-driven animations powered by GSAP and `@gsap/react`.
- Responsive layout with TailwindCSS 4 and `react-responsive`.
- Global state management with Zustand for model selection and UI state.
- Product viewer with switchable MacBook 14" and 16" variants.
- Highlight and performance sections with animated transitions.
- Studio lighting setup for realistic 3D presentation.
- Fast dev experience via Vite 8 with HMR.

## Technology Stack

| Layer | Technology |
| --- | --- |
| Runtime | Node.js 22 |
| Framework | React 19 |
| Build Tool | Vite 8 |
| 3D Rendering | Three.js 0.185, React Three Fiber 9, `@react-three/drei` 10 |
| Animation | GSAP 3.15, `@gsap/react` 2 |
| Styling | TailwindCSS 4, `@tailwindcss/vite` |
| State | Zustand 5 |
| Responsiveness | react-responsive 9 |
| Linting | ESLint 10, eslint-plugin-react-hooks, eslint-plugin-react-refresh |
| Language | JavaScript / TypeScript (TSX components) |

## Architecture

The application is a single-page React app bootstrapped by Vite. The root `App.jsx` composes section components (`Navbar`, `Hero`, `ProductViewer`, `Highlights`, `Performance`, `Features`, `Showcase`, `Footer`). 3D content lives under `src/Components/three` and `src/Components/model`, with lighting provided by `StudioLights`. Shared constants and global state are kept in `src/constants` and `src/store`.

```
index.html
└── src/main.jsx
    └── src/App.jsx
        ├── Navbar
        ├── Hero
        ├── ProductViewer ──► ModelSwitcher ──► Macbook-14 / Macbook-16
        ├── Highlights
        ├── Performance
        ├── Features
        ├── Showcase
        └── Footer
```

## Data Model

This project is a frontend showcase and has no persistent backend data model. Application state (selected model, UI flags) is held in the Zustand store at `src/store/index.js`.

## Project Structure

```
macbook-Gsap/
├── public/                 # Static assets
├── src/
│   ├── Components/         # UI sections and 3D components
│   │   ├── model/          # MacBook 14/16 GLTF models
│   │   └── three/          # R3F scene helpers (lights, switcher)
│   ├── constants/          # Shared constants
│   ├── store/              # Zustand store
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Requirements

- Node.js 22+
- npm (or pnpm/yarn)
- A modern browser with WebGL support

## Quick Start

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

The dev server runs at `http://localhost:5173` by default.

## Environment Variables

No environment variables are required for the default setup. Add a `.env` file only if you introduce external services (analytics, APIs, etc.).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the project |

## Deployment

The project builds to a static bundle in `dist/`. Deploy the contents of `dist/` to any static host:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

Build command: `npm run build` · Output directory: `dist`

## License

This project is provided as it is for learning and demonstration purposes.