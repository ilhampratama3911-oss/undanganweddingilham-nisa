import React from 'react';
import { BatikDivider } from './BatikOrnaments';

export const SurahSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-[#0F1511] border-y border-[#C9A86A]/20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Arabic Basmalah */}
        <p className="font-arabic text-2xl sm:text-3xl text-[#DFB76C] tracking-wide mb-6 leading-loose select-none">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Salam Jawa & Islami */}
        <h2 className="font-display text-xl sm:text-2xl text-[#F7F2EB] font-normal tracking-wide mb-3">
          Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </h2>

        <div className="font-serif-jawa text-[#CFC4B6] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 space-y-3">
          <p>
            Dengan memanjatkan puji syukur ke hadirat Allah Subhanahu wa Ta’ala, serta memohon limpahan rahmat, berkah, dan ridha-Nya, dengan penuh kerendahan hati kami sekeluarga bermaksud memohon doa restu kepada Bapak/Ibu/Saudara sekalian dalam pahargyan suci pernikahan putra-putri kami.
          </p>
          <p>
            Semoga dengan doa dan restu panjenengan sedaya, ikatan suci ini senantiasa dipenuhi keberkahan, ketenteraman, kasih sayang, serta menjadi keluarga yang sakinah, mawaddah, warahmah dalam lindungan Allah Subhanahu wa Ta’ala.
          </p>
        </div>

        {/* Ayat Quran Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-[#C9A86A]/30 bg-[#16201A]/70 backdrop-blur-sm relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#C9A86A]/40 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#C9A86A]/40 rounded-br-2xl" />

          {/* Arabic Ayah */}
          <p className="font-arabic text-lg sm:text-2xl text-[#F5E8C7] leading-loose sm:leading-[2.5] mb-5 text-right sm:text-center dir-rtl">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>

          <BatikDivider className="my-4" variant="simple" />

          {/* Meaning / Indonesian */}
          <p className="text-xs sm:text-sm text-[#D4C9BC] italic font-serif-jawa leading-relaxed mb-3">
            &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&quot;
          </p>

          <span className="text-xs uppercase tracking-widest text-[#C9A86A] font-semibold">
            — Q.S. Ar-Rum: 21 —
          </span>
        </div>

        {/* Javanese Wisdom Note */}
        <div className="mt-8 text-xs sm:text-sm text-[#A89E90] font-serif-jawa italic">
          &quot;Witing tresno jalaran soko kulino, jejeging janji jalaran soko krenteging ati.&quot;
        </div>
      </div>
    </section>
  );
};
