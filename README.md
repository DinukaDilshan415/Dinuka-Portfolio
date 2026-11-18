# Dinuka Dilshan Athapaththu - Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. It includes a pointer-reactive animated background, light and dark themes, and dedicated pages for certifications, experience, and projects.

## Features

- Responsive navigation and portfolio sections
- Dedicated pages for certifications, experience, and projects, with homepage previews
- Light/dark theme toggle with the preference saved in the browser
- Animated particle background that reacts to pointer movement and respects reduced-motion preferences
- Data-driven profile, education, certifications, experience, projects, skills, and social links

## Tech stack

- React 18 and TypeScript
- Vite
- Tailwind CSS 4
- React Router
- React Icons

## Getting started

Install [Node.js](https://nodejs.org/) and npm, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite to view the site.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check the project and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

To build and preview the production version:

```bash
npm run build
npm run preview
```

## Pages

| Path | Content |
| --- | --- |
| `/` | Home, about, education, previews of certifications/experience/projects, skills, and contact |
| `/certifications` | All certifications |
| `/experience` | All experience entries |
| `/projects` | All projects |

The navigation also links to sections on the home page, such as `/#about`, `/#skills`, and `/#contact`.

## Customize the portfolio

- **Content and links:** Edit `src/data.ts`. This includes the profile, social URLs, navigation, education, certification IDs and links, experience, projects, and skills.
- **Theme and fonts:** Edit the theme variables and global styles in `src/index.css`.
- **Page layout and components:** The app shell and routes are in `src/App.tsx`; reusable UI is in `src/components/`; page sections are in `src/sections/`.
- **Profile photo:** Replace `public/profile.png` with your image, keeping the filename or updating the `photo` value in `src/data.ts`.
- **Resume:** Add your PDF to `public/` and update `src/data.ts`. On Vercel, keep the matching `Content-Disposition: inline` header in `vercel.json` so the PDF opens in the browser viewer.
- **Certificate images:** Set each certification's `imageUrl` in `src/data.ts`; its `url` field points to the digital copy or verification page.
- **Project images:** Set a project's optional `imageUrl` in `src/data.ts` to an image URL. Projects without one keep their generated artwork.
- **Site title and description:** Update the metadata in `index.html`.

## Project structure

```text
src/
  App.tsx             App shell, routes, theme, and footer
  main.tsx            React entry point and router setup
  data.ts             Portfolio content
  types.ts            Shared TypeScript types
  hooks.ts            Scroll reveal and active-section hooks
  components/         Navigation, background, cursor, and shared UI
  sections/           Home, about, education, certifications, experience,
                      projects, skills, and contact
public/               Static images, icons, and other public assets
```

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to a static host. Because the site uses client-side routes, configure the host to serve `index.html` as the fallback for app routes such as `/certifications`, `/experience`, and `/projects`.
