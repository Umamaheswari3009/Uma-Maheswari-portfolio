import React from 'react';

export function Skills({ skills }) {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-16 sm:py-[88px] border-b border-border-soft">
      <div className="section-wrap">
        <div className="mb-11">
          <p className="eyebrow">01 — skills</p>
          <h2 className="font-display font-semibold text-[28px] sm:text-[30px] text-text-primary">
            What I work with
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(([category, items]) => {
            const isCore = category === "MERN Stack";
            return (
              <div
                key={category}
                className={`rounded-xl p-5 border transition ${
                  isCore
                    ? "bg-accent/[0.06] border-accent/40 shadow-[0_0_20px_rgba(94,234,212,0.06)]"
                    : "bg-surface border-border-soft hover:border-border"
                }`}
              >
                <h3 className="text-[15px] font-medium text-text-primary mb-3.5 flex items-center gap-2">
                  <span>{category}</span>
                  {isCore && (
                    <span className="font-mono text-[10px] text-accent border border-accent/40 rounded px-1.5 py-0.5 uppercase tracking-wider">
                      core stack
                    </span>
                  )}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
