# React Express Starter Template - TypeScript Edition 🚀

## Cool Things About This Template

- Since you're using TypeScript on both the frontend and backend, you can share types between the two. Companies pay millions of dollars a year for this kind of technology. You're welcome.
- There is a top-level npm package that allows you to more easily run your entire application stack locally, making full-stack development way easier.
- Everything can be built separately if you want to deploy your frontend and backend separately.
- Uses Vite instead of Create React App because we're all adults here.

## Advice for Using This Template 📝

- Get everything running first by following the instructions for getting started.
- Once you have everything running, you can start making changes to the frontend and backend from a clean and working state.
- The FIRST thing you should change is all of the names for everything. Do a project wide search for "REPLACE ME".

## Tech Stack 💻

- Frontend: React + TypeScript + Vite
- Backend: Express + TypeScript
- Database: _______________ (you fill this in)

## Getting Started 🏁

### Prerequisites

- Node.js
- npm

Yeah that's it!

### Installation

1. Rename this file and create your own README.md with your project's name and description.
```bash
mv README.md README.guide.md
echo "# REPLACE ME" > README.md
```

2. Install everything in one go:
```bash
npm run install:all
```

### Running the Project

The cool way (everything at once):
```bash
npm run dev
```

The less cool way (if you want to run things separately):
```bash
# Terminal 1 - Build shared types
cd shared
npm run build

# Terminal 2 - Run backend
cd backend
npm run dev

# Terminal 3 - Run frontend
cd frontend
npm run dev
```

## Project Structure 📁

```
.
├── frontend/          # Your frontend
├── backend/           # Your backend
├── shared/           # All your shared code
└── package.json      # Top-level package.json for orchestrating everything
```

## Development Setup 🛠

### Environment Variables

Frontend (.env):
```
VITE_API_URL=http://localhost:3001
```

Backend (.env):
```
PORT=3001
```

## Available Scripts 📝

| Command | Location | Description |
|---------|----------|-------------|
| `npm run dev` | Top-level | Runs the entire stack locally |
| `npm run install:all` | Top-level | Installs all dependencies for frontend, backend, and shared |
| `npm run build` | `frontend`/`backend`/`shared` | Builds the frontend, backend, or shared code |
| `npm run dev` | `frontend`/`backend` | Runs the frontend or backend in development mode |
| `npm run lint` | `frontend` | Lints the frontend code |
| `npm run preview` | `frontend` | Previews the production build of the frontend |
| `npm run watch` | `shared` | Watches the shared code for changes and rebuilds |


## Making Changes to Shared Types 🤝

1. Update types in `shared/src/types`
2. If you added any new types, optionally export them in `shared/src/types/index.ts` to keep everything in the same import namespace (this is optional)
3. Run `npm run build` in the shared directory
4. Run `npm install` in frontend and backend to get the new shared types

## Production 🚀

### Frontend
```bash
cd frontend
npm run build
# Deploy the dist folder to your favorite hosting service
```

### Backend
```bash
cd backend
npm run build
# Deploy the dist folder to your favorite server
```