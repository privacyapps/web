import { FC } from 'react';
import { Icon } from './icons';
import { ResourceCategory, SourceType } from '@/types';
import ImageWithPlaceholder from './ImageWithPlaceholder';

const sortTags = (tags: string[]): string[] => {
  const order: { [key: string]: number } = {
    // Source Availability
    'Open Source': 1,
    'Proprietary': 2,
    
    // Price
    'Free': 10,
    'Free Tier': 11,
    'Paid': 12,

    // Platforms
    'Android': 20,
    'iOS': 21,
    'Windows': 22,
    'MacOS': 23,
    'Linux': 24,
    'Google Chrome': 25,
    'Firefox': 26,
    'Chromium': 27,
    'Gecko': 28,
    'Web Extension': 29,
    'Hardware': 30,
  };

  return [...tags].sort((a, b) => {
    const orderA = order[a] || 100; // Others get a high number
    const orderB = order[b] || 100;

    if (orderA !== orderB) {
      return orderA - orderB;
    }
    
    // If same order value (e.g., both are 'other'), sort alphabetically
    return a.localeCompare(b);
  });
};

const SourceIcon: FC<{ type: SourceType }> = ({ type }) => {
    const commonClasses = "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors";
    switch (type) {
        case 'github':
        case 'gitlab':
            return <Icon name="GitHub" size={20} className={commonClasses} />;
        case 'youtube':
            return <Icon name="Youtube" size={20} className={commonClasses} />;
        case 'playstore':
            return <Icon name="Play" size={20} className={commonClasses} />;
        case 'appstore':
            return <Icon name="ShoppingBag" size={20} className={commonClasses} />;
        case 'fdroid':
            return <Icon name="Package" size={20} className={commonClasses} />;
        case 'chrome':
            return <Icon name="Chrome" size={20} className={commonClasses} />;
        case 'firefox':
            return <Icon name="Globe" size={20} className={commonClasses} />;
        default:
            return <Icon name="ExternalLink" size={20} className={commonClasses} />;
    }
}

interface ResourceSectionProps {
    category: ResourceCategory;
    selectedTags: string[];
    onTagClick: (tag: string) => void;
}

