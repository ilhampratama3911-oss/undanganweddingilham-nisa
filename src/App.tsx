/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  INITIAL_BANK_ACCOUNTS,
  INITIAL_BRIDE,
  INITIAL_EVENTS,
  INITIAL_GROOM,
  INITIAL_HERO_IMAGE,
  INITIAL_SCENIC_IMAGE,
} from './data/weddingData';
import groomRealPhoto from './assets/images/groom_ilham_real.jpeg';
import brideRealPhoto from './assets/images/bride_nisa_halfbody_new.jpeg';
import { weddingAudio } from './services/audioEngine';
import { AudioTrack, CoupleMember } from './types/wedding';
import { CoverModal } from './components/CoverModal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SurahSection } from './components/SurahSection';
import { BrideGroomSection } from './components/BrideGroomSection';
import { EventScheduleSection } from './components/EventScheduleSection';
import { LocationBarcodeSection } from './components/LocationBarcodeSection';
import { DigitalEnvelopeSection } from './components/DigitalEnvelopeSection';
import { FooterSection } from './components/FooterSection';
import { AudioFloatingPlayer } from './components/AudioFloatingPlayer';

export default function App() {
  // Guest name extracted from URL param ?to=Nama+Tamu
  const [guestName, setGuestName] = useState<string>('Tamu Undangan');
  const [isCoverOpen, setIsCoverOpen] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Couple data with localStorage support
  const [groom, setGroom] = useState<CoupleMember>(() => {
    try {
      const saved = localStorage.getItem('ilham_nisa_groom');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.fullName) {
          parsed.fullName = parsed.fullName.replace(/,\s*S\.T\.?/gi, '').trim();
        }
        parsed.origin = 'Desa Mojolawaran RT:005/RW:001, Kec. Gabus, Kab. Pati';
        parsed.instagram = '';
        parsed.fatherName = 'Bapak Ali Mahmudi';
        parsed.motherName = 'Ibu Sri Budi Rahayu';
        parsed.photoUrl = groomRealPhoto;
        return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_GROOM;
  });

  const [bride, setBride] = useState<CoupleMember>(() => {
    try {
      const saved = localStorage.getItem('ilham_nisa_bride');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.fullName) {
          parsed.fullName = parsed.fullName.replace(/,\s*S\.Pd\.?/gi, '').trim();
        }
        parsed.fatherName = 'Bapak H. Sudiono';
        parsed.motherName = 'Ibu Hj. Kunisaroh';
        parsed.origin = 'Dk. Satak Desa Klakahkasihan RT:002/RW:006, Kec. Gembong, Kab. Pati';
        parsed.instagram = '';
        parsed.photoUrl = brideRealPhoto;
        return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_BRIDE;
  });

  useEffect(() => {
    try {
      // Sync names, parents, address, and groom/bride photo
      const cleanGroom: CoupleMember = {
        ...groom,
        fullName: 'Ilham Pratama',
        fatherName: 'Bapak Ali Mahmudi',
        motherName: 'Ibu Sri Budi Rahayu',
        origin: 'Desa Mojolawaran RT:005/RW:001, Kec. Gabus, Kab. Pati',
        instagram: '',
        photoUrl: groomRealPhoto,
      };
      const cleanBride: CoupleMember = {
        ...bride,
        fullName: "Sholikhatun Nisa'",
        fatherName: 'Bapak H. Sudiono',
        motherName: 'Ibu Hj. Kunisaroh',
        origin: 'Dk. Satak Desa Klakahkasihan RT:002/RW:006, Kec. Gembong, Kab. Pati',
        instagram: '',
        photoUrl: brideRealPhoto,
      };
      setGroom(cleanGroom);
      setBride(cleanBride);
      setHeroPhoto(INITIAL_HERO_IMAGE);
      localStorage.setItem('ilham_nisa_groom', JSON.stringify(cleanGroom));
      localStorage.setItem('ilham_nisa_bride', JSON.stringify(cleanBride));
      localStorage.setItem('ilham_nisa_hero_photo', INITIAL_HERO_IMAGE);
    } catch {
      // ignore
    }
  }, []);

  const [heroPhoto, setHeroPhoto] = useState<string>(() => {
    return localStorage.getItem('ilham_nisa_hero_photo') || INITIAL_HERO_IMAGE;
  });

  const [currentTrack, setCurrentTrack] = useState<AudioTrack>(weddingAudio.getTrack());

  // Listen to audio track updates
  useEffect(() => {
    const unsub = weddingAudio.subscribe((playing, track) => {
      setIsPlaying(playing);
      setCurrentTrack(track);
    });
    return unsub;
  }, []);

  const handleTogglePlay = () => {
    weddingAudio.toggle();
  };

  // Parse query params for guest name (?to=... or ?u=...)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const toParam = params.get('to') || params.get('u') || params.get('guest');
      if (toParam) {
        setGuestName(toParam);
      }
    }
  }, []);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ilham_nisa_groom', JSON.stringify(groom));
    } catch {
      // ignore
    }
  }, [groom]);

  useEffect(() => {
    try {
      localStorage.setItem('ilham_nisa_bride', JSON.stringify(bride));
    } catch {
      // ignore
    }
  }, [bride]);

  useEffect(() => {
    try {
      localStorage.setItem('ilham_nisa_hero_photo', heroPhoto);
    } catch {
      // ignore
    }
  }, [heroPhoto]);

  const handleOpenInvitation = () => {
    setIsCoverOpen(false);
    weddingAudio.play().catch(() => {});
  };

  const handleUpdateGroomPhoto = (url: string) => {
    setGroom((prev) => ({ ...prev, photoUrl: url }));
  };

  const handleUpdateBridePhoto = (url: string) => {
    setBride((prev) => ({ ...prev, photoUrl: url }));
  };

  const handleUpdateHeroPhoto = (url: string) => {
    setHeroPhoto(url);
  };

  const handleScrollToExplore = () => {
    const elem = document.getElementById('mempelai');
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121614] text-[#E8DFD3] selection:bg-[#C9A86A] selection:text-[#121614]">
      {/* 1. Serat Ulem Cover Modal (Initial entrance gate) */}
      <CoverModal
        isOpen={isCoverOpen}
        onOpen={handleOpenInvitation}
        guestName={guestName}
        heroPhoto={heroPhoto}
      />

      {/* 2. Top Navigation Bar (3-Zone Contract) */}
      <Navbar />

      {/* 3. Hero Section with Live Countdown */}
      <HeroSection
        heroPhoto={heroPhoto}
        onExplore={handleScrollToExplore}
      />

      {/* 4. Surah Ar-Rum 21 & Doa Adat Jawa */}
      <SurahSection />

      {/* 5. Mempelai Pria & Wanita Profiles */}
      <BrideGroomSection
        groom={groom}
        bride={bride}
      />

      {/* 6. Waktu & Papan Pahargyan (Akad & Resepsi) */}
      <EventScheduleSection events={INITIAL_EVENTS} />

      {/* 7. Peta Lokasi & Barcode Presensi (Pengganti Buku Tamu) */}
      <LocationBarcodeSection guestName={guestName} events={INITIAL_EVENTS} />

      {/* 10. Tandha Asih / Amplop Digital & QRIS */}
      <DigitalEnvelopeSection bankAccounts={INITIAL_BANK_ACCOUNTS} />

      {/* 11. Penutup & Keluarga Besar */}
      <FooterSection />

      {/* 12. Floating Audio Player */}
      <AudioFloatingPlayer
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
      />
    </div>
  );
}
