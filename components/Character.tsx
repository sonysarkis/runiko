"use client";

import { motion } from "framer-motion";
import type { AgentMeta } from "@/lib/agents";

interface Props {
  agent: AgentMeta;
  onSelect: () => void;
  delay?: number;
}

export function Character({ agent, onSelect, delay = 0 }: Props) {
  const accent = agent.accentColor;

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      onClick={onSelect}
      className="relative group cursor-pointer focus:outline-none flex flex-col items-center"
      aria-label={`Abrir entregable de ${agent.role}`}
    >
      {/* Floor shadow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-32 h-3 rounded-full blur-md opacity-50"
        style={{
          background: `radial-gradient(ellipse, ${accent}55 0%, transparent 70%)`,
          bottom: "-16px",
        }}
      />

      {/* The whole desk + character group, floating */}
      <motion.div
        className="relative"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <IsoDeskAndAvatar accent={accent} />
      </motion.div>

      {/* Hover glow ring */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(circle, ${accent}66 0%, transparent 60%)`,
          transform: "scale(1.4)",
        }}
      />

      {/* Label card */}
      <motion.div
        className="mt-2 w-52 bg-bg-card/95 backdrop-blur border rounded-md px-4 py-3 corner-accents card-stripe"
        style={{ borderColor: `${accent}66` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4 }}
      >
        <div className="flex items-center justify-between mb-1">
          <span
            className="font-sub font-bold text-[10px] uppercase tracking-[2px]"
            style={{ color: accent }}
          >
            {agent.codename}
          </span>
          <span className="badge badge-active text-[9px] !py-[2px] !px-[6px]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
            ON
          </span>
        </div>
        <div className="font-display font-bold text-sm text-text-primary">
          {agent.role}
        </div>
        <div className="font-body text-[11px] text-text-muted mt-1 leading-snug">
          {agent.tagline}
        </div>
        <div className="mt-2 font-sub text-[10px] uppercase tracking-[2px] text-gold opacity-0 group-hover:opacity-100 transition-opacity">
          ▸ Click para ver entregable
        </div>
      </motion.div>
    </motion.button>
  );
}

function IsoDeskAndAvatar({ accent }: { accent: string }) {
  return (
    <svg
      width="180"
      height="200"
      viewBox="0 0 180 200"
      className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
    >
      {/* Desk - isometric */}
      <g>
        {/* Desk top */}
        <polygon
          points="20,140 90,110 160,140 90,170"
          fill="#1E1E1E"
          stroke={accent}
          strokeWidth="1.5"
          opacity="0.95"
        />
        {/* Desk front */}
        <polygon
          points="20,140 90,170 90,195 20,165"
          fill="#161616"
          stroke="#2A2A2A"
          strokeWidth="1"
        />
        {/* Desk side */}
        <polygon
          points="160,140 90,170 90,195 160,165"
          fill="#0E0E0E"
          stroke="#2A2A2A"
          strokeWidth="1"
        />
        {/* Desk top stripe */}
        <line
          x1="20"
          y1="140"
          x2="90"
          y2="110"
          stroke={accent}
          strokeWidth="1"
          opacity="0.6"
        />
      </g>

      {/* Monitor - on desk */}
      <g>
        {/* Monitor base */}
        <rect x="78" y="118" width="24" height="4" fill="#0a0a0a" />
        <rect x="74" y="122" width="32" height="3" fill="#0a0a0a" />
        {/* Monitor screen */}
        <rect
          x="56"
          y="80"
          width="68"
          height="42"
          rx="2"
          fill="#0a0a0a"
          stroke={accent}
          strokeWidth="1.5"
        />
        {/* Screen glow */}
        <rect
          x="60"
          y="84"
          width="60"
          height="34"
          rx="1"
          fill={accent}
          opacity="0.18"
        />
        {/* Screen scanlines */}
        <rect x="62" y="88" width="40" height="1" fill={accent} opacity="0.5" />
        <rect x="62" y="92" width="56" height="1" fill={accent} opacity="0.3" />
        <rect x="62" y="96" width="32" height="1" fill={accent} opacity="0.5" />
        <rect x="62" y="100" width="48" height="1" fill={accent} opacity="0.3" />
        <rect x="62" y="104" width="44" height="1" fill={accent} opacity="0.4" />
        <rect x="62" y="108" width="36" height="1" fill={accent} opacity="0.3" />
        <rect x="62" y="112" width="52" height="1" fill={accent} opacity="0.5" />
      </g>

      {/* Character - silhouette behind desk */}
      <g>
        {/* Body */}
        <path
          d="M 90 60 Q 75 70 75 95 L 75 130 L 105 130 L 105 95 Q 105 70 90 60 Z"
          fill="#1A1A1A"
          stroke={accent}
          strokeWidth="1.5"
        />
        {/* Head */}
        <circle
          cx="90"
          cy="50"
          r="14"
          fill="#1A1A1A"
          stroke={accent}
          strokeWidth="1.5"
        />
        {/* Glow eyes */}
        <circle cx="86" cy="49" r="1.5" fill={accent} opacity="0.9">
          <animate
            attributeName="opacity"
            values="0.9;0.3;0.9"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="94" cy="49" r="1.5" fill={accent} opacity="0.9">
          <animate
            attributeName="opacity"
            values="0.9;0.3;0.9"
            dur="3s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </circle>
        {/* Halo glow */}
        <circle
          cx="90"
          cy="50"
          r="18"
          fill="none"
          stroke={accent}
          strokeWidth="0.5"
          opacity="0.3"
        />
      </g>

      {/* Antenna with pulsing dot */}
      <line
        x1="90"
        y1="36"
        x2="90"
        y2="28"
        stroke={accent}
        strokeWidth="1"
      />
      <circle cx="90" cy="26" r="2.5" fill={accent}>
        <animate
          attributeName="r"
          values="2.5;3.5;2.5"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.4;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
