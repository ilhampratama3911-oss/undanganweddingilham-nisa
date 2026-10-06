import { BankAccount, CoupleMember, GalleryItem, LoveStoryMilestone, WeddingEvent } from '../types/wedding';
import groomRealPhoto from '../assets/images/groom_ilham_real.jpeg';
import brideRealPhoto from '../assets/images/bride_nisa_halfbody_new.jpeg';
import coupleHeroPhoto from '../assets/images/couple_berdua_real.jpeg';
import jogloPhoto from '../assets/images/joglo_prewedding_scenery_1791014225465.jpg';
import couplePhotoAlt from '../assets/images/wedding_couple_hero_1791014169874.jpg';
import brideFullPhoto from '../assets/images/bride_nisa_new_drive.jpeg';
import albumFoto1 from '../assets/images/album_foto_1.jpeg';
import albumFoto2 from '../assets/images/album_foto_2.jpeg';
import albumFoto3 from '../assets/images/album_foto_3.jpeg';
import albumFoto4 from '../assets/images/album_foto_4.jpeg';
import albumFoto5 from '../assets/images/album_foto_5.jpeg';

export const INITIAL_GROOM: CoupleMember = {
  fullName: 'Ilham Pratama',
  shortName: 'Ilham',
  role: 'Groom',
  javaneseTitle: 'Raden Mas Bagus',
  fatherName: 'Bapak Ali Mahmudi',
  motherName: 'Ibu Sri Budi Rahayu',
  origin: 'Desa Mojolawaran RT:005/RW:001, Kec. Gabus, Kab. Pati',
  instagram: '',
  photoUrl: groomRealPhoto,
  description: 'Putra pertama yang bersahaja, berjiwa tangguh, dan teguh menjunjung tinggi budi pekerti serta keluhuran budaya Jawa.',
};

export const INITIAL_BRIDE: CoupleMember = {
  fullName: "Sholikhatun Nisa'",
  shortName: "Nisa'",
  role: 'Bride',
  javaneseTitle: 'Raden Ajeng Sekar',
  fatherName: 'Bapak H. Sudiono',
  motherName: 'Ibu Hj. Kunisaroh',
  origin: 'Dk. Satak Desa Klakahkasihan RT:002/RW:006, Kec. Gembong, Kab. Pati',
  instagram: '',
  photoUrl: brideRealPhoto,
  description: 'Putri kedua yang berparas ayu, santun nan bersahaja, memancarkan pesona keanggunan putri tanah Jawa sejati.',
};

export const INITIAL_HERO_IMAGE = coupleHeroPhoto;
export const INITIAL_SCENIC_IMAGE = '/src/assets/images/joglo_prewedding_scenery_1791014225465.jpg';

export const INITIAL_EVENTS: WeddingEvent[] = [
  {
    id: 'akad',
    title: 'Akad Nikah',
    javaneseSubtitle: 'Ijab Qobul & Janji Suci',
    dayName: 'Rabu Legi',
    weton: 'Legi (Neptu 12)',
    dateString: '04 November 2026',
    timeString: 'Pukul 08:00 WIB - Selesai',
    isoDateTime: '2026-11-04T08:00:00',
    venueName: 'KUA Kecamatan Gembong',
    hallName: 'Balai Nikah KUA Kec. Gembong',
    address: 'Jl. Raya Pati - Gembong, Kec. Gembong, Kabupaten Pati, Jawa Tengah 59162',
    mapsUrl: 'https://maps.google.com/?q=KUA+Kecamatan+Gembong+Pati',
    notes: 'Ijab kabul dihadiri oleh keluarga inti kedua mempelai sebagai bagian penting dari rukun dan prosesi sakral pernikahan.',
  },
  {
    id: 'resepsi',
    title: 'Pahargyan & Resepsi',
    javaneseSubtitle: 'Upacara Adat Temu Penganten',
    dayName: 'Rabu Legi',
    weton: 'Legi (Neptu 12)',
    dateString: '04 November 2026',
    timeString: 'Pukul 10:00 WIB - Selesai',
    isoDateTime: '2026-11-04T10:00:00',
    venueName: 'Kediaman Mempelai Wanita',
    hallName: 'Dk. Satak Desa Klakahkasihan',
    address: 'Dk. Satak Desa Klakahkasihan RT:002/RW:006, Kec. Gembong, Kab. Pati',
    mapsUrl: 'https://maps.app.goo.gl/JqcVRaqmqfxgJpdH7',
    notes: 'Rangkaian upacara panggih adat Jawa, kembul bujana handrawina, ramah tamah, dan doa berkah.',
  },
];

