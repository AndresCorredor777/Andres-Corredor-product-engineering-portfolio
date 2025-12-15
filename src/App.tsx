import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { Snapshot } from './components/Sections/Snapshot';
import { SocialProof } from './components/Sections/SocialProof';
import { About } from './components/Sections/About';
import { Domains } from './components/Sections/Domains';
import { Projects } from './components/Sections/Projects';
import { Learning } from './components/Sections/Learning';
import { Skills } from './components/Sections/Skills';
import { Footer } from './components/Layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Snapshot />
        <SocialProof />
        <About />
        <Domains />
        <Projects />
        <Learning />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;