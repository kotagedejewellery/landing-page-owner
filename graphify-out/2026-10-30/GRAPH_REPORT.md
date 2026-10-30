# Graph Report - landing-page-CEO  (2026-10-30)

## Corpus Check
- 30 files · ~10,482 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 5, .conf 1, .css 1)

## Summary
- 183 nodes · 283 edges · 22 communities (11 shown, 11 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `74ce3b4e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.jsx
- dependencies
- package.json
- deploy.sh
- Coach Joko Brand Guidelines
- .oxlintrc.json
- CEO Landing Page Favicon
- Instruksi Agen — Landing Page Coach Joko Wardiyanto
- Reduced Motion Accessibility
- Deployment production — jokowardiyanto.com
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
- Footer.jsx

## God Nodes (most connected - your core abstractions)
1. `Reveal()` - 17 edges
2. `Button()` - 14 edges
3. `App()` - 11 edges
4. `waLink()` - 11 edges
5. `Deployment production — jokowardiyanto.com` - 11 edges
6. `Instruksi Agen — Landing Page Coach Joko Wardiyanto` - 9 edges
7. `@phosphor-icons/react` - 8 edges
8. `Footer()` - 7 edges
9. `Hero()` - 6 edges
10. `Logo()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Batas perubahan` --references--> `Logo()`  [INFERRED]
  AGENTS.md → src/components/Logo.jsx
- `Batas perubahan` --references--> `Button()`  [INFERRED]
  AGENTS.md → src/components/Button.jsx
- `Batas perubahan` --references--> `Reveal()`  [INFERRED]
  AGENTS.md → src/components/Reveal.jsx
- `Design Tooling Graph Noise` --semantically_similar_to--> `Deliberate Graph Boundaries`  [INFERRED] [semantically similar]
  graphify-out/memory/query_20260907_021252_silahkan_baca_graphify_out_yang_ada_di_project_lan.md → GRAPHIFY_RUNTIME.md
- `Runtime-First Graph Coverage` --semantically_similar_to--> `Landing Page Runtime Map`  [INFERRED] [semantically similar]
  graphify-out/memory/query_20260907_024138_apakah_perlu_di_lengkapi_semua.md → GRAPHIFY_RUNTIME.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Landing Page Runtime System** — graphify_runtime_entry_and_render_flow, graphify_runtime_ordered_page_composition, graphify_runtime_navigation_interaction_accessibility, graphify_runtime_shared_motion_system, graphify_runtime_centralized_cta_configuration, graphify_runtime_global_style_foundation [EXTRACTED 1.00]
- **Coach Joko Visual Identity** — design_system_brand_the_clarity_point, design_system_brand_warm_dark_palette, design_system_brand_editorial_typography, design_system_coach_joko_master_dark_cinematic_luxury_system [INFERRED 0.95]
- **Decision-Complete Graph Coverage** — graphify_runtime_deliberate_graph_boundaries, graphify_out_memory_query_20260907_023445_oke_apakah_graphify_sudah_dipetakan_semua_untuk_pr_coverage_audit, graphify_out_memory_query_20260907_024138_apakah_perlu_di_lengkapi_semua_decision_complete_scope, graphify_out_memory_query_20260907_024138_apakah_perlu_di_lengkapi_semua_runtime_first_coverage [INFERRED 0.95]

## Communities (22 total, 11 thin omitted)

### Community 0 - "App.jsx"
Cohesion: 0.17
Nodes (24): Batas perubahan, @phosphor-icons/react, App(), About(), Button(), circle, shell, Clients (+16 more)

### Community 1 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @fontsource/cormorant-garamond, @fontsource/manrope, @fontsource/outfit, gsap, @gsap/react, @phosphor-icons/react, react (+3 more)

### Community 2 - "package.json"
Cohesion: 0.09
Nodes (23): name, private, scripts, build, dev, lint, preview, type (+15 more)

### Community 6 - "Coach Joko Brand Guidelines"
Cohesion: 0.10
Nodes (21): Menumbuhkan Bisnis, Menguatkan Sistem, Membangun Superteam, Coach Joko Brand Guidelines, Cormorant Garamond and Outfit Typography, Practical Indonesian Brand Voice, The Clarity Point, Warm Dark Brand Palette, Dark Cinematic Luxury System, Design System Master File (+13 more)

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

### Community 11 - "Deployment production — jokowardiyanto.com"
Cohesion: 0.08
Nodes (24): Accessibility and Delivery Checklist, AIDA Page Pattern, Alihkan domain dari Vercel, Arsitektur dan keputusan dari source, Bootstrap sebelum perpindahan DNS, Deployment production — jokowardiyanto.com, GitHub Actions, Pelaksanaan oleh pemilik VPS (+16 more)

### Community 13 - "devDependencies"
Cohesion: 0.33
Nodes (6): devDependencies, oxlint, @types/react, @types/react-dom, vite, @vitejs/plugin-react

### Community 23 - "Footer.jsx"
Cohesion: 0.12
Nodes (19): react, brands, education, roles, legal, socialList, stats, Logo() (+11 more)

## Knowledge Gaps
- **93 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `deploy.sh script` (+88 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 102 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Work-memory lessons

**Preferred sources** — corroborated by past sessions; start here.
- `Design System Master File` (2× useful, score=1.999678086)
- `Landing Page Entry` (2× useful, score=1.999678086) _(code changed — re-verify)_
- `App()` (2× useful, score=1.999678086)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Entry and Render Flow` connect `Deployment production — jokowardiyanto.com` to `Coach Joko Brand Guidelines`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _93 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08831908831908832 - nodes in this community are weakly interconnected._
- **Should `Coach Joko Brand Guidelines` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Deployment production — jokowardiyanto.com` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Footer.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1225071225071225 - nodes in this community are weakly interconnected._