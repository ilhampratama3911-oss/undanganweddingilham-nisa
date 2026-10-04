import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, MessageSquare, Send, Sparkles, UserCheck, Users, XCircle } from 'lucide-react';
import { GuestWish } from '../types/wedding';
import { INITIAL_WISHES } from '../data/weddingData';
import { BatikDivider } from './BatikOrnaments';

const STORAGE_KEY = 'ilham_nisa_wedding_wishes';

export const RsvpGuestbookSection: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return INITIAL_WISHES;
  });

  const [senderName, setSenderName] = useState('');
  const [relation, setRelation] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState(false);
  const [filter, setFilter] = useState<'semua' | 'hadir' | 'tidak_hadir'>('semua');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch {
      // ignore
    }
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newWish: GuestWish = {
      id: 'wish_' + Date.now(),
      senderName: senderName.trim(),
      relation: relation.trim() || 'Tamu Undangan',
      attendance,
      guestCount: attendance === 'hadir' ? guestCount : 0,
      message: message.trim(),
      createdAt: 'Baru saja',
    };

    setTimeout(() => {
      setWishes((prev) => [newWish, ...prev]);
      setIsSubmitting(false);
      setSuccessToast(true);
      setSenderName('');
      setRelation('');
      setMessage('');

      // Confetti burst
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#D4AF37', '#F5E8C7', '#AA771C'],
        });
      } catch {
        // ignore
      }

      setTimeout(() => setSuccessToast(false), 5000);
    }, 400);
  };

  const filteredWishes = wishes.filter((w) => {
    if (filter === 'hadir') return w.attendance === 'hadir';
    if (filter === 'tidak_hadir') return w.attendance === 'tidak_hadir';
    return true;
  });

  const hadirCount = wishes.filter((w) => w.attendance === 'hadir').length;

  return (
    <section id="rsvp" className="relative py-20 px-4 bg-[#121814]">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Konfirmasi Rawuh &amp; Donga Pangestu</span>
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#F7F2EB] font-normal tracking-wide">
            Buku Tamu &amp; RSVP
          </h2>
          <p className="font-serif-jawa italic text-sm text-[#BDB2A3] max-w-md mx-auto mt-2">
            Paringi kabar karawuhan saha kintunan donga pangestu dhumateng calon penganten.
          </p>
          <BatikDivider className="my-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* RSVP FORM (Left / Col 5) */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl border border-[#C9A86A]/30 bg-[#16201A]/90 backdrop-blur-md shadow-2xl">
            <h3 className="font-display text-lg text-[#F5E8C7] mb-1">
              Kirim Ucapan &amp; Konfirmasi
            </h3>
            <p className="text-xs text-[#A89E90] mb-5 font-serif-jawa">
              Mohon mengisi form di bawah ini dengan lengkap.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C9A86A] font-medium mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Raden Mas Budi / Teman Kuliah"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1310] border border-[#C9A86A]/30 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#DFB76C]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C9A86A] font-medium mb-1">
                  Hubungan / Asal Kota (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Kerabat Solo / Rekan Kerja"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1310] border border-[#C9A86A]/30 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#DFB76C]"
                />
              </div>

              {/* Attendance Options */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C9A86A] font-medium mb-1.5">
                  Konfirmasi Kehadiran *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAttendance('hadir')}
                    className={`p-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      attendance === 'hadir'
                        ? 'bg-[#ECCB85] text-[#121814] border-[#ECCB85] font-semibold'
                        : 'bg-[#0E1410] text-[#C4B9AA] border-[#C9A86A]/30 hover:border-[#DFB76C]'
                    }`}
                  >
                    Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('tidak_hadir')}
                    className={`p-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      attendance === 'tidak_hadir'
                        ? 'bg-[#8C3A3A] text-white border-[#8C3A3A] font-semibold'
                        : 'bg-[#0E1410] text-[#C4B9AA] border-[#C9A86A]/30 hover:border-[#DFB76C]'
                    }`}
                  >
                    Berhalangan
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('ragu')}
                    className={`p-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      attendance === 'ragu'
                        ? 'bg-[#B08940] text-white border-[#B08940] font-semibold'
                        : 'bg-[#0E1410] text-[#C4B9AA] border-[#C9A86A]/30 hover:border-[#DFB76C]'
                    }`}
                  >
                    Ragu-ragu
                  </button>
                </div>
              </div>

              {/* Number of guests (if attending) */}
              {attendance === 'hadir' && (
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#C9A86A] font-medium mb-1">
                    Jumlah Orang yang Hadir
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0D1310] border border-[#C9A86A]/30 text-xs text-white focus:outline-none focus:border-[#DFB76C]"
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang (Bersama Pasangan)</option>
                    <option value={3}>3 Orang (Keluarga)</option>
                    <option value={4}>4 Orang atau Lebih</option>
                  </select>
                </div>
              )}

              {/* Message / Doa Restu */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C9A86A] font-medium mb-1">
                  Untaian Doa &amp; Ucapan Restu *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tuliskan ucapan selamat dan doa restu untuk Ilham & Nisa'..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1310] border border-[#C9A86A]/30 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#DFB76C] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#121814] bg-gradient-to-r from-[#ECCB85] via-[#F3E5AB] to-[#C9A86A] hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Mengirim...' : 'Kirim Doa Restu'}</span>
              </button>

              {successToast && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Matur nuwun! Ucapan dan doa restu panjenengan sampun katampi.</span>
                </div>
              )}
            </form>
          </div>

          {/* GUESTBOOK WISHES STREAM (Right / Col 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Filter tabs and summary */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#16201A]/80 border border-[#C9A86A]/20">
              <div className="flex items-center gap-2 text-xs text-[#E2D8CC]">
                <Users className="w-4 h-4 text-[#DFB76C]" />
                <span>
                  Total <strong>{wishes.length}</strong> Doa Restu
                </span>
                <span className="text-[#A89E90]">·</span>
                <span className="text-emerald-400">
                  <strong>{hadirCount}</strong> Hadir
                </span>
              </div>

              {/* Segmented Filter */}
              <div className="flex items-center gap-1 p-1 bg-[#0D1310] rounded-xl border border-[#C9A86A]/20 text-[11px]">
                <button
                  onClick={() => setFilter('semua')}
                  className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                    filter === 'semua' ? 'bg-[#C9A86A] text-[#121814] font-semibold' : 'text-[#A89E90] hover:text-white'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setFilter('hadir')}
                  className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                    filter === 'hadir' ? 'bg-[#C9A86A] text-[#121814] font-semibold' : 'text-[#A89E90] hover:text-white'
                  }`}
                >
                  Hadir
                </button>
                <button
                  onClick={() => setFilter('tidak_hadir')}
                  className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                    filter === 'tidak_hadir' ? 'bg-[#C9A86A] text-[#121814] font-semibold' : 'text-[#A89E90] hover:text-white'
                  }`}
                >
                  Berhalangan
                </button>
              </div>
            </div>

            {/* Wishes Scrollable List */}
            <div className="max-h-[500px] overflow-y-auto space-y-3.5 pr-1">
              {filteredWishes.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-[#16201A]/40 border border-[#C9A86A]/20 text-xs text-[#A89E90]">
                  Belum ada ucapan dalam kategori ini. Jadilah yang pertama memberikan doa restu!
                </div>
              ) : (
                filteredWishes.map((w) => (
                  <div
                    key={w.id}
                    className="p-4 sm:p-5 rounded-2xl border border-[#C9A86A]/25 bg-[#17201A]/75 backdrop-blur-sm shadow-md space-y-2 hover:border-[#DFB76C]/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-display text-sm sm:text-base text-[#F5E8C7] font-medium">
                          {w.senderName}
                        </h4>
                        <p className="text-[11px] text-[#A89E90] font-serif-jawa">
                          {w.relation} · {w.createdAt}
                        </p>
                      </div>

                      {/* Status indicator */}
                      <div>
                        {w.attendance === 'hadir' ? (
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                            <UserCheck className="w-3.5 h-3.5" />
                            <span>Hadir ({w.guestCount} org)</span>
                          </span>
                        ) : w.attendance === 'tidak_hadir' ? (
                          <span className="inline-flex items-center gap-1 text-[11px] text-rose-400 font-medium">
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Berhalangan</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 font-medium">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Ragu-ragu</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="font-serif-jawa text-xs sm:text-sm text-[#D4C9BC] leading-relaxed italic bg-[#0F1411]/60 p-3 rounded-xl border border-[#C9A86A]/10">
                      &quot;{w.message}&quot;
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
