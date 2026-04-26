export type AgentId = "researcher" | "strategist" | "agent-builder";

export interface AgentMeta {
  id: AgentId;
  codename: string;
  role: string;
  tagline: string;
  fileName: string;
  position: { x: number; y: number };
  accentColor: string;
  status: "active" | "building" | "planning";
}

export const AGENTS: AgentMeta[] = [
  {
    id: "researcher",
    codename: "R-01",
    role: "Researcher",
    tagline: "Deep research del mercado y la marca",
    fileName: "research.md",
    position: { x: 25, y: 45 },
    accentColor: "#60a5fa",
    status: "active",
  },
  {
    id: "strategist",
    codename: "S-02",
    role: "Strategist",
    tagline: "Oportunidades de marketing y ventas priorizadas",
    fileName: "strategy.md",
    position: { x: 50, y: 40 },
    accentColor: "#F5C518",
    status: "active",
  },
  {
    id: "agent-builder",
    codename: "A-03",
    role: "Agent Builder",
    tagline: "Diseño del agente cualificador + seguimiento",
    fileName: "agent-design.md",
    position: { x: 75, y: 45 },
    accentColor: "#a78bfa",
    status: "active",
  },
];
