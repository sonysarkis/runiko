# Changelog — Runiko Virtual Office

## [0.1.0] — 2026-04-25
### Setup inicial
- Scaffolding Next.js 15.1.6 + React 19 + TypeScript + Tailwind 3.4
- Brand system de Supernova Lab implementado en `tailwind.config.ts` y `app/globals.css`
  - Paleta dorada (#F5C518 + variantes)
  - Tipografía: Orbitron (display), Rajdhani (sub), Inter (body)
  - Glows, corner accents, scanlines, pulse animations
- Skill `Superpowers` clonado en `.claude/superpowers/` (scoped al proyecto, no global)

### Contenido entregado
- `content/research.md` — Deep research de Runiko (SWOT, competencia, benchmarks)
- `content/strategy.md` — 5 oportunidades priorizadas con matriz impacto/esfuerzo
- `content/agent-design.md` — Diseño completo del agente cualificador (state machine, prompt, tools, mockup, JSON n8n)

### Componentes UI
- `components/TopBar.tsx` — Header con marca Supernova
- `components/OfficeScene.tsx` — Escena isométrica con grid background
- `components/Character.tsx` — Avatar SVG isométrico con escritorio + monitor con glow
- `components/AgentPanel.tsx` — Panel lateral con markdown render

### Decisiones técnicas registradas
- **Pre-guardado vs. real-time:** decidido pre-guardado en v0.1. Los entregables están en `/content/*.md` y se cargan server-side en build. Migración a real-time (Claude API) en v0.2 si Runiko aprueba.
- **Estilo visual:** isométrico flat 2D ("cyberpunk corporate") por encajar con branding Orbitron + dorado + dark.
- **Server vs. Client:** `lib/agents.ts` solo metadata (cliente-safe). `lib/content.server.ts` con `import "server-only"` para evitar bundling de `node:fs` al cliente.
- **Agente cualificador:** decidido n8n self-hosted en Render (free tier) + Claude Haiku 4.5 + WhatsApp Business API. Solo diseño en v0.1, sin deploy.

### Bloqueos resueltos
- **Disco C: lleno (100%):** redirigido `TMPDIR/TMP/TEMP` a `E:/tmp` para builds.
- **SWC version mismatch:** instalación accidental de `@next/swc-win32-x64-msvc@latest` (16.x) chocó con Next 15.1.6. Se limpió cache `AppData/Local/next-swc` y `node_modules/@next/swc-win32-x64-msvc`. Next descargó la versión correcta.
- **`node:fs` filtrándose al cliente:** se separó `lib/agents.ts` (cliente) de `lib/content.server.ts` (server-only).

### Pendiente (v0.2+)
- Subir repo a GitHub
- Deploy en Vercel
- Conectar agente real (Claude API) en lugar de markdown pre-guardado
- Recibir data real de Runiko para recalibrar hipótesis (ver `research.md` §8)
