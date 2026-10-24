import React from 'react';

const NAV_LINKS = [
  ["skills", "skills"],
  ["experience", "experience"],
  ["projects", "projects"],
  ["certifications", "certifications"],
  ["education", "education"],
  ["contact", "contact"],
];

export function Navbar({ profile }) {
  return (
    <header className="sticky top-0 z-20 bg-bg/85 backdrop-blur-sm border-b border-border-soft">
      <div className="section-wrap flex items-center justify-between h-[68px]">
        <a href="#top" className="font-display font-bold text-xl text-text-primary no-underline hover:opacity-90 transition">
          UM<span className="text-accent">.</span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-6 flex-wrap justify-end">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={`#${href}`}
              className="font-mono text-xs sm:text-sm text-text-secondary no-underline transition hover:text-accent capitalize"
            >
              {label}
            </a>
          ))}
          <a
            href={profile.resumeUrl || "/resume.pdf"}
            download="Uma_Maheswari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs sm:text-sm text-accent no-underline border border-border rounded-md px-3 py-1.5 transition hover:border-accent hover:bg-accent/10 whitespace-nowrap"
          >
            resume ↓
          </a>
        </nav>
      </div>
    </header>
  );
}
