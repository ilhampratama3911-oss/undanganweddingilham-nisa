import React from 'react';
import { Heart } from 'lucide-react';
import { GununganOrnament } from './GununganOrnament';
import { BatikDivider } from './BatikOrnaments';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative py-16 px-4 bg-[#0A0E0B] border-t border-[#C9A86A]/30 text-center select-none">
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        {/* Gunungan */}
        <GununganOrnament size={60} glow={true} className="mb-4" />

        <h3 className="font-display text-2xl sm:text-3xl text-[#F7F2EB] font-normal tracking-wide mb-2">
          Matur Nuwun
        </h3>

        <p className="font-serif-jawa italic text-sm text-[#C4B9AA] max-w-lg mx-auto leading-relaxed mb-6">
          Saking luhuring manah panjenengan sedaya ingkang sampun kersa rawuh saha
          paring donga pangestu, kula sakeluwarga ngaturaken agunging panuwun
          ingkang tanpa pepindhan.
        </p>

        <p className="font-display text-base text-[#DFB76C] tracking-wide mb-6">
          Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </p>

        <BatikDivider className="my-2" />

        {/* Big Family names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif-jawa text-[#E2D8CC] my-4 max-w-lg w-full">
          <div className="p-4 rounded-2xl bg-[#141B16] border border-[#C9A86A]/30 shadow-md">
            <p className="text-[#DFB76C] text-[11px] uppercase tracking-wider font-semibold">
              Keluarga Penganten Kakung:
            </p>
            <p className="font-semibold text-[#F5E8C7] text-sm mt-1.5">
              Bapak Ali Mahmudi
            </p>
            <p className="text-[#E2D8CC] text-xs">
              &amp; Ibu Sri Budi Rahayu
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-[#141B16] border border-[#C9A86A]/30 shadow-md">
            <p className="text-[#DFB76C] text-[11px] uppercase tracking-wider font-semibold">
              Keluarga Penganten Putri:
            </p>
            <p className="font-semibold text-[#F5E8C7] text-sm mt-1.5">
              Bapak H. Sudiono
            </p>
            <p className="text-[#E2D8CC] text-xs">
              &amp; Ibu Hj. Kunisaroh
            </p>
          </div>
        </div>

        {/* Couple signature */}
        <div className="my-6">
          <span className="font-script text-4xl sm:text-5xl text-[#DFB76C]">
            Ilham &amp; Nisa&apos;
          </span>
        </div>

        <p className="text-[11px] text-[#8C8375] font-serif-jawa flex items-center justify-center gap-1.5">
          <span>Kagem Kamulyan Adat Budaya Jawa</span>
          <span>·</span>
          <Heart className="w-3 h-3 fill-[#DFB76C] text-[#DFB76C]" />
          <span>·</span>
          <span>Pahargyan Penganten 2026</span>
        </p>
      </div>
    </footer>
  );
};
