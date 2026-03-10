# LinkPost — Site Context

> AI-powered LinkedIn posting app. Connect your LinkedIn, set preferences, and auto-publish posts.

---

## Tech Stack

| Layer    | Tech                                      |
| -------- | ----------------------------------------- |
| Frontend | React 19, Vite 7, Tailwind CSS v4         |
| Backend  | Node.js, Express 5                        |
| Database | Supabase (PostgreSQL)                     |
| Auth     | JWT (jsonwebtoken + bcryptjs)             |
| Uploads  | Multer (local disk → `/uploads`)          |
| HTTP     | Axios (frontend), CORS enabled (backend)  |

---

## Project Structure

```
linkdin-app/
├── frontend/          ← React + Vite
├── backend/           ← Express API
├── .gitignore
└── site_context.md    ← this file
```

---

## Frontend (`frontend/`)

### Structure

```
src/
├── components/
│   ├── Layout.jsx          ← Navbar + <Outlet /> wrapper for protected pages
│   └── Navbar.jsx          ← Sticky top nav with active link highlighting
├── pages/
│   ├── Landing.jsx         ← Public marketing landing page with sections + CTA
│   ├── Login.jsx           ← Split-screen login (email/password + LinkedIn OAuth)
│   ├── Register.jsx        ← Split-screen register (name/email/password)
│   ├── Dashboard.jsx       ← Stats cards, upcoming posts, quick actions
│   ├── Connect.jsx         ← LinkedIn OAuth connection flow + permissions info
│   ├── Settings.jsx        ← Tone, frequency, topics, toggles, account, danger zone
│   └── Profile.jsx         ← Profile header, bio, stats, recent posts
├── App.jsx                 ← BrowserRouter + route definitions
├── index.css               ← Tailwind v4 import + brand color tokens
└── main.jsx                ← React DOM entry point
```

### Routes

| Path         | Page       | Auth Required | Layout |
| ------------ | ---------- | ------------- | ------ |
| `/`          | Landing    | No            | None   |
| `/login`     | Login      | No            | None   |
| `/register`  | Register   | No            | None   |
| `/dashboard` | Dashboard  | Yes           | Navbar |
| `/connect`   | Connect    | Yes           | Navbar |
| `/settings`  | Settings   | Yes           | Navbar |
| `/profile`   | Profile    | Yes           | Navbar |
| `*`          | → `/`      | —             | —      |

### Brand Colors (Tailwind `@theme`)

- `brand-500`: `#0a66c2` (LinkedIn blue — primary)
- `brand-600`: `#004182` (hover)
- `brand-700`: `#00305e` (dark accents)
- Full range: `brand-50` through `brand-900`

### Key Dependencies

- `react-router-dom` v7 — routing
- `axios` — HTTP client for API calls
- `tailwindcss` v4 + `@tailwindcss/vite` — styling
- Font: Inter (Google Fonts, loaded in `index.html`)

### Status

- [x] Tailwind CSS wired up (vite plugin + `@import "tailwindcss"`)
- [x] Public landing page (`/`) with full marketing sections
- [x] All pages created (static/hardcoded data)
- [ ] Connect pages to backend API (Login, Register)
- [ ] Auth context / token management
- [ ] LinkedIn OAuth flow
- [ ] Dynamic data fetching (Dashboard, Profile)

---

## Backend (`backend/`)

### Structure

```
backend/
├── config/
│   └── db.js                ← Supabase client (`@supabase/supabase-js`)
├── controllers/
│   ├── authController.js    ← register (bcrypt hash) + login (JWT sign)
│   ├── userController.js    ← getProfile, updateProfile (with multer upload)
│   └── postController.js    ← createPost, getFeed, getPost, deletePost
├── middleware/
│   └── auth.js              ← JWT verification middleware
├── models/
│   ├── User.js              ← Supabase queries: create, findByEmail, findById, update
│   ├── Post.js              ← Supabase queries: create, findAll, findById, delete
│   └── Connection.js        ← Supabase queries: sendRequest, accept, reject, find
├── routes/
│   ├── auth.js              ← POST /api/auth/register, POST /api/auth/login
│   ├── users.js             ← GET /api/users/profile, PUT /api/users/profile
│   ├── posts.js             ← GET/POST /api/posts, GET/DELETE /api/posts/:id
│   └── connections.js       ← GET/POST/PUT/DELETE /api/connections/*
├── uploads/                 ← Profile pictures & post images (multer disk storage)
├── .env                     ← Secrets (not committed)
├── .env.example             ← Template: PORT, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, JWT_SECRET
├── package.json
└── server.js                ← Express entry point, mounts all routes
```

### API Endpoints

| Method | Endpoint                          | Auth | Description                  |
| ------ | --------------------------------- | ---- | ---------------------------- |
| POST   | `/api/auth/register`              | No   | Create account               |
| POST   | `/api/auth/login`                 | No   | Login, returns JWT           |
| GET    | `/api/users/profile`              | Yes  | Get own profile              |
| GET    | `/api/users/profile/:id`          | Yes  | Get user by ID               |
| PUT    | `/api/users/profile`              | Yes  | Update profile (+ picture)   |
| GET    | `/api/posts`                      | Yes  | Feed (paginated)             |
| GET    | `/api/posts/:id`                  | Yes  | Single post                  |
| POST   | `/api/posts`                      | Yes  | Create post (+ image)        |
| DELETE | `/api/posts/:id`                  | Yes  | Delete own post              |
| GET    | `/api/connections`                | Yes  | List accepted connections    |
| GET    | `/api/connections/pending`        | Yes  | List pending requests        |
| POST   | `/api/connections/request/:userId`| Yes  | Send connection request      |
| PUT    | `/api/connections/accept/:id`     | Yes  | Accept request               |
| DELETE | `/api/connections/reject/:id`     | Yes  | Reject / remove request      |
| GET    | `/api/health`                     | No   | Health check                 |

### Key Dependencies

- `express` v5 — web framework
- `@supabase/supabase-js` v2 — database client
- `bcryptjs` — password hashing
- `jsonwebtoken` — JWT auth tokens
- `multer` — file uploads
- `cors` — cross-origin requests
- `dotenv` — env variable loading
- `nodemon` (dev) — auto-restart on file changes

### Database Tables (Supabase / PostgreSQL)

**users**
- `id` UUID (PK), `name`, `email` (unique), `password`, `headline`, `bio`, `location`, `profile_picture`, `created_at`

**posts**
- `id` UUID (PK), `user_id` (FK → users), `content`, `image_url`, `created_at`

**connections**
- `id` UUID (PK), `sender_id` (FK → users), `receiver_id` (FK → users), `status` (pending | accepted), `created_at`

### Environment Variables

```
PORT=5000
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
JWT_SECRET=your-jwt-secret
```

### Status

- [x] Express server with all routes mounted
- [x] Supabase client configured
- [x] Auth (register/login with JWT)
- [x] User, Post, Connection models
- [x] File upload middleware (multer)
- [ ] Supabase tables created
- [ ] LinkedIn OAuth integration
- [ ] Post scheduling logic
- [ ] AI post generation

---

## Pending / Next Steps

1. Create Supabase tables (run SQL in dashboard)
2. Fill `.env` files with real Supabase keys
3. Wire frontend Login/Register to backend API
4. Add auth context + token storage (React)
5. Register LinkedIn app at developer portal
6. Implement LinkedIn OAuth flow (backend + frontend)
7. Build AI post generation feature
8. Add post scheduling (cron / Supabase scheduled functions)
