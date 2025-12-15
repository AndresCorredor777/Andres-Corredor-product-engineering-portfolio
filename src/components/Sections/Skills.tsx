import React from 'react';
import { SKILLS } from '../../constants';
import { Section } from '../UI/Section';
import { FadeIn } from '../UI/FadeIn';

export const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Technical Capabilities</h2>
          <div className="w-20 h-1 bg-slate-900"></div>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {SKILLS.map((cluster, index) => (
          <FadeIn key={cluster.category} delay={index * 50}>
            <div className="group">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 pb-2 border-b border-slate-200 group-hover:border-slate-900 transition-colors duration-300">
                {cluster.category}
              </h3>
              <ul className="space-y-3">
                {cluster.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3 group-hover:bg-primary-600 transition-colors duration-300"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};