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

### Hostinger

1.  **Build Your Project**

    First, create a production-ready build of your application by running the following command in your project's terminal:

    ```bash
    npm run build
    ```

    This will create a `dist` folder in your project root. This folder contains all the static files (`index.html`, CSS, and JavaScript) that you'll need to upload.

2.  **Upload to Hostinger**

    - Log in to your Hostinger hPanel and navigate to the **File Manager**.
    - Open the `public_html` directory. This is the root folder for your website.
    - It's easiest to compress the *contents* of your local `dist` folder into a single `.zip` file.
    - Upload this `.zip` file to `public_html` using the File Manager's "Upload" feature.
    - Once uploaded, right-click the `.zip` file and select "Extract" to unpack your application files.

3.  **Configure for Single-Page App (SPA)**

    Since this is a React application, you need to configure the server to redirect all traffic to your `index.html` file. This allows client-side routing to work correctly.

    - In the `public_html` directory, create a new file named `.htaccess`.
    - Paste the following code into the `.htaccess` file and save it:

    ```apache
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteCond %{REQUEST_FILENAME} !-l
      RewriteRule . /index.html [L]
    </IfModule>
    ```

    Your site should now be live!

## About

Privacy Picks is created and maintained by [GlitchGarrison](https://www.reddit.com/u/GlitchGarrison/)

## License

Privacy Picks is distributed under the [MIT license](/LICENSE).
