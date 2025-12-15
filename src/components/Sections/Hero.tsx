import React from 'react';
import { Button } from '../UI/Button';
import { HeroBackground } from '../UI/HeroBackground';
import { FadeIn } from '../UI/FadeIn';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/30">
      {/* Dynamic System Background */}
      <HeroBackground />

      {/* Static gradient overlays for depth */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-[-1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-[-1]" />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-16">
          <div className="max-w-4xl flex-1 order-1">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-8 text-xs font-mono font-medium tracking-wide text-slate-600 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-md shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                AVAILABLE FOR PRODUCT & ENGINEERING LEADERSHIP
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter leading-[1.05] mb-8">
                Engineering Resilience. <br className="hidden md:block" />
                Product Clarity. <br className="hidden md:block" />
                <span className="text-slate-500">Real-World Impact.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-2xl leading-relaxed font-normal">
                I design systems that work under real constraints, for real people.
              </p>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed font-light">
                Mechatronics Engineer & Product Manager specializing in human-centered technology for Education, Environment, Health, and Infrastructure.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button variant="primary" size="lg" onClick={scrollToProjects} className="w-full sm:w-auto shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-all transform hover:-translate-y-0.5">
                  Review Products & Systems
                </Button>
                <div className="hidden sm:block text-slate-300 mx-2">|</div>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
                  <span>Systems Thinking</span>
                  <span className="text-slate-300">•</span>
                  <span>Product Strategy</span>
                  <span className="text-slate-300">•</span>
                  <span>Operational Rigor</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-auto flex justify-start md:justify-end order-2 mt-8 md:mt-0 md:pl-8">
            <FadeIn delay={400}>
              <div className="relative">
                <img
                  src="profile.png"
                  alt="Portrait of Andres Corredor, Mechatronics Engineer and Product Manager"
                  className="w-48 md:w-60 rounded-2xl grayscale-[0.15] opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-out shadow-sm object-cover"
                  width="240"
                  height="240"
                  loading="eager"
                />
                {/* Subtle border ring for engineered feel */}
                <div className="absolute inset-0 rounded-2xl border border-slate-900/5 pointer-events-none"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};