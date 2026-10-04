import React from 'react';

interface GununganOrnamentProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const GununganOrnament: React.FC<GununganOrnamentProps> = ({
  className = '',
  size = 64,
  glow = false,
}) => {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? 'filter drop-shadow-[0_0_12px_rgba(212,175,55,0.45)]' : ''} transition-all duration-300`}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E8C7" />
          <stop offset="35%" stopColor="#DFB76C" />
          <stop offset="70%" stopColor="#C9A86A" />
          <stop offset="100%" stopColor="#8C5E28" />
        </linearGradient>
        <linearGradient id="goldStroke" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE8B5" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
      </defs>

      {/* Gunungan Leaf / Flame Silhouette */}
      <path
        d="M50 4 C48 18 36 28 32 38 C28 48 18 56 12 70 C7 82 8 96 14 108 C19 116 28 122 40 124 L60 124 C72 122 81 116 86 108 C92 96 93 82 88 70 C82 56 72 48 68 38 C64 28 52 18 50 4 Z"
        fill="url(#goldGradient)"
        fillOpacity="0.16"
        stroke="url(#goldStroke)"
        strokeWidth="1.8"
      />

      {/* Internal Sacred Tree of Life (Pohon Hayat) Branches & Leaves */}
      <path
        d="M50 124 L50 20"
        stroke="url(#goldStroke)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Branch tier 1 */}
      <path
        d="M50 45 C42 40 34 46 28 52"
        stroke="url(#goldStroke)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M50 45 C58 40 66 46 72 52"
        stroke="url(#goldStroke)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Branch tier 2 */}
      <path
        d="M50 65 C38 58 26 66 18 78"
        stroke="url(#goldStroke)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M50 65 C62 58 74 66 82 78"
        stroke="url(#goldStroke)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Branch tier 3 */}
      <path
        d="M50 85 C36 80 26 88 22 100"
        stroke="url(#goldStroke)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M50 85 C64 80 74 88 78 100"
        stroke="url(#goldStroke)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Gapura / Portal Gateway at base */}
      <path
        d="M40 124 L40 102 C40 96 44 92 50 92 C56 92 60 96 60 102 L60 124"
        stroke="url(#goldStroke)"
        strokeWidth="1.5"
        fill="url(#goldGradient)"
        fillOpacity="0.25"
      />
      <circle cx="50" cy="98" r="2" fill="url(#goldStroke)" />

      {/* Tip Finial Jewel */}
      <circle cx="50" cy="6" r="3.2" fill="url(#goldStroke)" />
      <circle cx="50" cy="18" r="2" fill="url(#goldStroke)" />
    </svg>
  );
};
