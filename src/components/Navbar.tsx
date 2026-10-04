import React from 'react';
import { MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 py-3.5 bg-[#0F1511]/90 backdrop-blur-md border-b border-[#C9A86A]/30">
      {/* Zone 1: Wordmark */}
      <a href="#root" className="font-display text-base sm:text-lg text-[#F5E8C7] hover:text-[#ECCB85] tracking-wide whitespace-nowrap">
        Ilham &amp; Nisa&apos;
      </a>

      {/* Zone 2: Navigation links */}
      <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-[#C4B9AA]">
        <a href="#mempelai" className="hover:text-[#F3E5AB] transition-colors">
          Mempelai
        </a>
        <a href="#acara" className="hover:text-[#F3E5AB] transition-colors">
          Acara
        </a>
        <a href="#lokasi" className="hover:text-[#F3E5AB] transition-colors">
          Lokasi
        </a>
        <a href="#amplop" className="hover:text-[#F3E5AB] transition-colors">
          Tanda Kasih
        </a>
      </nav>

      {/* Zone 3: Quick Navigation Action */}
      <div className="flex items-center gap-2.5">
        <a
          href="#lokasi"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#121814] bg-[#ECCB85] hover:bg-white transition-all shadow cursor-pointer whitespace-nowrap"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Buka Peta</span>
        </a>
      </div>
    </header>
  );
};
