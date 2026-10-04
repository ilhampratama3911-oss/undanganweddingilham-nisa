import React from 'react';
import confetti from 'canvas-confetti';
import { MailOpen, Sparkles } from 'lucide-react';
import { GununganOrnament } from './GununganOrnament';
import { BatikCorner } from './BatikOrnaments';

interface CoverModalProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName: string;
  heroPhoto: string;
}

export const CoverModal: React.FC<CoverModalProps> = ({
  isOpen,
  onOpen,
  guestName,
  heroPhoto,
}) => {
  if (!isOpen) return null;

  const handleOpenInvitation = () => {
    // Fire festive golden & ivory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#F5E8C7', '#AA771C', '#FFFFFF', '#506B57'],
      });
    } catch {
      // Ignore if canvas-confetti is not loaded
    }
    onOpen();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#090D0A] overflow-hidden select-none">
      {/* Background with couple photo and dark gold scrim */}
      <div className="absolute inset-0">
        <img
          src={heroPhoto}
          alt="Ilham & Nisa Prewedding"
          className="w-full h-full object-cover object-[center_20%] filter brightness-[0.50] contrast-105 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0B] via-[#0A0E0B]/75 to-[#0A0E0B]/55" />
        <div className="absolute inset-0 javanese-pattern-bg opacity-20" />
      </div>

      {/* Decorative Javanese corners */}
      <BatikCorner position="top-left" size={90} className="top-4 left-4 text-[#C9A86A]" />
      <BatikCorner position="top-right" size={90} className="top-4 right-4 text-[#C9A86A]" />
      <BatikCorner position="bottom-left" size={90} className="bottom-4 left-4 text-[#C9A86A]" />
      <BatikCorner position="bottom-right" size={90} className="bottom-4 right-4 text-[#C9A86A]" />

      {/* Inner Content Card */}
      <div className="relative z-10 w-full max-w-lg mx-4 px-6 py-8 md:py-10 text-center flex flex-col items-center border border-[#C9A86A]/30 rounded-2xl bg-[#141A16]/90 backdrop-blur-md shadow-2xl gold-glow">
        {/* Subtle Top Kicker */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A]/80 font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
          <span>Serat Ulem Pawiwahan</span>
          <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
        </div>

        {/* Gunungan Motif */}
        <div className="my-1">
          <GununganOrnament size={68} glow={true} />
        </div>

        <p className="font-serif-jawa italic text-sm text-[#D4C9BC] tracking-wider mt-1">
          Pawiwahan Ageng Adat Jawa
        </p>

        {/* Couple Names */}
        <div className="my-4">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#F7F2EB] tracking-wide leading-tight whitespace-nowrap">
            Ilham Pratama
          </h1>
          <div className="font-script text-2xl sm:text-3xl text-[#DFB76C] my-0.5">&amp;</div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#F7F2EB] tracking-wide leading-tight whitespace-nowrap">
            Sholikhatun Nisa&apos;
          </h1>
        </div>

        {/* Date pill/indicator */}
        <div className="text-xs tracking-widest uppercase text-[#C9A86A] font-semibold border-y border-[#C9A86A]/30 py-1.5 px-6 my-2">
          Rabu, 04 November 2026
        </div>

        {/* Guest Recipient Box */}
        <div className="w-full mt-4 p-4 rounded-xl border border-[#C9A86A]/25 bg-[#0D120F]/80">
          <p className="text-xs text-[#A89E90] tracking-wide mb-1">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <div className="font-display text-lg sm:text-xl text-[#F5E8C7] font-semibold tracking-wide capitalize truncate px-2 py-0.5">
            {guestName || 'Tamu Undangan'}
          </div>
          <p className="text-[11px] text-[#8C8375] italic mt-1">
            *Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </p>
        </div>

        {/* Open Button */}
        <button
          onClick={handleOpenInvitation}
          className="mt-6 group relative inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold tracking-wider uppercase text-[#0E1410] bg-gradient-to-r from-[#ECCB85] via-[#F3E5AB] to-[#C9A86A] shadow-lg shadow-[#C9A86A]/20 hover:shadow-[#C9A86A]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          <MailOpen className="w-4 h-4 text-[#0E1410] transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span>Buka Undangan</span>
        </button>

        <p className="text-[11px] text-[#A89E90]/90 mt-3 flex items-center justify-center gap-1.5 text-center">
          <Sparkles className="w-3 h-3 text-[#DFB76C] shrink-0" />
          <span>Lagu: <strong>Kartika Chandra - Damar Panggalih</strong> (&quot;Tak Eman-Eman Sang Mustika&quot;)</span>
        </p>
      </div>
    </div>
  );
};
