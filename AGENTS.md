# Instruksi Agen — Landing Page Coach Joko Wardiyanto

## Urutan kerja

1. Baca seluruh `AGENTS.md` yang berlaku sebelum melakukan pekerjaan apa pun.
2. Untuk setiap pekerjaan software engineering, pilih skill Matt Pocock terpasang yang paling relevan dengan jenis tugas: implementasi, diagnosis, test-first, review, arsitektur/desain, riset, prototipe, domain modeling, triage, tiket/spesifikasi, atau handoff. Baca seluruh `SKILL.md`, lalu ikuti workflow-nya. Muat hanya skill yang relevan.
3. Untuk pekerjaan kode, gunakan Ponytail sebagai standar analisis dependency dan blast radius. Gunakan level `full` untuk perubahan behavior, business logic, data flow, permission, shared code, bug, atau refactor. Analisis perubahan trivial dapat proporsional.
4. Gunakan Graphify sebelum memahami atau mengubah kode/arsitektur yang non-trivial. Mulai dari `graphify-out/GRAPH_REPORT.md`, lalu query graph sesuai kebutuhan. Baca source langsung jika konteks Graphify belum cukup, tidak mencakup area terkait, atau tidak sesuai dengan source terkini.
5. Setelah satu logical change selesai, update Graphify sebelum handoff. Gunakan `graphify update .` untuk pembaruan kode; periksa hasil dan status pembaruan semantik untuk dokumentasi. Jangan menganggap pembaruan kode otomatis memetakan seluruh dokumentasi atau memaksa overwrite graph saat pembaruan ditolak.
6. Untuk pekerjaan UI/UX, jalankan `impeccable context` satu kali per sesi dan gunakan Impeccable.

## Konteks proyek dan sumber acuan

Proyek ini adalah landing page personal branding Coach Joko Wardiyanto untuk Scale Up Masterclass, pendampingan bisnis privat, dan undangan pembicara. Alur konsultasi mengarah ke WhatsApp dengan pesan sesuai program. Implementasi saat ini berupa frontend React/Vite; konten dikelola di source, tanpa backend, database, akun pengguna, atau pembayaran.

Baca hanya acuan yang relevan terhadap tugas:

| Jenis pekerjaan | Acuan |
| --- | --- |
| Product, penawaran, audiens, atau business rule | `design-system/BRAND.md`, konten bagian terkait di `src/components/`, dan requirement user |
| Arsitektur, dependency, integration, atau deployment | Graphify, `GRAPHIFY_RUNTIME.md`, `package.json`, `vite.config.js`, serta konfigurasi deployment yang tersedia |
| UI/UX | `design-system/BRAND.md`, `design-system/coach-joko/MASTER.md`, dan `src/index.css`; ikuti override `design-system/coach-joko/pages/[page-name].md` jika tersedia |
| Kontak, CTA, dan media sosial | `src/lib/config.js` serta seluruh pemakainya |
| Database, jika tugas menyentuhnya | Schema, migration, dan dokumentasi deployment yang tersedia untuk target terkait |

Jika dokumen menyebut fitur yang tidak ada, gunakan source terkini untuk menjelaskan behavior existing dan laporkan perbedaannya. Jangan menganggap fitur tersebut sudah diimplementasikan. Dokumen yang belum tersedia bukan alasan membuat dokumentasi atau fitur tambahan di luar scope.

## Batas perubahan

1. Pilih solusi paling sederhana yang menyelesaikan requirement sepenuhnya.
2. Jaga scope. Jangan melakukan refactor, cleanup, improvement, atau inisiasi lain yang tidak diminta.
3. Pertahankan behavior existing. Jangan mengubah API contract, URL, schema, permission, UX flow, default value, atau behavior di luar kebutuhan task. Pada landing page ini, perhatikan anchor navigasi, tujuan CTA, template pesan WhatsApp, dan tautan sosial.
4. Ikuti pola existing. Gunakan architecture, convention, component, utility, dan dependency yang sudah tersedia sebelum membuat pola baru. Gunakan kembali `Button`, `Reveal`, `Logo`, konfigurasi kontak, dan setup GSAP bersama sesuai kebutuhan.
5. Jangan menambah dependency jika kebutuhan dapat diselesaikan dengan stack existing.
6. Pertahankan perubahan user yang sudah ada di working tree, termasuk artefak Graphify. Batasi perubahan pada file yang diperlukan oleh task.
7. Berhenti ketika acceptance criteria terpenuhi. Jangan melanjutkan improvement setelah task selesai.

## Perbaikan bug

Saat memperbaiki bug:

