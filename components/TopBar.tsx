"use client";

export function TopBar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 h-16 bg-bg-header/90 backdrop-blur border-b border-border shadow-topbar">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="font-display font-bold text-lg tracking-[2px] text-glow-gold text-gold">
            SUPERNOVA · LAB
          </div>
          <span className="text-text-vmuted">/</span>
          <span className="font-sub font-semibold text-text-secondary uppercase tracking-[2px] text-sm">
            Runiko Virtual Office
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="badge badge-active">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
            Demo en vivo
          </span>
          <span className="font-sub text-text-muted text-xs uppercase tracking-[2px] hidden md:inline">
            v0.1 · Abril 2026
          </span>
        </div>
      </div>
    </header>
  );
}
