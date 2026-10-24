import React from 'react';
import { GithubIcon, ExternalLinkIcon } from './Icons';

export function Projects({ projects }) {
  return (
    <section id="projects" className="py-16 sm:py-[88px] border-b border-border-soft">
      <div className="section-wrap">
        <div className="mb-11">
          <p className="eyebrow">03 — projects</p>
          <h2 className="font-display font-semibold text-[28px] sm:text-[30px] text-text-primary">
            Things I've built
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <article
              key={proj.title}
              className="bg-surface border border-border-soft rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:border-accent-dim hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <h3 className="text-[18px] font-semibold leading-snug text-text-primary mb-3">
                  {proj.title}
                </h3>
                
                {/* Increased font size for project description as requested */}
                <p className="text-text-primary/90 text-[15.5px] leading-relaxed mb-4">
                  {proj.description}
                </p>

                <ul className="mb-5 space-y-2">
                  {proj.bullets.map((bullet, idx) => (
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

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tag tag-outline text-[12px] px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explicit, dedicated Deployed Link and GitHub Repository Link */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-soft">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${proj.title} on GitHub`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-raised border border-border text-text-primary font-mono text-[12.5px] no-underline hover:border-accent hover:text-accent transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-text-secondary" />
                    <span>Repository</span>
                  </a>

                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${proj.title} live demo`}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/15 border border-accent/40 text-accent font-mono text-[12.5px] font-medium no-underline hover:bg-accent hover:text-[#08201b] transition"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
