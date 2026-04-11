import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

/**
 * Professional SVG logo for Trucking Dispatch Pro.
 * Minimal truck cab silhouette with a route/location marker accent.
 */
const Logo: React.FC<LogoProps> = ({ size = 36, showText = true, className = '', textClassName = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background rounded square */}
        <rect width="48" height="48" rx="12" fill="#1e3a5f" />

        {/* Truck cab body */}
        <path
          d="M10 28V22C10 20.9 10.9 20 12 20H24L30 26V28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Truck cargo/trailer */}
        <path
          d="M10 28H30"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Windshield accent */}
        <path
          d="M24 20L28 24H24V20Z"
          fill="#ff6b35"
          opacity="0.9"
        />
        {/* Wheels */}
        <circle cx="15" cy="31" r="3" fill="white" stroke="#1e3a5f" strokeWidth="1" />
        <circle cx="15" cy="31" r="1.2" fill="#1e3a5f" />
        <circle cx="26" cy="31" r="3" fill="white" stroke="#1e3a5f" strokeWidth="1" />
        <circle cx="26" cy="31" r="1.2" fill="#1e3a5f" />

        {/* Route line / location pin */}
        <path
          d="M35 12C35 12 32 17 35 20C38 17 35 12 35 12Z"
          fill="#ff6b35"
        />
        <circle cx="35" cy="15.5" r="1.5" fill="white" />
        {/* Dotted route hint */}
        <line x1="35" y1="21" x2="35" y2="26" stroke="#ff6b35" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.7" />
      </svg>

      {showText && (
        <div className={`ml-3 flex flex-col leading-none ${textClassName}`}>
          <span className="font-bold text-lg tracking-tight">Trucking Dispatch</span>
          <span className="text-xs font-semibold tracking-widest uppercase text-orange opacity-90">Pro</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
