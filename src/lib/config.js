// Konfigurasi konten & tautan global.
// Format internasional tanpa + dan tanpa spasi.
export const WHATSAPP_NUMBER = "6281125258282";

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  masterclass:
    "Halo Admin Coach Joko, saya [nama] dari bisnis [nama bisnis]. Saya tertarik mengikuti Scale Up Masterclass. Mohon informasi mengenai jadwal, fasilitas, dan cara pendaftarannya.",
  private:
    "Halo Admin Coach Joko, saya [nama], owner dari [nama bisnis]. Saat ini bisnis saya sedang menghadapi tantangan pada bagian [jelaskan singkat]. Saya ingin berkonsultasi mengenai program pendampingan bisnis privat.",
  speaker:
    "Halo Admin Coach Joko, saya [nama] dari [nama lembaga/komunitas]. Kami berencana mengadakan [jenis kegiatan] pada [tanggal] dengan tema [tema kegiatan]. Kami ingin mengundang Coach Joko sebagai pembicara. Mohon informasi lebih lanjut mengenai ketersediaan dan prosedurnya.",
  general:
    "Halo Admin Coach Joko, saya [nama] dari [nama bisnis]. Saya ingin berkonsultasi mengenai kebutuhan bisnis saya.",
};

// TODO: ganti URL sosial media dengan akun asli.
export const SOCIALS = {
  instagram: {
    label: "Instagram",
    handle: "@joko.wardiyanto",
    href: "https://www.instagram.com/joko.wardiyanto",
  },
  facebook: {
    label: "Facebook",
    handle: "Joko Wardiyanto",
    href: "https://www.facebook.com/joko.wardiyanto",
  },
  tiktok: {
    label: "TikTok",
    handle: "Joko Wardiyanto",
    href: "https://www.tiktok.com/@joko.wardiyanto",
  },
};
