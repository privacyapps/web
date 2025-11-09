import { FC } from 'react';
import { Icon } from './icons';
import { Theme } from '@/types';

interface ThemeToggleProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-[20px] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Icon name="Moon" size={20} /> : <Icon name="Sun" size={20} />}
    </button>
  );
};

export default ThemeToggle;