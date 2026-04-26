"use client";

import { useState } from "react";
import { Character } from "./Character";
import { AgentPanel } from "./AgentPanel";
import { AGENTS, type AgentId } from "@/lib/agents";

interface Props {
  contents: Record<AgentId, string>;
}

export function OfficeScene({ contents }: Props) {
  const [activeAgent, setActiveAgent] = useState<AgentId | null>(null);

  return (
    <>
      {/* Floor - isometric grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Ambient gold glow from "windows" */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, rgba(245,197,24,0.12) 0%, transparent 55%)",
        }}
      />

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none mix-blend-overlay" />

      {/* Section label */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 text-center px-4">
        <div className="section-label mb-1.5">Oficina Virtual · Equipo Asignado</div>
        <h1 className="font-display font-bold text-2xl md:text-3xl text-text-primary tracking-wider">
          PROYECTO <span className="text-gold text-glow-gold">RUNIKO</span>
        </h1>
        <p className="font-body text-xs md:text-sm text-text-muted mt-1.5 max-w-xl mx-auto">
          Tres agentes especializados trabajaron en paralelo. Click en cada uno para abrir su entregable.
        </p>
      </div>

      {/* Office "stage" — relative positioning canvas */}
      <div className="absolute inset-0 z-10">
        {AGENTS.map((agent, i) => (
          <Character
            key={agent.id}
            agent={agent}
            onSelect={() => setActiveAgent(agent.id)}
            delay={i * 0.15}
          />
        ))}
      </div>

      {/* Footer hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-center">
        <div className="font-sub uppercase tracking-[3px] text-[10px] text-text-vmuted">
          Sistema operacional · Supernova Lab
        </div>
      </div>

      {/* Side panel */}
      <AgentPanel
        agentId={activeAgent}
        contents={contents}
        onClose={() => setActiveAgent(null)}
      />
    </>
  );
}
