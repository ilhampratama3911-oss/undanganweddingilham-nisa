import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { CoupleMember } from '../types/wedding';
import { BatikDivider } from './BatikOrnaments';

interface BrideGroomSectionProps {
  groom: CoupleMember;
  bride: CoupleMember;
}

export const BrideGroomSection: React.FC<BrideGroomSectionProps> = ({
  groom,
  bride,
}) => {
  return (
    <section id="mempelai" className="relative py-20 px-4 bg-[#121814] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Manten Kakung &amp; Manten Putri</span>
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#F7F2EB] font-normal tracking-wide">
            Sang Mempelai
          </h2>
          <p className="font-serif-jawa italic text-sm text-[#BDB2A3] max-w-md mx-auto mt-2">
            Rasa syukur ingkang tanpa upami awit kersaning Gusti ingkang nyawijekaken kalih manah ing salebeting talining katresnan.
          </p>
          <BatikDivider className="my-4" />
        </div>

        {/* Couple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* GROOM CARD */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl border border-[#C9A86A]/30 bg-[#17201A]/85 backdrop-blur-md shadow-2xl relative group hover:border-[#DFB76C]/60 transition-all duration-300">
            {/* Javanese Role Tag */}
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A86A] font-medium mb-4">
              Penganten Kakung (Mempelai Pria)
            </span>

            {/* Photo with traditional arch frame */}
            <div className="relative mb-6 flex justify-center">
              <div className="w-48 h-64 sm:w-56 sm:h-72 rounded-t-[100px] rounded-b-2xl overflow-hidden border-2 border-[#C9A86A] shadow-xl p-1 bg-[#0F1411]">
                <img
                  src={groom.photoUrl}
                  alt={groom.fullName}
                  className="w-full h-full object-cover object-center rounded-t-[96px] rounded-b-xl group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Names & Titles */}
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-[#F7F2EB] font-normal tracking-wide whitespace-nowrap">
              {groom.fullName ? groom.fullName.replace(/,\s*S\.T\.?/gi, '').trim() : 'Ilham Pratama'}
            </h3>
            <p className="font-script text-xl text-[#DFB76C] my-1">
              ({groom.shortName})
            </p>
            <p className="font-serif-jawa italic text-xs sm:text-sm text-[#C4B9AA] max-w-sm mb-4">
              {groom.description}
            </p>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent my-3" />

            {/* Parents */}
            <div className="text-xs sm:text-sm text-[#E2D8CC] font-serif-jawa leading-relaxed">
              <p className="text-[#A89E90] text-xs">Putra Pertama dari Pasangan:</p>
              <p className="font-semibold text-[#F5E8C7] mt-0.5">
                {groom.fatherName && groom.fatherName !== 'Bapak Bambang Sutrisno' ? groom.fatherName : 'Bapak Ali Mahmudi'}
              </p>
              <p className="text-[#CFC4B6]">
                &amp; {groom.motherName && groom.motherName !== 'Ibu Sri Rahayu' ? groom.motherName : 'Ibu Sri Budi Rahayu'}
              </p>
            </div>

            {/* Origin */}
            <div className="flex items-start justify-center gap-1.5 mt-5 text-xs text-[#C9A86A] max-w-xs mx-auto">
              <MapPin className="w-3.5 h-3.5 text-[#DFB76C] shrink-0 mt-0.5" />
              <span className="text-center font-serif-jawa leading-relaxed">
                Desa Mojolawaran RT:005/RW:001<br />Kec. Gabus, Kab. Pati
              </span>
            </div>
          </div>

          {/* BRIDE CARD */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl border border-[#C9A86A]/30 bg-[#17201A]/85 backdrop-blur-md shadow-2xl relative group hover:border-[#DFB76C]/60 transition-all duration-300">
            {/* Javanese Role Tag */}
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A86A] font-medium mb-4">
              Penganten Putri (Mempelai Wanita)
            </span>

            {/* Photo with traditional arch frame */}
            <div className="relative mb-6 flex justify-center">
              <div className="w-48 h-64 sm:w-56 sm:h-72 rounded-t-[100px] rounded-b-2xl overflow-hidden border-2 border-[#C9A86A] shadow-xl p-1 bg-[#0F1411]">
                <img
                  src={bride.photoUrl}
                  alt={bride.fullName}
                  className="w-full h-full object-cover object-center rounded-t-[96px] rounded-b-xl group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Names & Titles */}
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-[#F7F2EB] font-normal tracking-wide whitespace-nowrap">
              {bride.fullName ? bride.fullName.replace(/,\s*S\.Pd\.?/gi, '').trim() : "Sholikhatun Nisa'"}
            </h3>
            <p className="font-script text-xl text-[#DFB76C] my-1">
              ({bride.shortName})
            </p>
            <p className="font-serif-jawa italic text-xs sm:text-sm text-[#C4B9AA] max-w-sm mb-4">
              {bride.description}
            </p>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent my-3" />

            {/* Parents */}
            <div className="text-xs sm:text-sm text-[#E2D8CC] font-serif-jawa leading-relaxed">
              <p className="text-[#A89E90] text-xs">Putri Kedua dari Pasangan:</p>
              <p className="font-semibold text-[#F5E8C7] mt-0.5">
                {bride.fatherName && bride.fatherName !== 'Bapak H. Ahmad Fauzi' ? bride.fatherName : 'Bapak H. Sudiono'}
              </p>
              <p className="text-[#CFC4B6]">
                &amp; {bride.motherName && bride.motherName !== 'Ibu Hj. Siti Aminah' ? bride.motherName : 'Ibu Hj. Kunisaroh'}
              </p>
            </div>

            {/* Origin */}
            <div className="flex items-start justify-center gap-1.5 mt-5 text-xs text-[#C9A86A] max-w-xs mx-auto">
              <MapPin className="w-3.5 h-3.5 text-[#DFB76C] shrink-0 mt-0.5" />
              <span className="text-center font-serif-jawa leading-relaxed">
                Dk. Satak Desa Klakahkasihan RT:002/RW:006<br />Kec. Gembong, Kab. Pati
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
