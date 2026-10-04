import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Calendar,
  Clock
} from 'lucide-react';
import { WeddingEvent } from '../types/wedding';
import { BatikDivider } from './BatikOrnaments';

interface LocationBarcodeSectionProps {
  guestName?: string;
  events?: WeddingEvent[];
}

export const LocationBarcodeSection: React.FC<LocationBarcodeSectionProps> = ({
  events,
}) => {
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);

  // Focus specifically on Resepsi event
  const resepsiEvent = events?.find((e) => e.id === 'resepsi') || {
    id: 'resepsi',
    title: 'Pahargyan & Resepsi',
    javaneseSubtitle: 'Upacara Adat Temu Penganten',
    dayName: 'Rabu Legi',
    weton: 'Legi (Neptu 12)',
    dateString: '04 November 2026',
    timeString: 'Pukul 10:00 WIB',
    venueName: 'Kediaman Mempelai Wanita',
    hallName: 'Dk. Satak Desa Klakahkasihan',
    address: 'Dk. Satak Desa Klakahkasihan RT:002/RW:006, Kec. Gembong, Kab. Pati',
    mapsUrl: 'https://maps.app.goo.gl/JqcVRaqmqfxgJpdH7',
  };

  const directMapsUrl = 'https://maps.app.goo.gl/JqcVRaqmqfxgJpdH7';
  const embedMapUrl = 'https://maps.google.com/maps?q=-6.6575783,110.939411&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${resepsiEvent.venueName} - ${resepsiEvent.address}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="lokasi" className="relative py-20 px-4 bg-[#0F1511] border-t border-[#C9A86A]/20">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Pituduh Papan Pahargyan</span>
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#F7F2EB] font-normal tracking-wide">
            Peta Lokasi Resepsi
          </h2>
          <p className="font-serif-jawa italic text-sm text-[#BDB2A3] max-w-xl mx-auto mt-2">
            Pandom pituduh lampah tumuju papan pahargyan dhauping penganten kekalih ing sasana pawiwahan.
          </p>
          <BatikDivider className="my-4" />
        </div>

        {/* Centered Interactive Maps Container */}
        <div className="rounded-3xl border border-[#C9A86A]/35 bg-[#16201A]/85 backdrop-blur-md shadow-2xl p-6 sm:p-9 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent opacity-85" />

          {/* Venue & Event Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-4 border-b border-[#C9A86A]/20">
            <div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DFB76C]" />
                <span className="text-xs uppercase tracking-wider text-[#C9A86A] font-semibold">
                  Lokasi Pahargyan &amp; Resepsi
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#F7F2EB] font-normal tracking-wide mt-1">
                {resepsiEvent.venueName}
              </h3>
              {resepsiEvent.hallName && (
                <p className="font-serif-jawa italic text-sm text-[#DFB76C] mt-0.5">
                  {resepsiEvent.hallName}
                </p>
              )}
            </div>

            <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs text-[#C4B9AA] font-serif-jawa">
              <span className="inline-flex items-center gap-1.5 text-[#E6DAC8]">
                <Calendar className="w-3.5 h-3.5 text-[#DFB76C]" />
                {resepsiEvent.dateString}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#DFB76C] font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#DFB76C]" />
                {resepsiEvent.timeString}
              </span>
            </div>
          </div>

          <p className="text-sm text-[#B8ADA0] font-serif-jawa leading-relaxed mb-6">
            {resepsiEvent.address}
          </p>

          {/* Embedded Google Map Iframe */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#C9A86A]/35 shadow-inner bg-[#0B0F0C] relative mb-6">
            <iframe
              title={`Peta Lokasi ${resepsiEvent.venueName}`}
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Map Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={directMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A86A] to-[#DFB76C] text-[#0F1411] font-semibold text-xs tracking-wider uppercase hover:opacity-95 transition-all shadow-md"
            >
              <Navigation className="w-4 h-4" />
              <span>Buka Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>

            <button
              onClick={handleCopyAddress}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#C9A86A]/40 bg-[#1A251D] text-[#E6DAC8] hover:text-white hover:border-[#DFB76C] text-xs tracking-wide transition-all cursor-pointer"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Alamat Berhasil Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#DFB76C]" />
                  <span>Salin Alamat Lengkap</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
