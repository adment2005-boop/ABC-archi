import React, { useState } from 'react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  monochrome?: boolean;
  hoverColor?: boolean;
  priority?: boolean;
}

/**
 * Resilient architectural image container with zero-broken-image blueprint fallback.
 */
export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  title,
  className = '',
  monochrome = false,
  hoverColor = false,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-[#121212] text-white/70 border border-white/10 ${className}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 240 160"
          className="absolute inset-0 h-full w-full opacity-20"
          fill="none"
        >
          <circle cx="120" cy="80" r="56" stroke="#C5A059" strokeWidth="0.75" />
          <line x1="0" y1="80" x2="240" y2="80" stroke="#FFFFFF" strokeWidth="0.5" />
          <line x1="120" y1="0" x2="120" y2="160" stroke="#FFFFFF" strokeWidth="0.5" />
        </svg>
        <span className="relative z-10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#C5A059]">
          ABC ARCHIVE
        </span>
        {title && (
          <span className="relative z-10 mt-2 px-4 text-center text-xs uppercase tracking-[0.14em] text-white/80">
            {title}
          </span>
        )}
      </div>
    );
  }

  const filterClasses = monochrome
    ? hoverColor
      ? 'grayscale contrast-[1.06] group-hover:grayscale-0 group-hover:contrast-100'
      : 'grayscale contrast-[1.08]'
    : '';

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={`object-cover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${filterClasses} ${className}`}
    />
  );
};
