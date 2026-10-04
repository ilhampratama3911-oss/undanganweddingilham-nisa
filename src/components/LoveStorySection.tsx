import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { LoveStoryMilestone } from '../types/wedding';
import { BatikDivider } from './BatikOrnaments';

interface LoveStorySectionProps {
  stories: LoveStoryMilestone[];
  scenicPhoto: string;
}

export const LoveStorySection: React.FC<LoveStorySectionProps> = ({ stories, scenicPhoto }) => {
  return (
    <section className="relative py-20 px-4 bg-[#121814] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Kisah Katresnan</span>
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#F7F2EB] font-normal tracking-wide">
            Cita &amp; Cinta Kami
          </h2>
          <p className="font-serif-jawa italic text-sm text-[#BDB2A3] max-w-md mx-auto mt-2">
            Lelakon katresnan ingkang rinonce kanthi tulus, saking tepang sepisan ngantos manggih janji suci.
          </p>
          <BatikDivider className="my-4" />
        </div>

        {/* Feature Panoramic Image Card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#C9A86A]/30 mb-14 shadow-2xl group">
          <div className="h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={scenicPhoto}
              alt="Prewedding Joglo Ilham & Nisa"
              className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-105 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1410] via-[#0E1410]/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#DFB76C] font-semibold">
              Kraton &amp; Pendopo Joglo Surakarta
            </span>
            <p className="font-serif-jawa italic text-sm text-[#F5E8C7] mt-1">
              &quot;Nyawiji ing rasa, lumampah sesarengan nganti pungkasaning mangsa.&quot;
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#C9A86A]/40 space-y-10 ml-4 sm:ml-12">
          {stories.map((story, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#121814] border-2 border-[#DFB76C] flex items-center justify-center shadow-[0_0_10px_rgba(223,183,108,0.4)] group-hover:scale-110 transition-transform">
                <Heart className="w-2.5 h-2.5 fill-[#DFB76C] text-[#DFB76C]" />
              </div>

              {/* Story Content Card */}
              <div className="p-5 sm:p-6 rounded-2xl border border-[#C9A86A]/25 bg-[#17201A]/80 backdrop-blur-sm shadow-xl group-hover:border-[#DFB76C]/60 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-display text-lg sm:text-xl text-[#DFB76C] font-semibold tabular-nums">
                    {story.year}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#A89E90] border border-[#C9A86A]/20 px-2.5 py-0.5 rounded-full bg-[#0E1410]/50">
                    {story.tag}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl text-[#F7F2EB] font-normal tracking-wide mb-2">
                  {story.title}
                </h3>

                <p className="font-serif-jawa text-xs sm:text-sm text-[#C4B9AA] leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
