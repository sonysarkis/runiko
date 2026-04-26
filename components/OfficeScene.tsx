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
      {/* Floor - isometric grid (fixed background on mobile, full on desktop) */}
      <div className="fixed md:absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Ambient gold glow */}
      <div
        className="fixed md:absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, rgba(245,197,24,0.12) 0%, transparent 55%)",
        }}
      />

      {/* Scanline overlay */}
      <div className="fixed md:absolute inset-0 scanline pointer-events-none mix-blend-overlay" />

      {/* Main content — flow layout on mobile, absolute centered on desktop */}
      <div className="relative md:absolute md:inset-0 md:flex md:flex-col z-10 pt-6 md:pt-0">
        {/* Section label + title */}
        <div className="md:absolute md:top-20 md:left-1/2 md:-translate-x-1/2 text-center px-4 md:px-0">
          <div className="section-label mb-1.5">Oficina Virtual · Equipo Asignado</div>
          <h1 className="font-display font-bold text-2xl md:text-3xl text-text-primary tracking-wider">
            PROYECTO <span className="text-gold text-glow-gold">RUNIKO</span>
          </h1>
          <p className="font-body text-xs md:text-sm text-text-muted mt-1.5 max-w-xl mx-auto">
            Tres agentes especializados trabajaron en paralelo. Click en cada uno para abrir su entregable.
          </p>
        </div>

        {/* Agents row/column */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 px-6 md:px-8 mt-10 md:mt-0 md:flex-1 md:pt-48 md:pb-12 pb-10">
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
        <div className="md:absolute md:bottom-3 md:left-1/2 md:-translate-x-1/2 text-center pb-6 md:pb-0">
          <div className="font-sub uppercase tracking-[3px] text-[10px] text-text-vmuted">
            Sistema operacional · Supernova Lab
          </div>
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