1. Temukan root cause, bukan hanya gejala.
2. Telusuri caller, shared component, handler, utility, query, test, dan alur lain yang menggunakan pola yang sama.
3. Perbaiki seluruh kasus yang memiliki root cause yang sama.
4. Laporkan kasus yang terlihat mirip tetapi memiliki behavior berbeda; jangan otomatis mengubahnya.
5. Tambahkan atau jalankan test yang membuktikan bug tidak muncul kembali. Jika belum ada test runner, gunakan pemeriksaan terarah yang dapat diulang; laporkan keterbatasannya dan jangan menambah framework tanpa kebutuhan.

## Perlindungan data dan database

Data existing tidak boleh dianggap disposable, termasuk database lokal. Aturan ini berlaku untuk setiap task yang menyentuh data, meskipun implementasi landing page saat ini belum menggunakan database.

Tanpa persetujuan eksplisit user, jangan:

- reset atau recreate database;
- menjalankan `migrate:fresh`, database reset, `DROP DATABASE`, atau `DROP SCHEMA`;
- melakukan truncate atau delete massal;
- menghapus database Docker volume;
- menjalankan destructive seed;
- membuat destructive migration; atau
- mengubah migration lama yang sudah pernah digunakan di shared, staging, atau production environment.

Gunakan migration forward-only dan non-destructive secara default. Sebelum migration, seed, atau mutation data berisiko:

1. Verifikasi environment dan target database.
2. Pahami dampaknya terhadap data existing.
3. Pilih solusi non-destructive.

Jika satu-satunya solusi berisiko kehilangan data: berhenti, jelaskan risiko, dan minta persetujuan eksplisit.

Deploy, build, startup, CI/CD, Dockerfile, entrypoint, dan post-deploy tidak boleh mengandung database reset.

## Validasi dan performa

Uji secara proporsional terhadap risiko perubahan. Prioritaskan test untuk:

- business logic;
- permission dan access control;
- calculation;
- data mutation;
- database migration;
- shared behavior; dan
- bug regression.

Untuk perubahan kode, jalankan script lint dan build yang relevan dari `package.json`. Pada PowerShell yang memblokir `npm.ps1`, gunakan `npm.cmd` tanpa mengubah execution policy. Untuk perubahan dokumentasi saja, periksa isi, path acuan, dan diff; build aplikasi tidak diperlukan.

Untuk perubahan UI/UX, periksa tampilan responsif, navigasi keyboard, fokus, menu mobile, CTA, dan reduced motion sesuai area yang berubah. Pertahankan aksesibilitas dan identitas visual existing kecuali perubahan tersebut diminta.

Jangan mengklaim sesuatu sudah tervalidasi jika belum benar-benar dijalankan atau diperiksa.

Optimasi hanya jika relevan terhadap task atau bottleneck. Prioritasnya:

1. Hilangkan pekerjaan, query, request, atau render yang tidak diperlukan.
2. Optimalkan query dan hindari N+1.
3. Gunakan pagination untuk dataset besar.
4. Minimalkan API payload dan deduplicate request.
5. Gunakan caching bila data sering dibaca dan invalidasinya jelas.
6. Lazy-load komponen atau media berat dan optimalkan image.
7. Tambah database index berdasarkan access pattern nyata.
8. Gunakan code splitting, memoization, CDN, atau background job bila memang dibutuhkan.

Terapkan hanya optimasi yang sesuai dengan arsitektur dan tugas saat ini. Jangan mengorbankan simplicity demi micro-optimization.

## Klarifikasi dan kegagalan tool

Minta klarifikasi hanya jika ambiguitas dapat mengubah hasil secara material, seperti business rule, permission, destructive operation, data interpretation, scope, atau behavior yang memiliki beberapa pilihan valid. Tentukan detail lain dari codebase, test, dokumentasi, design system, atau convention existing. Jangan membaca seluruh dokumentasi tanpa alasan.

Jika Graphify, Impeccable, test, build, atau tool wajib gagal:

1. Laporkan perintah dan error yang relevan.
2. Jangan mengklaim proses berhasil.
3. Jangan membuat pengganti atau hasil tiruan.
4. Jangan memasang tool lain tanpa kebutuhan atau persetujuan.

Jika dua aturan proyek bertentangan, gunakan urutan:

```text
1. Keselamatan data
2. Security dan permission
3. Correctness
4. Scope / acceptance criteria
5. Existing behavior
6. Existing architecture
7. Regression prevention
8. Testing
9. Performance
10. Cleanup / improvement
```

## Prinsip akhir

```text
Understand
→ Trace
→ Change minimally
→ Protect data
→ Test
→ Validate
→ Stop
```
