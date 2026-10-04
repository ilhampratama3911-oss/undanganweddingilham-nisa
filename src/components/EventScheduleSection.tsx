import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { WeddingEvent } from '../types/wedding';
import { BatikDivider } from './BatikOrnaments';

interface EventScheduleSectionProps {
  events: WeddingEvent[];
}

export const EventScheduleSection: React.FC<EventScheduleSectionProps> = ({ events }) => {
  return (
    <section id="acara" className="relative py-20 px-4 bg-[#0F1511] border-t border-[#C9A86A]/20">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Tata Cara Pahargyan</span>
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#F7F2EB] font-normal tracking-wide">
            Waktu &amp; Papan Pahargyan
          </h2>
          <p className="font-serif-jawa italic text-sm text-[#BDB2A3] max-w-lg mx-auto mt-2">
            Kanthi panyuwun donga pangestu panjenengan sedaya, sumangga rawuh ing pahargyan suci dhauping penganten kekalih.
          </p>
          <BatikDivider className="my-4" />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-[#C9A86A]/30 bg-[#16201A]/85 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-[#DFB76C]/60 transition-all duration-300"
            >
              {/* Subtle top gold gradient strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent opacity-80" />

              <div>
                {/* Event Title */}
                <div className="text-center mb-6">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A86A] font-semibold">
                    {event.javaneseSubtitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#F7F2EB] font-normal tracking-wide mt-1">
                    {event.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-[#C9A86A]/50 mx-auto mt-2" />
                </div>

                {/* Day, Weton & Date */}
                <div className="p-4 rounded-2xl bg-[#0D1310]/80 border border-[#C9A86A]/20 text-center mb-6">
                  <div className="flex items-center justify-center gap-2 text-[#DFB76C] font-semibold text-sm sm:text-base font-serif-jawa">
                    <Calendar className="w-4 h-4" />
                    <span>{event.dayName}</span>
                    <span className="text-xs text-[#A89E90] font-normal">({event.weton})</span>
                  </div>
                  <div className="font-display text-xl sm:text-2xl text-[#F5E8C7] font-semibold mt-1">
                    {event.dateString}
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#E6DAC8] font-medium mt-2">
                    <Clock className="w-3.5 h-3.5 text-[#DFB76C]" />
                    <span>{event.timeString}</span>
                  </div>
                </div>

                {/* Venue Details */}
                <div className="space-y-2 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider text-[#C9A86A] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#DFB76C]" />
                    <span>Lokasi Acara</span>
                  </div>
                  <h4 className="font-display text-lg sm:text-xl text-[#F7F2EB] font-medium">
                    {event.venueName}
                  </h4>
                  {event.hallName && (
                    <p className="text-xs text-[#DFB76C] font-serif-jawa italic">
                      {event.hallName}
                    </p>
                  )}
                  <p className="text-xs text-[#B8ADA0] font-serif-jawa leading-relaxed max-w-sm mx-auto">
                    {event.address}
                  </p>
                  {event.notes && (
                    <p className="text-[11px] text-[#A89E90] italic mt-3 bg-[#0E1410]/60 p-2.5 rounded-lg border border-[#C9A86A]/10">
                      * {event.notes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
