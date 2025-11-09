import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Export the Vite configuration
export default defineConfig(({ mode }) => {
  // Load environment variables from .env files based on the current mode (e.g., 'development', 'production')
  // The third argument '' ensures that all variables are loaded, not just those prefixed with VITE_
  // FIX: Replaced `process.cwd()` with `__dirname` to resolve a TypeScript error.
  const env = loadEnv(mode, __dirname, '');

  return {
    // Set the base path for the project. This is crucial for Vercel deployment.
    base: '/',
    
    // Configure the development server
    server: {
      port: 3000,
      host: '0.0.0.0', // Allows access from other devices on the same network
    },
    
    // List of Vite plugins to use
    plugins: [],
    
    // Define global constants to be replaced at build time.
    // This is used to expose environment variables to the client-side code.
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    
    // Configure path aliases for easier imports
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});