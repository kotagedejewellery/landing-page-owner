# Deployment production — jokowardiyanto.com

## Pelaksanaan oleh pemilik VPS

Seluruh perintah VPS, perubahan DNS, dan pengisian GitHub Secrets dalam panduan
ini dilakukan sendiri oleh pemilik VPS. Agen hanya menyediakan file konfigurasi
dan panduan; pemilik tidak perlu memberikan akses server, IP VPS, private key,
password, atau akses DNS kepada agen. Nilai yang dibutuhkan deployment diisi
langsung oleh pemilik pada VPS atau GitHub Secrets yang ditentukan.

Urutan manual: siapkan folder dan source, jalankan bootstrap container, alihkan
DNS dan verifikasi HTTPS, lalu isi GitHub Secrets untuk mengaktifkan auto deploy
dari push `main`. Pertahankan situs lama selama proses verifikasi.

## Arsitektur dan keputusan dari source

| Aspek | Konfigurasi |
| --- | --- |
| Framework | React 19 + Vite 8; static client rendering, bukan SSR |
| Package manager | npm, `npm ci` memakai `package-lock.json` |
| Build | `npm run lint && npm run build`; output `dist/` |
| Build runtime | Node.js 24 Alpine, sesuai major Node lokal yang telah diuji |
| Production start | Default command image Nginx: `nginx -g 'daemon off;'` |
| Production port | `80` di dalam container; tidak dipublikasikan ke host |
| Environment aplikasi | Tidak ada `import.meta.env` atau `process.env`; tidak perlu `.env.production` |
| Backend/database | Tidak ada; konsultasi memakai tautan WhatsApp |
| Domain | `jokowardiyanto.com`, canonical HTTPS tanpa `www` |
| Compose project | `landing-page-coach`, satu service `app` |
| Folder VPS | `/opt/apps/landing-page` |
| Routing | Traefik v2.11 existing, network external `proxy`, entrypoint `web`/`websecure`, resolver `letsencrypt` |

Nginx hanya menyajikan berkas landing page di dalam container aplikasi. Traefik
existing di `/opt/infrastructure/traefik` tetap menangani port publik 80/443 dan
sertifikat. Jangan membuat proxy global, database, Redis, atau worker tambahan.

## Prasyarat VPS dan pemeriksaan awal

IP VPS belum disimpan dalam repository. Login sebagai `Kotagede-Jewellery`
dengan akses Docker yang sudah disediakan administrator. Jangan mengubah Docker
daemon, Traefik global, network `proxy`, atau aplikasi production lain.

Sebelum deploy, periksa secara read-only:

```bash
docker version
docker compose version
docker network inspect proxy
docker compose ls
docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
test -x "$HOME/vps-audit.sh"
```

Pastikan Compose mendukung `up --wait --wait-timeout`, Traefik terhubung ke
`proxy`, entrypoint/resolver di atas benar, dan tidak ada router existing yang
menggunakan `jokowardiyanto.com` atau namespace `landing-page-coach`. Jika berbeda,
sesuaikan labels landing page; jangan mengubah konfigurasi Traefik global.
Simpan daftar container dan waktu mulai aplikasi lain untuk pembandingan setelah deploy.

## Siapkan source dan SSH satu kali

Administrator menyediakan folder terpisah yang dapat ditulis oleh user deployment:

```bash
sudo install -d -o Kotagede-Jewellery -g "$(id -gn Kotagede-Jewellery)" \
  /opt/apps/landing-page
```

Sebagai `Kotagede-Jewellery`, clone repository ke folder kosong tersebut:

```bash
git clone https://github.com/kotagedejewellery/landing-page-owner.git \
  /opt/apps/landing-page
cd /opt/apps/landing-page
```

Jika repository private, sediakan akses baca noninteraktif VPS ke repository,
misalnya deploy key GitHub read-only dengan remote SSH. Key ini terpisah dari
key GitHub Actions untuk login ke VPS. Jangan menaruh token dalam URL remote.
Jika folder sudah berisi source, periksa origin dan perubahan lokal; jangan
menimpa atau menjalankan `git reset --hard`.

