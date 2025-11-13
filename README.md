# Privacy Picks

This project was created using Google AI Studio, built with React, TypeScript, and Vite.

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- npm

### Local Development

1. Clone the repository

```bash
git clone https://github.com/privacyapps/web.git
cd web
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Add a missing app

New apps can be added to the catalog by adding the app logo, modifying `/constants.ts` and opening a PR.

### App logo requirements

When adding a new app, please ensure the logo meets these specifications:

- Format: JPG
- General: 200x200px, no rounded corners, no transparent background, sufficient padding around the logo
- File size: < 30KB
- Location: Place the logo file in `/icons/{app_id}.jpg`

## Deployment

### Vercel

This project is configured for seamless deployment to [Vercel](https://vercel.com).

1.  **Fork/Clone the repository.**

2.  **Import Project on Vercel:**
    - From your Vercel dashboard, click "Add New..." and select "Project".
    - Import your Git repository. Vercel will automatically detect the settings from `vercel.json`.

3.  **Deploy:**
    - Click "Deploy". Your app will be built and deployed.
    - Vercel will automatically redeploy your project on every push to the `main` branch.

## About

Privacy Picks is created and maintained by [Fahim Shahariar](https://bsky.app/profile/fshahariar.bsky.social)

## License

Privacy Picks is distributed under the [MIT license](/LICENSE).
