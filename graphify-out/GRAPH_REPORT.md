# Graph Report - landing-page-CEO  (2026-10-16)

## Corpus Check
- 28 files · ~8,348 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 2, .css 1)

## Summary
- 169 nodes · 269 edges · 26 communities (16 shown, 10 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f48d108f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Speaker.jsx
- dependencies
- package.json
- Coach Joko Landing Page Entry
- Reveal.jsx
- App.jsx
- Coach Joko Brand Guidelines
- .oxlintrc.json
- CEO Landing Page Favicon
- Instruksi Agen — Landing Page Coach Joko Wardiyanto
- Reduced Motion Accessibility
- React and Vite Template
- Centralized WhatsApp and Social Configuration
- devDependencies
- Cormorant Garamond 400
- Cormorant Garamond 400 Italic
- Cormorant Garamond 500
- Cormorant Garamond 500 Italic
- Outfit 400
- Outfit 500
- Outfit 600
- gsap/ScrollTrigger
- react-dom/client
- About.jsx
- Footer.jsx
- Masterclass.jsx

## God Nodes (most connected - your core abstractions)
1. `Reveal()` - 17 edges
2. `Button()` - 14 edges
3. `App()` - 11 edges
4. `waLink()` - 11 edges
5. `Instruksi Agen — Landing Page Coach Joko Wardiyanto` - 9 edges
6. `@phosphor-icons/react` - 8 edges
7. `Footer()` - 7 edges
8. `Hero()` - 6 edges
9. `Logo()` - 6 edges
10. `Masterclass()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Batas perubahan` --references--> `Logo()`  [INFERRED]
  AGENTS.md → src/components/Logo.jsx
- `Batas perubahan` --references--> `Button()`  [INFERRED]
  AGENTS.md → src/components/Button.jsx
- `Batas perubahan` --references--> `Reveal()`  [INFERRED]
  AGENTS.md → src/components/Reveal.jsx
- `Centralized WhatsApp and Social Configuration` --semantically_similar_to--> `Centralized CTA Configuration`  [INFERRED] [semantically similar]
  design-system/BRAND.md → GRAPHIFY_RUNTIME.md
- `Design Tooling Graph Noise` --semantically_similar_to--> `Deliberate Graph Boundaries`  [INFERRED] [semantically similar]
  graphify-out/memory/query_20260907_021252_silahkan_baca_graphify_out_yang_ada_di_project_lan.md → GRAPHIFY_RUNTIME.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Landing Page Runtime System** — graphify_runtime_entry_and_render_flow, graphify_runtime_ordered_page_composition, graphify_runtime_navigation_interaction_accessibility, graphify_runtime_shared_motion_system, graphify_runtime_centralized_cta_configuration, graphify_runtime_global_style_foundation [EXTRACTED 1.00]
- **Coach Joko Visual Identity** — design_system_brand_the_clarity_point, design_system_brand_warm_dark_palette, design_system_brand_editorial_typography, design_system_coach_joko_master_dark_cinematic_luxury_system [INFERRED 0.95]
- **Decision-Complete Graph Coverage** — graphify_runtime_deliberate_graph_boundaries, graphify_out_memory_query_20260907_023445_oke_apakah_graphify_sudah_dipetakan_semua_untuk_pr_coverage_audit, graphify_out_memory_query_20260907_024138_apakah_perlu_di_lengkapi_semua_decision_complete_scope, graphify_out_memory_query_20260907_024138_apakah_perlu_di_lengkapi_semua_runtime_first_coverage [INFERRED 0.95]

## Communities (26 total, 10 thin omitted)

### Community 0 - "Speaker.jsx"
Cohesion: 0.19
Nodes (9): @phosphor-icons/react, circle, shell, fitFor, options, institutions, kegiatan, themes (+1 more)

### Community 1 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @fontsource/cormorant-garamond, @fontsource/manrope, @fontsource/outfit, gsap, @gsap/react, @phosphor-icons/react, react (+3 more)

### Community 2 - "package.json"
Cohesion: 0.10
Nodes (21): name, private, scripts, build, dev, lint, preview, type (+13 more)

### Community 3 - "Coach Joko Landing Page Entry"
Cohesion: 0.13
Nodes (15): Accessibility and Delivery Checklist, AIDA Page Pattern, Landing Page Graph Snapshot, Design Tooling Graph Noise, Runtime-First Graph Coverage, Deliberate Graph Boundaries, Entry and Render Flow, Landing Page Runtime Map (+7 more)

### Community 4 - "Reveal.jsx"
Cohesion: 0.18
Nodes (12): gsap, @gsap/react, react, stats, Logo(), links, Nav(), sectionIds (+4 more)

### Community 5 - "App.jsx"
Cohesion: 0.40
Nodes (11): Batas perubahan, App(), About(), Button(), Clients, Hero(), Masterclass(), Private() (+3 more)

### Community 6 - "Coach Joko Brand Guidelines"
Cohesion: 0.12
Nodes (16): Menumbuhkan Bisnis, Menguatkan Sistem, Membangun Superteam, Coach Joko Brand Guidelines, Cormorant Garamond and Outfit Typography, Practical Indonesian Brand Voice, The Clarity Point, Warm Dark Brand Palette, Dark Cinematic Luxury System, Design System Master File (+8 more)

### Community 7 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 8 - "CEO Landing Page Favicon"
Cohesion: 0.67
Nodes (4): Abstract Peak Mark, Dark Rounded Tile, CEO Landing Page Favicon, Gold Apex Dot

### Community 9 - "Instruksi Agen — Landing Page Coach Joko Wardiyanto"
Cohesion: 0.22
Nodes (8): Instruksi Agen — Landing Page Coach Joko Wardiyanto, Klarifikasi dan kegagalan tool, Konteks proyek dan sumber acuan, Perbaikan bug, Perlindungan data dan database, Prinsip akhir, Urutan kerja, Validasi dan performa

### Community 10 - "Reduced Motion Accessibility"
Cohesion: 1.33
Nodes (3): GSAP Motion Policy, Reduced Motion Accessibility, Shared GSAP Motion System

### Community 11 - "React and Vite Template"
Cohesion: 0.67
Nodes (3): HMR and Oxlint Setup, React Compiler Disabled, React and Vite Template

### Community 13 - "devDependencies"
Cohesion: 0.33
Nodes (6): devDependencies, oxlint, @types/react, @types/react-dom, vite, @vitejs/plugin-react

### Community 23 - "About.jsx"
Cohesion: 0.29
Nodes (6): brands, education, roles, TODO: ganti URL sosial media dengan akun asli., SOCIALS, WHATSAPP_NUMBER

### Community 24 - "Footer.jsx"
Cohesion: 0.50
Nodes (4): Footer(), legal, socialList, waLink()

### Community 25 - "Masterclass.jsx"
Cohesion: 0.50
Nodes (3): fitFor, kelas, pillars

## Knowledge Gaps
- **82 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+77 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 90 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Work-memory lessons

**Preferred sources** — corroborated by past sessions; start here.
- `Design System Master File` (2× useful, score=1.999678086)
- `Landing Page Entry` (2× useful, score=1.999678086)
- `App()` (2× useful, score=1.999678086)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Reveal()` connect `App.jsx` to `Reveal.jsx`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Why does `Coach Joko Landing Page Entry` connect `Coach Joko Landing Page Entry` to `Coach Joko Brand Guidelines`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _82 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09782608695652174 - nodes in this community are weakly interconnected._
- **Should `Coach Joko Landing Page Entry` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Coach Joko Brand Guidelines` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._