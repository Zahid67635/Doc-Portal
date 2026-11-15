# Doc-Portal

Doc-Portal (Doc-Port) is a doctor service portal. Users can browse doctor services, view service details and customer reviews, post comments and reviews, and manage their own services and reviews after signing in. It also includes a blog and an emergency section.

**Live demo:** https://doc-port-8953a.web.app/

## Features

- Sign in and sign up with Firebase Authentication (email/password and Google sign-in)
- Browse services and view service details
- Add a service (protected — sign-in required)
- View and manage your own reviews (protected — sign-in required)
- Post comments and reviews on services
- Blog page
- Emergency section on the home page, with a home slider
- Protected routes — unauthenticated users are redirected to `/login`
- JWT-based authorisation with the backend API (token stored in `localStorage`)

## Tech Stack

- Create React App, React 18, JavaScript
- React Router v6 (`createBrowserRouter`)
- Firebase 9 (Authentication, Hosting)
- Tailwind CSS + daisyUI
- react-hot-toast, react-icons, react-photo-view
- Lottie (`lottie-react`)
- Backend API (separate repo/service, not in this repo): https://doc-port-server.vercel.app — Express.js + Node.js + MongoDB

## Prerequisites

- Node.js 16+ and npm

## Installation

```bash
git clone https://github.com/Zahid67635/Doc-Portal.git
cd Doc-Portal
npm install
```

## Environment Variables

Create a `.env` file in the project root with your Firebase configuration (names only — no values are stored in this repo):

```env
REACT_APP_apiKey=
REACT_APP_authDomain=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
```

These are read in `src/firebase/firebase.config.js`.

## How to Run

```bash
# Development
npm start

# Production build
npm run build

# Tests
npm test
```

Open http://localhost:3000 in your browser. The built app is deployed with Firebase Hosting (`firebase.json` serves `build/` with an SPA rewrite).

## Routes

| Path | Page | Access |
| --- | --- | --- |
| `/` | Home (services, slider, emergency section) | Public |
| `/services` | All services | Public |
| `/services/:id` | Service detail + reviews/comments | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/add` | Add a service | Protected |
| `/myreviews` | Your reviews | Protected |
| `/comment` | Comment | Public |
| `/blog` | Blog | Public |
| `*` | 404 Not Found | Public |

## Project Structure

```text
Doc-Portal/
├── src/
│   ├── App.js                # Routes (createBrowserRouter)
│   ├── index.js              # Entry point, AuthProvider + PhotoProvider
│   ├── Contexts/
│   │   └── AuthProvider.js   # Firebase auth context
│   ├── PrivateRoute/
│   │   └── PrivateRoute.js
│   ├── firebase/
│   │   └── firebase.config.js
│   ├── layout/
│   │   └── Main.js           # Header + Outlet + Footer
│   ├── Pages/
│   │   ├── Home/             # Home, ServiceCard, Extra, Slider, Emergency
│   │   ├── Services/         # Services, Service, ServiceDetail, Review/Review, Review/Comment
│   │   ├── Login/            # Login
│   │   ├── Register/         # Register
│   │   ├── Blog/             # Blog
│   │   └── NotFound/         # Notfound
│   ├── Shared/               # Header, Footer, AddService, MyReviews
│   ├── Hooks/
│   │   └── UseTitle.js
│   └── assets/               # Lottie animations, images, logo
├── public/
├── firebase.json
├── tailwind.config.js
└── package.json
```

## Backend

This repo is the frontend only. Data is fetched from `https://doc-port-server.vercel.app` (endpoints include `/home`, `/services`, `/services/:id`, `/jwt`, `/myreviews?email=…`, `/review/:id`). The backend code lives in the separate repo [Zahid67635/Doc-Portal-Server](https://github.com/Zahid67635/Doc-Portal-Server).