Untuk GitHub Actions → VPS, gunakan key deployment khusus tanpa passphrase.
Private key hanya disimpan sebagai GitHub Secret; public key-nya ditambahkan
ke `/home/Kotagede-Jewellery/.ssh/authorized_keys` tanpa mengganti key existing.
Verifikasi fingerprint host melalui console VPS sebelum mempercayai hasil
`ssh-keyscan`. Jangan memakai `StrictHostKeyChecking=no`.

## GitHub Actions

Di repository [kotagedejewellery/landing-page-owner](https://github.com/kotagedejewellery/landing-page-owner),
buka **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Nilai |
| --- | --- |
| `VPS_HOST` | IP atau hostname VPS 1, tanpa `https://` atau port; SSH port 22 |
| `VPS_USER` | `Kotagede-Jewellery` |
| `VPS_SSH_KEY` | Private key deployment lengkap, termasuk header dan footer |
| `VPS_SSH_KNOWN_HOSTS` | Baris known_hosts yang cocok dengan `VPS_HOST`, fingerprint sudah diverifikasi |

Workflow `.github/workflows/deploy.yml` berjalan pada push `main` atau pemicu
manual pada `main`. CI membangun image (termasuk lint/build), memeriksa health,
homepage, foto, favicon, serta HTTP 404 untuk aset yang tidak ada.

Setelah pemeriksaan lolos, SSH menjalankan `deploy/deploy.sh` dengan SHA commit
yang diperiksa CI. Script menolak checkout kotor, mengambil `origin/main`,
memastikan commit merupakan bagian dari `main`, lalu checkout commit tersebut
secara detached agar tidak tanpa sengaja men-deploy commit lebih baru yang belum
diperiksa. Build selesai sebelum container lama diganti. Deployment diserialkan.

Script hanya mengelola Compose project `landing-page-coach`. Tidak ada prune,
penghapusan volume, restart Docker/Traefik, atau perintah untuk project lain.

## Bootstrap sebelum perpindahan DNS

Commit konfigurasi ini harus sudah tersedia di repository. Pada VPS, periksa
source dan konfigurasi sebelum menjalankan container landing page:

```bash
cd /opt/apps/landing-page
docker compose -f compose.production.yml config
docker compose -f compose.production.yml build app
docker compose -f compose.production.yml up --detach --no-build --wait --wait-timeout 120 app
docker compose -f compose.production.yml ps
docker compose -f compose.production.yml exec -T app nginx -t
docker compose -f compose.production.yml exec -T app wget -q -O /dev/null http://127.0.0.1/
```

Pastikan config tidak memiliki `ports`, hanya service `app`, network external
`proxy`, hostname yang benar, namespace labels unik, dan backend port `80`.
Container dapat healthy sebelum DNS pindah; sertifikat publik belum tentu siap.
Script auto deploy memeriksa HTTPS secara ketat sehingga jalankan setelah
perpindahan DNS awal selesai.

## Alihkan domain dari Vercel

Pemeriksaan DNS pada 30 Oktober 2026 menunjukkan nameserver
`ns1.vercel-dns.com`/`ns2.vercel-dns.com` dan dua A record
`64.29.17.65`/`216.198.79.65`. Periksa ulang dan catat record aktual sebelum
perubahan; angka ini bukan IP VPS.

1. Pastikan container VPS healthy dan Traefik siap menerima hostname tersebut.
2. Ekspor/catat seluruh zone DNS, termasuk MX, TXT, CAA, serta record verifikasi.
3. Jika tetap memakai Vercel untuk DNS sementara: ubah A record apex `@` agar
   hanya menunjuk IP publik VPS 1. Hapus A lama untuk apex tersebut. Perbarui atau
   hapus AAAA apex jika masih menuju server lain; jangan membuat AAAA tanpa IPv6
   VPS yang berfungsi. Ini memindahkan hosting, tetapi DNS masih di Vercel.
4. Untuk keluar sepenuhnya dari Vercel: siapkan zone identik di penyedia DNS
   pilihan owner, ganti A apex ke VPS, lalu ubah nameserver di registrar. Jaga
   MX/TXT dan record lain tetap utuh. Jika DNSSEC aktif, koordinasikan DS record
   dengan penyedia/registrar agar pergantian nameserver tidak menyebabkan SERVFAIL.
5. Gunakan DNS-only saat menguji origin jika penyedia baru memiliki proxy CDN.
   Pastikan CAA yang ada mengizinkan Let's Encrypt menerbitkan sertifikat.
6. Tunggu propagasi, lalu verifikasi HTTP redirect dan HTTPS VPS. `www` tidak
   ditambahkan otomatis; inventarisasi alias existing sebelum perubahan DNS.

Jangan menonaktifkan situs atau DNS Vercel sebelum VPS terverifikasi dan TTL
record lama terlewati. Jika HTTPS gagal, kembalikan record DNS yang dicatat;
jangan merestart aplikasi production lain.

## Validasi HTTPS dan audit

Di VPS setelah DNS mengarah ke sana:

```bash
curl --fail --resolve jokowardiyanto.com:443:127.0.0.1 https://jokowardiyanto.com/ -o /dev/null
curl -I http://jokowardiyanto.com
curl -I https://jokowardiyanto.com
docker compose -f compose.production.yml ps
docker compose -f compose.production.yml logs --tail=100 app
"$HOME/vps-audit.sh" > "$HOME/vps-audit-latest.txt"
```

Target: HTTP beralih ke HTTPS, HTTPS 200 dengan sertifikat valid. Pemeriksaan
`--resolve` memastikan yang diuji adalah Traefik VPS, bukan jawaban DNS lama
yang masih menuju Vercel. Jangan menggunakan `curl -k` untuk meluluskan TLS.

Periksa dari browser: homepage, navigasi, mobile, gambar, font, tombol WhatsApp,
tautan sosial, canonical URL, dan Open Graph. Tidak ada form internal.
Audit harus menunjukkan `landing-page-coach` pada Compose projects, running
containers, dan router Traefik; tidak ada database PostgreSQL baru. Bandingkan
status/waktu mulai container lain dengan catatan awal.

Setelah DNS/HTTPS siap dan secrets terisi, push `main` atau jalankan workflow
manual untuk menguji auto deploy. Cabut integrasi auto deploy Vercel untuk
repository ini setelah transisi berhasil; pertahankan rollback selama masa transisi.

## Rollback container

Auto deploy menyimpan image sebelumnya sebagai `landing-page-coach:previous`
jika image production sudah ada. Jika build gagal, container lama tetap hidup.
Jika penggantian container atau HTTPS gagal, workflow gagal dan container baru
tidak otomatis dikembalikan. Periksa log lalu rollback hanya landing page:

```bash
cd /opt/apps/landing-page
docker image inspect landing-page-coach:previous
docker image tag landing-page-coach:previous landing-page-coach:production
docker compose -f compose.production.yml up --detach --no-build --wait --wait-timeout 120 app
curl --fail --resolve jokowardiyanto.com:443:127.0.0.1 https://jokowardiyanto.com/ -o /dev/null
```

Hentikan percobaan deploy ulang sampai penyebab kegagalan jelas agar tag
`previous` tidak tertimpa image yang gagal. Rollback pertama sebelum image
sebelumnya tersedia memakai DNS/situs Vercel yang masih dipertahankan. Jika
perubahan juga menyentuh Compose, kembalikan konfigurasi landing page ke commit
yang diketahui baik sebelum menjalankan rollback.

## Referensi

Pemeriksaan `npm audit` saat persiapan menemukan advisory pada dependency build
existing (antara lain Vite dan source-map-js). Pembaruan dependency tidak
termasuk migrasi hosting ini. Node, Vite, dan `node_modules` tidak disertakan
dalam image runtime Nginx; hindari membuka dev server ke internet.

- [Vite static deployment](https://vite.dev/guide/static-deploy)
- [Traefik v2.11 Docker labels](https://doc.traefik.io/traefik/v2.11/routing/providers/docker/)
- [Docker Compose services](https://docs.docker.com/reference/compose-file/services/)
- [GitHub Actions secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
