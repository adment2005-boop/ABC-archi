import React from 'react';

interface BlueprintGeometryProps {
  variant?: 'hero' | 'philosophy' | 'map' | 'subtle';
  theme?: 'dark' | 'light';
  className?: string;
}

/**
 * Faint architectural compass & blueprint geometric circle line-art overlays.
 * Uses ultra-fine 0.75px strokes with low opacity so typography remains crisp.
 */
export const BlueprintGeometry: React.FC<BlueprintGeometryProps> = ({
  variant = 'subtle',
  theme = 'light',
  className = '',
}) => {
  const strokeColor =
    theme === 'dark' ? 'rgba(255, 255, 255, 0.09)' : 'rgba(8, 8, 8, 0.07)';
  const goldStroke =
    theme === 'dark' ? 'rgba(197, 160, 89, 0.22)' : 'rgba(197, 160, 89, 0.28)';

  if (variant === 'hero') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 860"
        fill="none"
        className={`pointer-events-none select-none absolute inset-0 h-full w-full ${className}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Outer architectural drafting compass circles */}
        <circle cx="1040" cy="420" r="340" stroke={strokeColor} strokeWidth="0.75" />
        <circle cx="1040" cy="420" r="220" stroke={goldStroke} strokeWidth="0.75" strokeDasharray="3 6" />
        <circle cx="1040" cy="420" r="96" stroke={strokeColor} strokeWidth="0.75" />
        {/* Tangent intersection circle */}
        <circle cx="720" cy="420" r="420" stroke={strokeColor} strokeWidth="0.6" />
        {/* Swiss vertical & horizontal drafting hairlines */}
        <line x1="0" y1="420" x2="1440" y2="420" stroke={strokeColor} strokeWidth="0.6" />
        <line x1="1040" y1="0" x2="1040" y2="860" stroke={strokeColor} strokeWidth="0.6" />
        <line x1="360" y1="0" x2="360" y2="860" stroke={strokeColor} strokeWidth="0.5" />
        {/* Fine crosshair registration ticks */}
        <path d="M1032 420H1048M1040 412V428" stroke={goldStroke} strokeWidth="0.9" />
        <path d="M352 420H368M360 412V428" stroke={strokeColor} strokeWidth="0.75" />
      </svg>
    );
  }

  if (variant === 'philosophy') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 560"
        fill="none"
        className={`pointer-events-none select-none absolute inset-0 h-full w-full ${className}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="240" cy="280" r="240" stroke={strokeColor} strokeWidth="0.75" />
        <circle cx="600" cy="280" r="240" stroke={goldStroke} strokeWidth="0.75" />
        <circle cx="960" cy="280" r="240" stroke={strokeColor} strokeWidth="0.75" />
        <circle cx="600" cy="280" r="148" stroke={strokeColor} strokeWidth="0.6" strokeDasharray="4 6" />
        <line x1="0" y1="280" x2="1200" y2="280" stroke={strokeColor} strokeWidth="0.6" />
        <line x1="600" y1="0" x2="600" y2="560" stroke={strokeColor} strokeWidth="0.6" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 500"
      fill="none"
      className={`pointer-events-none select-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="720" cy="250" r="210" stroke={strokeColor} strokeWidth="0.75" />
      <circle cx="720" cy="250" r="130" stroke={goldStroke} strokeWidth="0.65" strokeDasharray="2 5" />
      <line x1="720" y1="0" x2="720" y2="500" stroke={strokeColor} strokeWidth="0.6" />
      <line x1="0" y1="250" x2="900" y2="250" stroke={strokeColor} strokeWidth="0.6" />
    </svg>
  );
};
