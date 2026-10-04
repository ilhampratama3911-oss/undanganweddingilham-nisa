export interface CoupleMember {
  fullName: string;
  shortName: string;
  role: 'Groom' | 'Bride';
  javaneseTitle: string;
  fatherName: string;
  motherName: string;
  origin: string;
  instagram?: string;
  photoUrl: string;
  description: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  javaneseSubtitle: string;
  dayName: string;
  weton: string; // e.g. "Sabtu Kliwon"
  dateString: string; // e.g. "04 November 2026"
  timeString: string; // e.g. "08:00 - 10:00 WIB"
  isoDateTime: string; // ISO string for calendar & countdown
  venueName: string;
  hallName?: string;
  address: string;
  mapsUrl: string;
  notes?: string;
}

export interface LoveStoryMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  description: string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  qrCodeUrl?: string;
  colorTheme: string;
}

export interface GuestWish {
  id: string;
  senderName: string;
  relation: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  guestCount: number;
  message: string;
  createdAt: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  sourceType: 'youtube';
  url: string;
  youtubeId: string;
  description: string;
}
