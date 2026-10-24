import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [profile, setProfile] = useState(portfolioData);

  useEffect(() => {
    fetch('/api/profile')
      .then((res) => {
        if (!res.ok) throw new Error('backend not available');
        return res.json();
      })
      .then((data) => setProfile(data))
      .catch(() => {
        // Silently retain built-in portfolioData
      });
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text-primary font-body selection:bg-accent/20 selection:text-accent">
      <Navbar profile={profile} />
      <main>
        <Hero profile={profile} />
        <Skills skills={profile.skills} />
        <Experience experience={profile.experience} />
        <Projects projects={profile.projects} />
        <Certifications certifications={profile.certifications} />
        <Education education={profile.education} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
