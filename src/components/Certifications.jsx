import React from 'react';

export function Certifications({ certifications }) {
  return (
    <section id="certifications" className="py-16 sm:py-[88px] border-b border-border-soft">
      <div className="section-wrap">
        <div className="mb-11">
          <p className="eyebrow">04 — certifications</p>
          <h2 className="font-display font-semibold text-[28px] sm:text-[30px] text-text-primary">
            Certifications and workshops
          </h2>
        </div>

        <ul className="flex flex-col gap-4">
          {certifications.map((item, idx) => (
            <li
              key={idx}
              className="text-text-secondary text-sm sm:text-[15px] leading-relaxed pl-6 relative hover:text-text-primary transition"
            >
              <span className="absolute left-0 text-accent font-bold">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
