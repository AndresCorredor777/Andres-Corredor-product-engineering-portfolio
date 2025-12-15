import React from 'react';
import { Section } from '../UI/Section';
import { FadeIn } from '../UI/FadeIn';

export const Learning: React.FC = () => {
  return (
    <Section dark className="relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-50 pointer-events-none" />

      <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Adoption Engineering</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              A product only creates impact if it is understood and adopted. I leverage my background in education to treat <span className="text-white font-semibold">knowledge transfer as a system requirement</span>, not an afterthought.
            </p>
            <div className="flex gap-4">
               <div className="h-px flex-1 bg-slate-700 self-center"></div>
               <span className="text-xs font-mono text-slate-500 uppercase">Core Methodology</span>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">
          {[
            { title: 'System Deconstruction', desc: 'Breaking down complex architectures into digestible, logical components for stakeholders.' },
            { title: 'Technical Translation', desc: 'Bridging the vocabulary gap between engineering teams, product stakeholders, and end-users.' },
            { title: 'Scalable Documentation', desc: 'Creating clear, maintainable records that allow systems to scale independently of the creator.' },
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100} threshold={0.2}>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors duration-300 h-full">
                <div className="text-primary-500 font-mono text-xs mb-3">0{idx + 1}</div>
                <h3 className="font-bold text-white mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};