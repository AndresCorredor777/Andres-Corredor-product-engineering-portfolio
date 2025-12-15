import React from 'react';
import { Section } from '../UI/Section';
import { FadeIn } from '../UI/FadeIn';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-baseline">
        <div className="md:col-span-4">
          <FadeIn direction="none">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Professional Profile</h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Engineer by training.<br />
              Product Manager by mindset.<br />
              Educator by nature.
            </p>
          </FadeIn>
        </div>

        <div className="md:col-span-8 space-y-8">
          <FadeIn delay={100}>
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed max-w-2xl font-medium">
              I translate technical complexity into usable, high-impact systems.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              With a foundation in mechatronics, I bridge the gap between technical feasibility and human desirability.
              My focus is singular: building resilient infrastructure and accessible products that solve tangible problems in underserved sectors.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="pl-6 border-l-2 border-primary-500 max-w-2xl">
              <p className="text-base text-slate-700 leading-relaxed font-medium italic">
                "Whether designing off-grid utilities or AI-driven interfaces, I apply rigorous systems thinking to manage complexity—ensuring the end-user experience remains simple, intuitive, and effective."
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};