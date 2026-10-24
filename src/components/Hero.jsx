import React from 'react';
import { Avatar } from './Avatar';

export function Hero({ profile }) {
  return (
    <section id="top" className="pt-16 pb-14 border-b border-border-soft">
      <div className="section-wrap grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-14 items-start">
        <div className="order-2 md:order-1">
          <p className="eyebrow">whoami</p>
          <h1 className="font-display font-semibold text-4xl sm:text-[44px] leading-[1.1] text-text-primary mb-2.5">
            {profile.name}
          </h1>
          <p className="font-mono text-accent-warm text-base mb-5">
            {profile.title}
          </p>
          <p className="text-text-secondary text-base max-w-[54ch] mb-7 leading-relaxed">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-3.5 mb-10">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              View GitHub
            </a>
            <a
              href={profile.resumeUrl || "/resume.pdf"}
              download="Uma_Maheswari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Download resume
            </a>
          </div>

          <div className="bg-surface border border-border rounded-xl overflow-hidden max-w-[420px] shadow-sm">
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-surface-raised border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f2555a]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f4bf4f]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4fce6b]" />
              <span className="ml-1.5 font-mono text-xs text-text-muted">contact.sh</span>
            </div>
            <div className="px-4.5 py-4 font-mono text-[13.5px]">
              <p className="mb-1.5 text-text-primary">
                <span className="text-accent mr-1.5">$</span> echo $EMAIL
              </p>
              <p className="text-text-secondary mb-3.5 pl-4 break-all">
                {profile.email}
              </p>
              <p className="mb-1.5 text-text-primary">
                <span className="text-accent mr-1.5">$</span> echo $PHONE
              </p>
              <p className="text-text-secondary mb-0 pl-4">
                {profile.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
