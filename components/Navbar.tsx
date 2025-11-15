import { FC } from 'react';
import ThemeToggle from './ThemeToggle';
import { Icon } from './icons';
import { Theme } from '@/types';

interface NavbarProps {
    theme: Theme;
    toggleTheme: () => void;
    toggleSearch: () => void;
}

const Navbar: FC<NavbarProps> = ({ theme, toggleTheme, toggleSearch }) => {
  return (
    <header className="bg-white/70 dark:bg-dark-card/70 backdrop-blur-lg sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
            <Icon name="Shield" className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Privacy Picks</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSearch}
            className="p-2 rounded-[20px] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle search bar"
          >
            <Icon name="Search" size={20} />
          </button>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
