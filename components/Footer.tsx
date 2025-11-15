import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-card shadow-inner mt-12">
    <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
    <p>© {new Date().getFullYear()} Privacy Picks by GlitchGarrison. All rights reserved.</p>
    <p className="text-sm mt-2">Your guide to a more private digital life.</p>
    <div className="flex justify-center gap-4 mt-4 text-sm">
    <a href="https://github.com/privacyapps" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
    GitHub
    </a>
    <a href="https://www.reddit.com/u/GlitchGarrison/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
    Reddit
    </a>
    </div>
    </div>
    </footer>
  );
};

export default Footer;
