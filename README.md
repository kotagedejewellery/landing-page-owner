# Landing Page Coach Joko Wardiyanto

Landing page React/Vite untuk masterclass, pendampingan privat, dan undangan
pembicara. Domain production: **https://jokowardiyanto.com**.

## Development

Gunakan Node.js 24 dan npm (lockfile: `package-lock.json`).

```bash
npm ci
npm run dev
npm run lint
npm run build
```

Pada PowerShell yang memblokir `npm.ps1`, gunakan `npm.cmd`.

## Production VPS

Deployment menggunakan Docker Compose dan Traefik existing di VPS 1. Nginx di
dalam container menyajikan hasil build `dist/` pada port internal `80`, melalui
external network `proxy`. Tidak ada port host, backend, atau database tambahan.

[Panduan deployment, GitHub Secrets, perpindahan DNS, dan rollback](docs/DEPLOYMENT.md).

Pengaturan VPS, DNS, dan GitHub Secrets dilakukan sendiri oleh pemilik mengikuti
panduan tersebut, tanpa memberikan akses atau credential kepada agen.

Push ke `main` menjalankan pemeriksaan image, kemudian deployment melalui SSH
setelah VPS dan empat GitHub Secrets selesai disiapkan. Hosting production
tidak memerlukan Vercel. Jangan menonaktifkan situs lama sebelum HTTPS VPS
berhasil diverifikasi dan propagasi DNS selesai.

## Konten dan kontak

Konten halaman berada di `src/components/`. Nomor WhatsApp, template pesan,
dan tautan media sosial berada di `src/lib/config.js`. Aplikasi saat ini tidak
memerlukan environment variable atau `.env.production`. Jangan memasukkan
secret ke source frontend atau image Docker.
