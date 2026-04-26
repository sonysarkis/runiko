"use client";

export function TopBar() {
  return (
    <header className="sticky md:absolute top-0 left-0 right-0 z-30 bg-bg-header/95 backdrop-blur border-b border-border shadow-topbar">
      <div className="px-4 md:px-6 py-3 md:py-0 md:h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
          <div className="font-display font-bold text-sm md:text-lg tracking-[2px] text-glow-gold text-gold whitespace-nowrap">
            SUPERNOVA · LAB
          </div>
          <span className="text-text-vmuted hidden sm:inline">/</span>
          <span className="font-sub font-semibold text-text-secondary uppercase tracking-[2px] text-[10px] md:text-sm hidden sm:inline whitespace-nowrap">
            Runiko Virtual Office
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <span className="badge badge-active text-[10px] md:text-xs">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
            <span className="hidden sm:inline">Demo en vivo</span>
            <span className="sm:hidden">Live</span>
          </span>
          <span className="font-sub text-text-muted text-xs uppercase tracking-[2px] hidden lg:inline">
            v0.1 · Abril 2026
          </span>
        </div>
      </div>
    </header>
  );
}