const ResourceSection: FC<ResourceSectionProps> = ({ category, selectedTags, onTagClick }) => {
  const getOptimizedIconUrl = (url?: string, name?: string, size: number = 55) => {
      if (!url) {
          return `https://api.dicebear.com/8.x/shapes/svg?seed=${encodeURIComponent(name || 'default-seed')}`;
      }
      if (url.startsWith('https://cdn.jsdelivr.net/gh/')) {
          const requestSize = Math.round(size * 2); // Request 2x size for retina displays
          return `${url}?w=${requestSize}&h=${requestSize}&fit=cover&q=85&f=auto`;
      }
      return url;
  };

  return (
    <section id={category.id} className="mb-16 scroll-mt-20">
      <div className="flex items-center justify-center gap-4 mb-8">
        <Icon name={category.icon} className="w-10 h-10 text-primary" />
        <h2 className="text-3xl font-bold">{category.title}</h2>
      </div>

      {category.id === 'operating-systems' && (
        <div className="max-w-4xl mx-auto mb-10 text-center text-gray-600 dark:text-gray-400">
            <p className="mb-4">Linux is not a standalone operating system—it's a kernel, the core of an operating system. The ones mentioned below are called Linux distributions (or “distros” for short). I chose these specifically for their beginner-friendly nature and strong privacy and security practices out of the box. Not every Linux distro is created equal, but almost all guarantee better privacy, digital control, and open-source values than Windows or macOS.</p>
            <p>
                If you want to learn more about other distros, you can use <a href="https://distrochooser.de/" className="text-primary hover:brightness-90" target="_blank" rel="noopener noreferrer">Distrochooser</a> to help you find the one that makes the most sense for you.
            </p>
        </div>
      )}
      
      {category.subCategories.map((sub) => (
        <div key={sub.id} id={sub.id} className="mb-12 scroll-mt-20">
            <div className="flex flex-col items-center justify-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="relative flex justify-center items-center h-28 w-full">
                    {(() => {
                        const icons = sub.icon.slice(0, 3);
                        const iconCount = icons.length;
                        const baseCardClasses = "absolute w-[70px] h-[70px] rounded-[18px] bg-white dark:bg-dark-card border border-black/10 dark:border-white/10 flex items-center justify-center transition-transform duration-300 overflow-hidden";

                        const renderIcon = (url: string) => (
                          <ImageWithPlaceholder
                            src={getOptimizedIconUrl(url, sub.title, 70)}
                            alt={`${sub.title} icon`}
                            className="w-full h-full object-cover"
                            wrapperClassName="w-full h-full"
                            width="70"
                            height="70"
                          />
                        );

                        if (iconCount === 0) {
                            return (
                                <div className={`${baseCardClasses} shadow-lg`}>
                                    <Icon name="HelpCircle" size={32} className="text-primary" />
                                </div>
                            );
                        }

                        if (iconCount === 1) {
                            return (
                                <div className={`${baseCardClasses} shadow-lg`}>
                                    {renderIcon(icons[0])}
                                </div>
                            );
                        }

                        if (iconCount === 2) {
                            return (
                                <>
                                    <div
                                        className={`${baseCardClasses} shadow-md`}
                                        style={{
                                            transform: 'translateX(-20px) rotate(-10deg)',
                                            zIndex: 1,
                                        }}
                                    >
                                        {renderIcon(icons[0])}
                                    </div>
                                    <div
                                        className={`${baseCardClasses} shadow-md`}
                                        style={{
                                            transform: 'translateX(20px) rotate(10deg)',
                                            zIndex: 2,
                                        }}
                                    >
                                        {renderIcon(icons[1])}
                                    </div>
                                </>
                            );
                        }

                        // iconCount is 3
                        return (
                            <>
                                {/* Bottom Left Icon */}
                                <div
                                    className={`${baseCardClasses} shadow-md`}
                                    style={{
                                        transform: 'translate(-28px, 12px) rotate(-15deg)',
                                        zIndex: 1,
                                    }}
                                >
                                    {renderIcon(icons[0])}
                                </div>
                                {/* Bottom Right Icon */}
                                <div
                                    className={`${baseCardClasses} shadow-md`}
                                    style={{
                                        transform: 'translate(28px, 12px) rotate(15deg)',
                                        zIndex: 1,
                                    }}
                                >
                                    {renderIcon(icons[2])}
                                </div>
                                {/* Top Center Icon */}
                                <div
                                    className={`${baseCardClasses} shadow-xl dark:shadow-primary/30`}
                                    style={{
                                        transform: 'scale(1.1)',
                                        zIndex: 2,
                                    }}
                                >
                                    {renderIcon(icons[1])}
                                </div>
                            </>
                        );
                    })()}
                </div>
                <h3 className="text-2xl font-semibold text-center"> 
                    {sub.title}
                 </h3>
            </div>

            {sub.links.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sub.links.map((link) => {
                    const websiteUrl = link.sources.find(s => s.type === 'website')?.url || link.sources[0]?.url || '#';
                    
                    const sourceOrder = ['playstore', 'appstore', 'fdroid', 'github', 'gitlab', 'youtube', 'chrome', 'firefox'];
                    
                    const sortedSourceLinks = link.sources
                        .filter(s => s.type !== 'website' && s.url !== websiteUrl)
                        .sort((a, b) => {
                            const indexA = sourceOrder.indexOf(a.type);
                            const indexB = sourceOrder.indexOf(b.type);
                            if (indexA === -1 && indexB === -1) return 0;
                            if (indexA === -1) return 1;
                            if (indexB === -1) return -1;
                            return indexA - indexB;
                        });
                    
                    const iconSrc = getOptimizedIconUrl(link.customIcon, link.name, 55);

                    return (
                        <div key={link.imgId} className="bg-white dark:bg-dark-card p-6 rounded-[20px] shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-between items-start mb-3">
                                <a
                                    href={websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 group"
                                >
                                    <ImageWithPlaceholder
                                        src={iconSrc}
                                        alt={`${link.name} logo`}
                                        className="w-full h-full object-cover"
                                        wrapperClassName="w-[55px] h-[55px] rounded-[15px] border-2 border-transparent group-hover:border-primary transition-colors duration-300"
                                        width="55"
                                        height="55"
                                    />
                                    <span className="text-xl font-bold group-hover:text-primary dark:group-hover:text-primary transition-colors flex items-center gap-2">
                                        {link.name}
                                        {link.recommended && (
                                          <Icon name="Star" className="w-5 h-5 text-yellow-400 fill-current mb-1" />
                                        )}
                                     </span>
                                </a>
                                <div className="flex items-center gap-2.5 flex-shrink-0 ml-2 mt-1">
                                    {sortedSourceLinks.map(source => (
                                        <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} on ${source.type}`}>
                                            <SourceIcon type={source.type} />
                                        </a>
                                    ))}
                                 </div>
                            </div>
                            
                            <p 
                                className="text-sm text-gray-600 dark:text-gray-400 flex-grow"
                                dangerouslySetInnerHTML={{ __html: link.description }}
                            />
                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                {sortTags(link.tags).map((tag) => {
                                const isSelected = selectedTags.includes(tag);
                                return (
                                    <button
                                    key={tag}
                                    onClick={() => onTagClick(tag)}
                                    className={`text-xs px-2 py-1 rounded-[20px] transition-colors ${
                                        isSelected
                                            ? 'bg-primary text-white'
                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/80'
                                    }`}
                                    >
                                    {tag}
                                    </button>
                                )
                                })}
                             </div>
                        </div>
                    )
                })}
                 </div>
            ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-card rounded-[20px] shadow-md">
                    <Icon name="Coffee" className="mx-auto w-12 h-12 mb-2" />
                    <p>Resources coming soon!</p>
                </div>
            )}
        </div>
      ))}
    </section>
  );
};

export default ResourceSection;