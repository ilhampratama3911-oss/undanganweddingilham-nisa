import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Clock, Heart } from 'lucide-react';
import { GununganOrnament } from './GununganOrnament';
import { BatikDivider } from './BatikOrnaments';

interface HeroSectionProps {
  heroPhoto: string;
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ heroPhoto, onExplore }) => {
  // Target wedding date: 04 November 2026, 08:00 WIB (UTC+7)
  const targetDate = new Date('2026-11-04T08:00:00+07:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 overflow-hidden">
      {/* Background imagery with gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroPhoto}
          alt="Ilham & Nisa Penganten Jawa"
          className="w-full h-full object-cover object-[center_20%] filter brightness-[0.50] contrast-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C110E]/80 via-[#0E1511]/50 to-[#121814]/95" />
        <div className="absolute inset-0 javanese-pattern-bg opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Subtle royal crest badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A86A]/40 bg-[#16201A]/80 backdrop-blur-sm text-xs font-medium tracking-[0.2em] text-[#DFB76C] uppercase mb-5">
          <Heart className="w-3.5 h-3.5 fill-[#DFB76C] text-[#DFB76C]" />
          <span>The Royal Wedding Invitation</span>
          <Heart className="w-3.5 h-3.5 fill-[#DFB76C] text-[#DFB76C]" />
        </div>

        {/* Gunungan */}
        <GununganOrnament size={80} glow={true} className="mb-3 hover:scale-105 transition-transform duration-500" />

        <p className="font-serif-jawa italic text-base sm:text-lg text-[#D4C9BC] tracking-wider mb-2">
          Pawiwahan Ageng Adat Jawa
        </p>

        {/* Groom & Bride Names */}
        <div className="my-2">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F7F2EB] tracking-wide font-normal leading-[1.15] whitespace-nowrap">
            Ilham Pratama
          </h1>
          <div className="font-script text-3xl sm:text-4xl md:text-5xl text-[#DFB76C] my-1 sm:my-2">
            dan
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F7F2EB] tracking-wide font-normal leading-[1.15] whitespace-nowrap">
            Sholikhatun Nisa&apos;
          </h1>
        </div>

        <BatikDivider className="my-4" />

        {/* Date */}
        <div className="flex items-center justify-center text-sm sm:text-base text-[#E2D8CC] font-serif-jawa tracking-wide mb-8">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#DFB76C]" />
            Rabu, 04 November 2026
          </span>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full max-w-xl mx-auto p-4 sm:p-6 rounded-2xl border border-[#C9A86A]/30 bg-[#151D18]/80 backdrop-blur-md shadow-2xl mb-8">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A86A] font-semibold mb-4">
            <Clock className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Menuju Hari Bahagia</span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-[#0D1310]/90 border border-[#C9A86A]/20"
              >
                <span className="font-display text-2xl sm:text-4xl text-[#F5E8C7] font-semibold tabular-nums">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[11px] sm:text-xs text-[#A89E90] uppercase tracking-wider mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <button
          onClick={onExplore}
          className="flex flex-col items-center text-xs tracking-[0.2em] text-[#C9A86A] hover:text-[#F3E5AB] transition-colors group cursor-pointer"
        >
          <span className="uppercase font-medium mb-1">Gulir ke Bawah</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#DFB76C]" />
        </button>
      </div>
    </section>
  );
};
