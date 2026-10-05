import React, { useState, useEffect, useCallback } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  X,
} from 'lucide-react';
import { GalleryItem } from '../types/wedding';
import { BatikDivider } from './BatikOrnaments';

interface AlbumSectionProps {
  photos: GalleryItem[];
}

export const AlbumSection: React.FC<AlbumSectionProps> = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleOpenPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev === 0 ? photos.length - 1 : prev - 1) : 0
    );
  }, [selectedPhotoIndex, photos.length]);

  const handleNextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev === photos.length - 1 ? 0 : prev + 1) : 0
    );
  }, [selectedPhotoIndex, photos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handlePrevPhoto, handleNextPhoto]);

  return (
    <section id="album" className="relative py-20 px-4 sm:px-6 bg-[#0E1410] overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#C9A86A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#DFB76C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18221B] border border-[#C9A86A]/40 text-[#ECCB85] text-xs uppercase tracking-widest font-medium mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Koleksi Potret Kenangan</span>
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F7F2EB] font-normal tracking-wide">
            Album Foto
          </h2>

          <p className="font-serif-jawa italic text-sm sm:text-base text-[#C4B9AA] mt-3 leading-relaxed">
            Kempalan potret katresnan ingkang katur minangka kenangan endah tumrap lampahing gesang bebrayan suci.
          </p>

          <BatikDivider className="my-5" />
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
          {photos.map((item, index) => {
            // Symmetrical centering for 5 photos:
            // Top row (3 photos): each spans 2 of 6 columns (2 + 2 + 2 = 6)
            // Bottom row (2 photos): col-start-2 (span 2) and col-start-4 (span 2), centered!
            const colClasses =
              photos.length === 5
                ? index < 3
                  ? 'lg:col-span-2'
                  : index === 3
                  ? 'lg:col-span-2 lg:col-start-2'
                  : 'lg:col-span-2'
                : 'lg:col-span-2';

            const smClasses =
              photos.length === 5 && index === 4
                ? 'sm:col-span-2 sm:max-w-[420px] sm:mx-auto w-full'
                : 'w-full';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenPhoto(index)}
                className={`group relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#C9A86A]/30 bg-[#141C16] shadow-xl hover:border-[#ECCB85] transition-all duration-500 cursor-pointer hover:-translate-y-1 ${colClasses} ${smClasses}`}
              >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Ambient Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0B]/95 via-[#0A0E0B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Accent Icon */}
              <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#121814]/80 backdrop-blur-md border border-[#C9A86A]/50 flex items-center justify-center text-[#ECCB85] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-left flex flex-col justify-end">
                <span className="text-[11px] font-semibold text-[#DFB76C] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#DFB76C]" />
                  <span>Foto #{index + 1}</span>
                </span>
                <h3 className="font-display text-lg text-[#F7F2EB] group-hover:text-[#ECCB85] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#C4B9AA] font-serif-jawa italic line-clamp-2 mt-1">
                  {item.description}
                </p>
              </div>

              {/* Decorative Corner Ornaments */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C9A86A]/40 rounded-tl-sm pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C9A86A]/40 rounded-br-sm pointer-events-none" />
            </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={handleCloseModal}
        >
          {/* Main Modal Container */}
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              title="Tutup (Esc)"
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-[#18221B]/90 border border-[#C9A86A]/50 text-[#ECCB85] hover:text-white hover:bg-[#202E24] transition-all cursor-pointer shadow-lg z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Counter */}
            <div className="absolute -top-12 left-0 sm:left-2 px-3 py-1.5 rounded-full bg-[#18221B]/90 border border-[#C9A86A]/40 text-[#ECCB85] text-xs font-medium tracking-wider z-20">
              {selectedPhotoIndex + 1} / {photos.length}
            </div>

            {/* Navigation Button: Prev */}
            <button
              onClick={handlePrevPhoto}
              title="Foto Sebelumnya (Panah Kiri)"
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#141C16]/90 border border-[#C9A86A]/60 flex items-center justify-center text-[#ECCB85] hover:text-white hover:scale-110 active:scale-95 transition-all shadow-2xl cursor-pointer z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation Button: Next */}
            <button
              onClick={handleNextPhoto}
              title="Foto Selanjutnya (Panah Kanan)"
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#141C16]/90 border border-[#C9A86A]/60 flex items-center justify-center text-[#ECCB85] hover:text-white hover:scale-110 active:scale-95 transition-all shadow-2xl cursor-pointer z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Box */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#C9A86A]/60 shadow-2xl bg-[#0B0F0C] max-h-[70vh] flex items-center justify-center">
              <img
                src={photos[selectedPhotoIndex].url}
                alt={photos[selectedPhotoIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption Card */}
            <div className="mt-4 w-full text-center px-6 py-3.5 rounded-xl bg-[#141C16]/90 border border-[#C9A86A]/30 backdrop-blur-sm shadow-xl">
              <h4 className="font-display text-base sm:text-lg text-[#F7F2EB] font-medium">
                {photos[selectedPhotoIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#C4B9AA] font-serif-jawa italic mt-1 max-w-2xl mx-auto">
                {photos[selectedPhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
