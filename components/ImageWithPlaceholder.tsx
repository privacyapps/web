import React, { useState } from 'react';

interface ImageWithPlaceholderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderClassName?: string;
  wrapperClassName?: string;
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  alt,
  className,
  placeholderClassName,
  wrapperClassName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageSrc = src || '';

  return (
    <div className={`relative overflow-hidden ${wrapperClassName || ''}`}>
    {!isLoaded && (
      <div
      className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse ${placeholderClassName || ''}`}
      />
    )}
    <img
    src={imageSrc}
    alt={alt}
    className={`${className || ''} transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    onLoad={() => setIsLoaded(true)}
    onError={() => setIsLoaded(true)} // Stop loader on error
    loading="lazy"
    {...props}
    />
    </div>
  );
};

export default ImageWithPlaceholder;
