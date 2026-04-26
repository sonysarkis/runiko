"use client";

import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AGENTS, type AgentId } from "@/lib/agents";

interface Props {
  agentId: AgentId | null;
  contents: Record<AgentId, string>;
  onClose: () => void;
}

export function AgentPanel({ agentId, contents, onClose }: Props) {
  const agent = agentId ? AGENTS.find((a) => a.id === agentId) : null;

  return (
    <AnimatePresence>
      {agent && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Panel */}
          <motion.aside
            key={agent.id}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 right-0 h-full w-full md:w-[640px] lg:w-[720px] bg-bg-card border-l border-border shadow-panel z-50 flex flex-col"
          >
            {/* Header */}
            <header
              className="px-6 py-5 border-b border-border bg-bg-header relative"
              style={{ borderTop: `2px solid ${agent.accentColor}` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-sub font-bold text-[11px] uppercase tracking-[3px]"
                      style={{ color: agent.accentColor }}
                    >
                      {agent.codename} · entregable
                    </span>
                    <span className="badge badge-active">
                      <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
                      Listo
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-text-primary">
                    {agent.role}
                  </h2>
                  <p className="font-body text-sm text-text-muted mt-1">
                    {agent.tagline}
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="shrink-0 w-9 h-9 rounded border border-border hover:border-gold transition-colors flex items-center justify-center text-text-muted hover:text-gold"
                  aria-label="Cerrar panel"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 1l12 12M13 1L1 13" />
                  </svg>
                </button>
              </div>
            </header>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-6">
              <article className="prose-runiko max-w-full">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {contents[agent.id]}
                </ReactMarkdown>
              </article>
            </div>

            {/* Footer */}
            <footer className="px-6 py-3 border-t border-border bg-bg-header">
              <div className="flex items-center justify-between font-sub uppercase tracking-[2px] text-[10px] text-text-vmuted">
                <span>Supernova Lab · Propuesta Runiko</span>
                <span>v0.1 · 2026-04-25</span>
              </div>
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
