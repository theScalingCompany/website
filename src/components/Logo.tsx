import React from "react";

interface LogoProps {
  /** Controls overall size. Height in px — width scales proportionally. Default: 44 */
  height?: number;
  /** Extra CSS classes for the wrapper */
  className?: string;
  /** If true, shows compact icon-only version (useful for very small viewports) */
  iconOnly?: boolean;
}

/**
 * Ultra Premium Text-Only SVG wordmark for "The Scaling Company".
 * Emphasises typography, minimalist luxury, and high-end branding.
 */
const Logo: React.FC<LogoProps> = ({ height = 44, className = "", iconOnly = false }) => {
  const aspectRatio = iconOnly ? 1 : 6.36; // 280 / 44 = ~6.36
  const width = height * aspectRatio;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconOnly ? "0 0 44 44" : "0 0 280 44"}
      width={width}
      height={height}
      className={className}
      aria-label="The Scaling Company"
      role="img"
    >
      <defs>
        {/* Crisp white/silver gradient for main text */}
        <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        {/* Brand color accent gradient */}
        <linearGradient id="accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>

        {/* High-end glowing effect for the abstract accent */}
        <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {iconOnly ? (
        <g>
          {/* Super clean standalone 'S' icon with glowing box */}
          <rect x="2" y="2" width="40" height="40" rx="12" fill="url(#accent-grad)" opacity="0.1" />
          <rect x="2" y="2" width="40" height="40" rx="12" fill="none" stroke="url(#accent-grad)" strokeWidth="1.5" opacity="0.6" />
          <text 
            x="22" 
            y="31" 
            fontFamily="'Outfit', 'Inter', sans-serif" 
            fontSize="26" 
            fontWeight="900" 
            textAnchor="middle" 
            fill="#ffffff" 
          >
            S
          </text>
        </g>
      ) : (
        <g>
          {/* ── THE ── */}
          <text
            x="2"
            y="14"
            fontFamily="'Outfit', 'Inter', sans-serif"
            fontSize="10"
            fontWeight="600"
            letterSpacing="3"
            fill="#94a3b8"
          >
            THE
          </text>

          {/* ── SCALING ── */}
          <text
            x="0"
            y="38"
            fontFamily="'Outfit', 'Inter', sans-serif"
            fontSize="30"
            fontWeight="900"
            letterSpacing="1"
            fill="url(#text-grad)"
          >
            SCALING
          </text>

          {/* ── ✦ (Abstract Premium Accent Dot) ── */}
          {/* This small glowing accent separates the words and adds a tech/luxury feel without being a bulky 'graph' */}
          <circle 
            cx="138" 
            cy="32" 
            r="4.5" 
            fill="url(#accent-grad)" 
            filter="url(#logo-glow)" 
          />

          {/* ── COMPANY ── */}
          <text
            x="154"
            y="38"
            fontFamily="'Outfit', 'Inter', sans-serif"
            fontSize="16"
            fontWeight="500"
            letterSpacing="5"
            fill="#00d4ff"
          >
            COMPANY
          </text>
        </g>
      )}
    </svg>
  );
};

export default Logo;
