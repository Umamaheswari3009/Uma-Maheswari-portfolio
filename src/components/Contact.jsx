import React, { useState } from 'react';

export function Contact({ profile }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error('Submission failed');
      }
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'bg-surface border border-border rounded-md px-3.5 py-3 text-text-primary font-body text-[14.5px] placeholder:text-text-muted focus:outline-none focus:border-accent transition';

  return (
    <section id="contact" className="py-16 sm:py-[88px]">
      <div className="section-wrap">
        <div className="mb-11">
          <p className="eyebrow">06 — contact</p>
          <h2 className="font-display font-semibold text-[28px] sm:text-[30px] text-text-primary">
            Let's work together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 sm:gap-12">
          <div className="flex flex-col gap-3.5 font-mono text-[15px]">
            <p>
              <a
                href={`mailto:${profile.email}`}
                className="text-text-primary no-underline hover:text-accent transition break-all"
              >
                {profile.email}
              </a>
            </p>
            <p className="text-text-primary">{profile.phone}</p>
            <p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary no-underline hover:text-accent transition"
              >
                LinkedIn ↗
              </a>
            </p>
            <p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary no-underline hover:text-accent transition"
              >
                GitHub ↗
              </a>
            </p>
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputClass} resize-y`}
            />
            <button
              type="submit"
              className="btn btn-primary self-start mt-1"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <p className="font-mono text-[12.5px] text-accent mt-1">
                Thanks — your message has been received.
              </p>
            )}

            {status === 'error' && (
              <p className="font-mono text-[12.5px] text-accent-warm mt-1 leading-relaxed">
                Couldn't reach the server. Start the Flask backend (<code>python app.py</code>) and try again, or email directly at{' '}
                <a href={`mailto:${profile.email}`} className="underline">
                  {profile.email}
                </a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
