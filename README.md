# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

---

## Backend & Admin Dashboard (TypeScript)

This project now includes a full TypeScript backend powered by **Express** and **Prisma** (SQLite by default) along with a simple admin dashboard on the frontend. The API handles dynamic content (projects, skills, testimonials, etc.) and supports image uploads.

### Getting started

1. **Server dependencies**

   ```bash
   cd server
   npm install          # or yarn
   cp .env.example .env # adjust DATABASE_URL & JWT_SECRET
   ```

2. **Initialize the database**

   ```bash
   npm run prisma:generate   # install client (Prisma 6+)
   npm run prisma:migrate    # create SQLite file and tables (run again after updating schema)
   ```

3. **Run in development**

   ```bash
   # start frontend and backend together from project root
   npm run dev:all

   # or run individually
   cd server && npm run dev
   # and in another terminal from root: npm run dev
   ```

   Backend will listen on `http://localhost:4000` and exposes endpoints under `/api/...`.

4. **Create an admin user**

   You can still use the `/api/auth/create` endpoint for initial seeding, but the server will now automatically create an admin user if none exists at startup.
   Set the following environment variables before running the server (use Vercel project settings for deployment):

   ```bash
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=secret
   ```

   When the backend starts it checks for a user with that email; if missing it hashes the password and creates the record.  You may remove or secure the `/create` route after confirming the account is seeded.

   **Persistent database** – SQLite’s file is wiped on each deploy. Use a managed database service (Postgres, MySQL, MariaDB, etc.) and point `DATABASE_URL` at it. Services like [Supabase](https://supabase.com), [Neon](https://neon.tech), [PlanetScale](https://planetscale.com) or Heroku Postgres work well with Prisma. Once you update `DATABASE_URL` you can run `npm run server:prisma` to apply migrations to the remote database.

5. **Frontend admin dashboard**

   A new `src/admin` directory contains React components for login and CRUD forms.  Login returns a JWT which should be stored and sent in the `Authorization` header for protected requests.  Only the projects UI is scaffolded as an example, but you can add similar forms for skills, testimonials, messages or any model.

   The API exposes the following base endpoints (unauthenticated GETs, other actions require a token):
   - `/api/projects`
   - `/api/skills`
   - `/api/testimonials`
   - `/api/messages` (POST for contact form, GET for admin)

   Image uploads go to `/api/projects/upload` and return a static path.

   Use the `/api/projects/upload` endpoint with `multipart/form-data` to store images in `server/uploads` and return a path usable by the frontend.

---

Please refer to the code in `server/src` for route/controller examples; adapting other models (skills, testimonials, etc.) follows the same pattern.

---

### Monorepo deployment (single Vercel project)

A `vercel.json` has been included at the repository root along with a custom
`vercel-build` script in `package.json`. When you create a Vercel project pointing
at this repo, the platform will:

1. run `npm run vercel-build` (builds frontend & backend)
2. route requests matching `/api/*` to the server function at `server/src/index.ts`
3. serve static files from `dist` and forward `/uploads/*` to `server/uploads`

No additional configuration is required—simply set the usual environment
variables (`JWT_SECRET`, `DATABASE_URL`, plus any `VITE_…` vars) in the Vercel
dashboard. Note that the filesystem is ephemeral, so uploaded files won’t persist
between deployments; for production use an external storage service.

