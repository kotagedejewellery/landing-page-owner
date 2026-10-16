# Landing Page Runtime Map

This document supplies Graphify with the runtime and styling relationships that
cannot be extracted directly from CSS or inferred reliably from raster images.
It is intentionally limited to files that participate in the shipped landing
page.

## Entry and render flow

The browser loads [index.html](index.html), which mounts
[src/main.jsx](src/main.jsx) into `#root`. The React entry imports
[src/index.css](src/index.css) and renders [src/App.jsx](src/App.jsx) inside
React `StrictMode`.

`App` renders the page in this order:

1. [Navigation](src/components/Nav.jsx)
2. [Hero](src/components/Hero.jsx) (`#top`)
3. [Programs](src/components/Programs.jsx) (`#program`)
4. [About](src/components/About.jsx) (`#tentang`)
5. [Masterclass](src/components/Masterclass.jsx) (`#masterclass`)
6. [Private mentoring](src/components/Private.jsx) (`#privat`)
7. [Speaker](src/components/Speaker.jsx) (`#pembicara`)
8. [Clients](src/components/Clients.jsx) (`#klien`)
9. [Contact and footer](src/components/Footer.jsx) (`#kontak`)

The navigation observes page section positions, highlights the active section,
locks body scrolling while its mobile menu is open, traps keyboard focus inside
that menu, and uses GSAP to hide the header while scrolling down and reveal it
while scrolling up.

## Shared interaction systems

[src/components/Reveal.jsx](src/components/Reveal.jsx) is the shared entrance
animation wrapper used by content sections. It imports the centralized
[GSAP setup](src/lib/gsap.js), which registers `ScrollTrigger` and `useGSAP`, and
consults [usePrefersReducedMotion](src/lib/usePrefersReducedMotion.js). When the
visitor requests reduced motion, Reveal clears animation properties instead of
running its scroll-triggered entrance.

[src/components/Button.jsx](src/components/Button.jsx) provides the shared CTA
surface. WhatsApp URLs, per-program messages, and social links are centralized
in [src/lib/config.js](src/lib/config.js). Hero, Masterclass, Private mentoring,
Speaker, and Footer consume this configuration instead of constructing contact
links independently.

## Styling system

[src/index.css](src/index.css) is the global visual foundation and is processed
by Tailwind CSS v4 through [vite.config.js](vite.config.js). It defines the
Dark Cinematic Luxury theme:

- Typography: Outfit for sans-serif text and Cormorant Garamond for display text.
- Surfaces: `night`, `char`, and `ash` warm near-black tokens.
- Content: `cream` primary text and `mist` secondary text.
- Accent: `gold` champagne accent and `line` translucent borders.
- Motion curve: `ease-lux` (`cubic-bezier(0.32, 0.72, 0, 1)`).

The base layer provides smooth scrolling, font rendering, focus-visible rings,
selection colors, balanced headings, and readable paragraph wrapping. The
reduced-motion media query disables smooth scrolling.

The utility layer connects CSS to the React composition:

- `.skip-link` styles the keyboard-accessible link in `index.html`.
- `.grain` styles the fixed film-grain overlay rendered by `App`.
- `.diagonal-lines` supplies the Hero background texture.
- `.hero-wash` supplies a token-driven cinematic vignette.
- `.no-scrollbar` supports horizontal galleries.
- `.animate-marquee` and `.marquee-paused` provide a hover-pausable marquee and
  disable it for reduced-motion visitors.

## Runtime asset relationships

Hero and About use the [coach portrait](public/coach/photo.png). Private
mentoring uses the [coach session image](public/coach/coach.webp). About also
uses the [foundation infographic](public/yayasan.webp) and
[superteam photograph](public/superteam.webp). The HTML entry references the
[favicon](public/favicon.svg).

About renders the active business-brand logos:

- [Kotagede Jewellery](public/brand-bisnis/kotagede-jewellery.png)
- [Hijaz Moslem Jewelry](public/brand-bisnis/hijaz.png)
- [Safar Gold](public/brand-bisnis/safar.png)
- [Lentera Bisnis Academy](public/brand-bisnis/lentera-bisnis-academy.png)

Masterclass renders the nine class images:

- [Class 1](public/kelas/kelas-1.webp)
- [Class 2](public/kelas/kelas-2.webp)
- [Class 3](public/kelas/kelas-3.webp)
- [Class 4](public/kelas/kelas-4.webp)
- [Class 5](public/kelas/kelas-5.webp)
- [Class 6](public/kelas/kelas-6.webp)
- [Class 7](public/kelas/kelas-7.webp)
- [Class 8](public/kelas/kelas-8.webp)
- [Class 9](public/kelas/kelas-9.webp)

Speaker renders the teaching map and institution logos:

- [Teaching map](public/riwayat-mengajar/peta-mengajar.webp)
- [Universitas Islam Indonesia](public/riwayat-mengajar/uii.png)
- [Universitas Airlangga](public/riwayat-mengajar/unair.png)
- [Direktorat Jenderal Pajak](public/riwayat-mengajar/djp.png)
- [Kementerian Koperasi dan UKM](public/riwayat-mengajar/kemenkp-ukm.png)
- [Dinas Koperasi UKM DIY](public/riwayat-mengajar/dinkop-ukm-diy.png)
- [Dinas Koperasi UKM Kabupaten Blitar](public/riwayat-mengajar/dinkop-ukm-blitar.png)
- [Kampus Manager](public/riwayat-mengajar/kmapus-manager.png)
- [OJC Auto Course](public/riwayat-mengajar/ojc.png)
- [Pesantren Masyarakat Merapi Merbabu](public/riwayat-mengajar/pmmm.png)
- [Sukses Berkah Community](public/riwayat-mengajar/sbc.png)

Clients renders the logo files in `public/brand`: Cawang Medical, Lentera
Laptop, Little Jenna, Semangkok Boci, Savitri Gift, Kanida Kerudung, Kampung
Inggris Solo, Herba Natura, Soto Sumringah, Gembala Kambing Jogja, Sporti ID,
Beanbag Sultan, Abata Jogja, Bagaskara Jaya Abadi, and UD Serba Herbal.

## Deliberate graph boundaries

The graph excludes `.opencode`, dependency trees, build output, lockfiles, raw
raster extraction, and static reference artifacts that are not imported by the
React page. These inputs do not define the runtime architecture. Raster usage is
represented above through explicit source-backed links so asset relationships
remain queryable without image-only noise.
