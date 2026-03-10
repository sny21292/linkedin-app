# LinkPost (LinkedIn App)

LinkPost is a full-stack app that helps users create, schedule, and publish LinkedIn content based on their preferences.

## Live Links

- Frontend: [https://linkdinappfrontend.duckdns.org](https://linkdinappfrontend.duckdns.org)
- Backend Health: [https://linkdinappbackend.duckdns.org/api/health](https://linkdinappbackend.duckdns.org/api/health)

## Project Structure

- `frontend/` - React + Vite + Tailwind CSS
- `backend/` - Node.js + Express + Supabase
- `site_context.md` - ongoing project context and architecture notes

## Current Features

- Auth pages (login and register)
- Marketing landing page
- Dashboard, connect, settings, and profile pages (static UI)
- Backend auth, users, posts, and connections APIs

## Run Locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Environment Setup

- Frontend example: `frontend/.env.example`
- Backend example: `backend/.env.example`

Copy each `.env.example` to `.env` and fill in real values.