export const INITIAL_LOVE_STORIES: LoveStoryMilestone[] = [
  {
    year: '2021',
    title: 'Tepang Sapisan (Awal Pertemuan)',
    description: 'Pertama kali bertegur sapa di perpustakaan kampus Universitas Sebelas Maret. Percakapan hangat mengenai tugas akhir mengawali rajutan benang takdir antara dua insan.',
    tag: 'Awal Cerita',
  },
  {
    year: '2024',
    title: 'Lamaran & Nembung (Komitmen Suci)',
    description: 'Dengan restu Gusti Allah SWT dan doa restu kedua orang tua, keluarga Mas Ilham sowan ke kediaman Mbak Nisa di Yogyakarta untuk mengikat janji suci dalam adat nembung.',
    tag: 'Ikatan Janji',
  },
  {
    year: '2026',
    title: 'Pelaminan Adat Jawa (Menuju Halal)',
    description: 'Mewujudkan mimpi bersama dalam ikatan suci pernikahan berbalut sakralnya adat Jawa, siap melangkah mengarungi bahtera rumah tangga yang sakinah, mawaddah, warahmah.',
    tag: 'Puncak Bahagia',
  },
];

export const INITIAL_ALBUM_PHOTOS: GalleryItem[] = [
  {
    id: 'alb-1',
    url: albumFoto1,
    title: 'Kidung Katresnan Suci',
    description: 'Ilham & Nisa dalam balutan busana ageng adat Jawa penuh keanggunan, memancarkan harmoni cinta yang tulus.',
  },
  {
    id: 'alb-2',
    url: albumFoto2,
    title: 'Romantisme Lembaran Kisah',
    description: 'Sorot tatap mata penuh ketulusan, mengikat janji saling setia mendampingi dalam suka maupun duka.',
  },
  {
    id: 'alb-3',
    url: albumFoto3,
    title: 'Kehangatan Dua Hati',
    description: 'Langkah beriringan menyongsong bahtera rumah tangga yang sakinah, mawaddah, warahmah.',
  },
  {
    id: 'alb-4',
    url: albumFoto4,
    title: 'Pesona Putri Sekar Jagad',
    description: "Keanggunan Mbak Sholikhatun Nisa' memancarkan aura ketenangan dan keteduhan budi pekerti tanah Jawa.",
  },
  {
    id: 'alb-5',
    url: albumFoto5,
    title: 'Sang Satria Piningit',
    description: 'Keteguhan Mas Ilham Pratama bersiap menjadi imam dan pelindung keluarga dengan segenap jiwa raga.',
  },
];

export const INITIAL_GALLERY: GalleryItem[] = INITIAL_ALBUM_PHOTOS;

export const INITIAL_BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'seabank-nisa',
    bankName: 'SeaBank',
    accountNumber: '901256086655',
    accountHolder: "Sholikhatun Nisa'",
    colorTheme: 'from-[#EA580C] to-[#7C2D12]',
  },
  {
    id: 'seabank-ilham',
    bankName: 'SeaBank',
    accountNumber: '901421757022',
    accountHolder: 'Ilham Pratama',
    colorTheme: 'from-[#C2410C] to-[#431407]',
  },
];

export const PHYSICAL_GIFT_ADDRESS = {
  recipient: "Ilham Pratama & Sholikhatun Nisa'",
  phone: '0812-3456-7890',
  fullAddress: 'Dk. Satak Desa Klakahkasihan RT:002/RW:006, Kec. Gembong, Kab. Pati',
};

export const INITIAL_WISHES = [
  {
    id: 'w1',
    senderName: 'Keluarga Bpk. H. Sugeng Riyadi',
    relation: 'Paman dari Solo',
    attendance: 'hadir' as const,
    guestCount: 2,
    message: 'Nderek mangayubagya Mas Ilham kaliyan Mbak Nisa. Mugi dados keluarga ingkang sakinah mawaddah warahmah, pinaringan berkah lan tentrem gesangipun. Aamiin.',
    createdAt: 'Baru saja',
  },
  {
    id: 'w2',
    senderName: 'Dimas Kurniawan & Istri',
    relation: 'Sahabat Kuliah Mas Ilham',
    attendance: 'hadir' as const,
    guestCount: 2,
    message: 'Barakallahu lakum wa baraka alaikum wa jamaa bainakuma fii khoir bro Ilham! Selamat menempuh hidup baru bersama Mbak Nisa. Lancar sampai hari H yaa!',
    createdAt: '1 jam lalu',
  },
  {
    id: 'w3',
    senderName: 'Anisa Rahmawati, S.Pd.',
    relation: 'Sahabat Karib Mbak Nisa',
    attendance: 'hadir' as const,
    guestCount: 1,
    message: 'Masya Allah terharu banget melihat Mbak Nisa cantik sekali bersanding dengan Mas Ilham. Doa terbaik untuk kalian berdua, langgeng kersaning Gusti!',
    createdAt: '3 jam lalu',
  },
];
