import React from 'react';

interface InstantLogoProps {
  className?: string;
  isDark?: boolean;
}

export const InstantLogo: React.FC<InstantLogoProps> = ({ 
  className = "h-4 sm:h-5", 
  isDark = false 
}) => {
  return (
    <img 
      src={isDark ? "/instant-logo-dark.png" : "/instant-logo.png"}
      alt="Instant Logo"
      className={`w-auto object-contain select-none shrink-0 ${className}`}
      style={{ height: '18px', maxHeight: '18px' }}
      draggable={false}
    />
  );
};
