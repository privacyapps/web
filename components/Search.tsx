import { FC, useMemo } from 'react';
import { Icon } from './icons';

const customTagOrder = [
'Open Source',
'Free',
'Free Tier',
'Android',
'iOS',
'Windows',
'MacOS',
'Linux',
'Google Chrome',
'Firefox',
'Chromium',
'Gecko',
'Hardware',
'Web Extension',
];

interface SearchProps {
  allTags: string[];
  selectedTags: string[];
  onTagClick: (tag: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isSearchVisible: boolean;
}

const Search: FC<SearchProps> = ({ allTags, selectedTags, onTagClick, searchTerm, onSearchChange, isSearchVisible }) => {

  const sortedTags = useMemo(() => {
    return [...allTags].sort((a, b) => {
      const indexA = customTagOrder.indexOf(a);
      const indexB = customTagOrder.indexOf(b);

      if (indexA > -1 && indexB > -1) {
        return indexA - indexB;
      }
      if (indexA > -1) {
        return -1;
      }
      if (indexB > -1) {
        return 1;
      }
      return a.localeCompare(b);
    });
  }, [allTags]);

  const sectionClasses = `
  absolute top-0 w-full z-30 bg-white dark:bg-dark-card rounded-[20px] shadow-lg
  overflow-hidden transition-all duration-500 ease-in-out
  ${isSearchVisible
    ? 'max-h-[500px] p-5 opacity-100'
    : 'max-h-0 p-0 opacity-0 border-none'
  }
  `;

  return (
    <section
    id="search"
    className={sectionClasses}
    onClick={(e) => e.stopPropagation()}
    >
    <div className="mb-5">
    <div className="relative">
    <input
    type="text"
    value={searchTerm}
    onChange={(e) => onSearchChange(e.target.value)}
    placeholder="Search by name or description..."
    className="w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <Icon name="Search" className="w-5 h-5 text-gray-400" />
    </div>
    </div>
    </div>

    <div className={selectedTags.length > 0 ? 'mb-4' : ''}>
    <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-on-hover">
    {sortedTags.map(tag => {
      const isSelected = selectedTags.includes(tag);
      return (
        <button
        key={tag}
        onClick={() => onTagClick(tag)}
        className={`flex-shrink-0 text-xs px-3 py-1 rounded-[20px] border transition-colors ${
          isSelected
          ? 'bg-primary text-white border-primary'
          : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        >
        {tag}
        </button>
      );
    })}
    </div>
    </div>

    {selectedTags.length > 0 && (
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Active Filters:</h4>
      <div className="flex flex-wrap gap-2">
      {selectedTags.map(tag => (
        <button
        key={tag}
        onClick={() => onTagClick(tag)}
        className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-[20px] bg-primary text-white hover:brightness-95 transition-colors"
        aria-label={`Remove ${tag} filter`}
        >
        <span>{tag}</span>
        <Icon name="X" size={14} />
        </button>
      ))}
      </div>
      </div>
    )}
    </section>
  );
};

export default Search;
