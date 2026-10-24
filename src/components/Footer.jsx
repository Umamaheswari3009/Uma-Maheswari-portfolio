import React from 'react';

export function Footer({ profile }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-7 pb-10 border-t border-border-soft">
      <div className="section-wrap flex flex-wrap justify-between items-center gap-2 text-[13px] text-text-muted">
        <span>© {currentYear} {profile.name}</span>
        <span className="font-mono text-xs">built with react + tailwind + python</span>
      </div>
    </footer>
  );
}
