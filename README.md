# Runiko Virtual Office

> Propuesta estratégica interactiva de **Supernova Lab** para **Runiko Barbería** (Mall San Bartolo, San Antonio de Pereira, Antioquia).

Una "oficina virtual" isométrica donde tres agentes especializados entregan su trabajo: Research, Strategy y Agent Design. Click en cada personaje → se abre el entregable.

## Stack
- **Next.js 15** + React 19 + TypeScript
- **Tailwind 3.4** con brand system Supernova (Orbitron, dorado, glows)
- **Framer Motion** para animaciones
- **react-markdown** + remark-gfm para render de los entregables
- Deploy: **Vercel** (objetivo)

## Estructura
```
.
├── app/
│   ├── layout.tsx          # Layout raíz (fonts, metadata)
│   ├── page.tsx            # Página principal (server component)
│   └── globals.css         # Brand system + estilos prose
├── components/
│   ├── TopBar.tsx
│   ├── OfficeScene.tsx     # Escena con los 3 personajes
│   ├── Character.tsx       # Muñequito isométrico SVG
│   └── AgentPanel.tsx      # Panel lateral con markdown
├── content/                # Entregables pre-guardados (markdown)
│   ├── research.md
│   ├── strategy.md
│   └── agent-design.md
├── lib/
│   ├── agents.ts           # Metadata (cliente-safe)
│   └── content.server.ts   # Lectura de markdown (server-only)
└── docs/
    └── changelog.md
```

## Desarrollo local

```bash
# Instalar deps
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm start
```

> **Nota Windows:** si tu disco C: tiene poco espacio, redirigí los temp dirs:
> ```bash
> export TMPDIR="E:/tmp" TMP="E:/tmp" TEMP="E:/tmp"
> npm run build
> ```

## Roadmap

### v0.1 (actual)
- ✅ Entregables pre-guardados en markdown
- ✅ UI isométrica + 3 agentes interactivos
- ✅ Brand system Supernova completo

### v0.2 (siguiente — si Runiko aprueba)
- Migrar entregables a generación real-time vía Claude API
- Conectar el agente cualificador a WhatsApp Business + n8n + Weibook
- Dashboard de métricas en vivo

## Equipo
- **Supernova Lab** — Juanse (Founding Partner) + Sony (AI Engineer)
- Cliente: Runiko Barbería
