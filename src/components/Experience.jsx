import React from 'react';

export function Experience({ experience }) {
  return (
    <section id="experience" className="py-16 sm:py-[88px] border-b border-border-soft">
      <div className="section-wrap">
        <div className="mb-11">
          <p className="eyebrow">02 — experience</p>
          <h2 className="font-display font-semibold text-[28px] sm:text-[30px] text-text-primary">
            Internship experience
          </h2>
        </div>

        <div className="relative pl-7 border-l border-border ml-2 sm:ml-4">
          {experience.map((exp, index) => {
            const isLast = index === experience.length - 1;
            return (
              <div
                key={exp.role + exp.period}
                className={isLast ? "relative" : "pb-10 relative"}
              >
                {/* Glowing timeline dot */}
                <span className="absolute -ml-[35px] mt-1.5 w-3 h-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(94,234,212,0.18)]" />
                
                <h3 className="text-[17px] font-semibold text-text-primary mb-1">
                  {exp.role}
                </h3>
                <p className="text-text-secondary text-sm font-medium mb-1">
                  {exp.company}
                </p>
                <p className="font-mono text-[12.5px] text-accent-warm mb-3.5">
                  {exp.period}
                </p>
                
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-text-secondary text-[14px] leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 text-accent font-bold">–</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
