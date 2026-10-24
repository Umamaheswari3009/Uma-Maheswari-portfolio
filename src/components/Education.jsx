import React from 'react';

export function Education({ education }) {
  return (
    <section id="education" className="py-16 sm:py-[88px] border-b border-border-soft">
      <div className="section-wrap">
        <div className="mb-11">
          <p className="eyebrow">05 — education</p>
          <h2 className="font-display font-semibold text-[28px] sm:text-[30px] text-text-primary">
            Education
          </h2>
        </div>

        <div className="flex flex-col">
          {education.map((item) => (
            <div
              key={item.school + item.years}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-5 border-b border-border-soft last:border-b-0"
            >
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-1">
                  {item.school}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base">
                  {item.degree}
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 whitespace-nowrap">
                <span className="font-mono text-[13px] text-text-muted">
                  {item.years}
                </span>
                <span className="font-mono text-[14px] text-accent font-semibold">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
