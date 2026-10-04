import React from 'react';

export const BatikCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  className?: string;
}> = ({ position, size = 64, className = '' }) => {
  const rotationClasses = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };

  return (
    <div
      className={`absolute pointer-events-none select-none ${rotationClasses[position]} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-60"
      >
        <path
          d="M0 0 L60 0 C45 10 35 22 30 38 C26 48 20 54 0 60 Z"
          fill="url(#cornerGoldGrad)"
          fillOpacity="0.2"
        />
        <path
          d="M2 2 L80 2 C60 12 40 28 32 50 C26 66 14 74 2 80 L2 2"
          stroke="#C9A86A"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M6 6 L65 6 C50 16 34 30 26 48 C20 62 10 70 6 74"
          stroke="#DFB76C"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <circle cx="16" cy="16" r="3" fill="#D4AF37" />
        <circle cx="28" cy="10" r="2" fill="#D4AF37" />
        <circle cx="10" cy="28" r="2" fill="#D4AF37" />
        <defs>
          <linearGradient id="cornerGoldGrad" x1="0" y1="0" x2="100" y2="100">
            <stop stopColor="#F5E8C7" />
            <stop offset="1" stopColor="#996515" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const BatikDivider: React.FC<{
  className?: string;
  variant?: 'simple' | 'ornate';
}> = ({ className = '', variant = 'ornate' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent via-[#C9A86A] to-[#DFB76C] opacity-75" />
      
      {variant === 'ornate' ? (
        <div className="flex items-center gap-1.5 text-[#DFB76C]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] opacity-70" />
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="text-[#DFB76C] filter drop-shadow-[0_0_4px_rgba(223,183,108,0.4)]"
          >
            {/* Javanese Melati / Lotus Bloom */}
            <circle cx="12" cy="12" r="3" fill="#ECCB85" />
            <path d="M12 2 C13 7 17 11 22 12 C17 13 13 17 12 22 C11 17 7 13 2 12 C7 11 11 7 12 2 Z" />
          </svg>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] opacity-70" />
        </div>
      ) : (
        <div className="w-2 h-2 rotate-45 border border-[#C9A86A] bg-[#ECCB85]/30" />
      )}

      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent via-[#C9A86A] to-[#DFB76C] opacity-75" />
    </div>
  );
};
