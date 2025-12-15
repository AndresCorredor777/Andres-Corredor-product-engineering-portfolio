import React from 'react';
import { PROJECTS } from '../../constants';
import { Section } from '../UI/Section';
import { FadeIn } from '../UI/FadeIn';

const StageBadge = ({ stage }: { stage: string }) => {
  const styles: Record<string, string> = {
    Concept: 'text-slate-500 bg-slate-100 group-hover:bg-slate-200',
    Prototype: 'text-amber-700 bg-amber-50 group-hover:bg-amber-100',
    MVP: 'text-blue-700 bg-blue-50 group-hover:bg-blue-100',
    Pilot: 'text-indigo-700 bg-indigo-50 group-hover:bg-indigo-100',
    Live: 'text-emerald-700 bg-emerald-50 group-hover:bg-emerald-100',
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold uppercase transition-colors duration-300 ${styles[stage] || 'text-slate-600 bg-slate-100'}`}>
      {stage}
    </span>
  );
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <FadeIn>
        <div className="mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-700 uppercase bg-primary-50 rounded-full">
            Evidence of Ownership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-6">
            Selected Products & Systems
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Interdisciplinary work demonstrating the bridge between <span className="text-slate-900 font-medium">engineering rigor</span> and <span className="text-slate-900 font-medium">product strategy</span>.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-8">
        {PROJECTS.map((project, index) => (
          <FadeIn key={project.id} delay={index * 100}>
            <div className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 ease-out overflow-hidden hover:shadow-xl hover:-translate-y-1 relative">

              {/* Hover Reveal Image - Floating/Fixed */}
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/90 z-10"></div>
                {/* Use project-specific images if available, otherwise fallback */}
                {project.id === 'lingo' ? (
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <source src="lingo.mp4" type="video/mp4" />
                  </video>
                ) : project.id === 'mobile-unit' ? (
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <source src="mobile-unit.mp4" type="video/mp4" />
                  </video>
                ) : project.id === 'diagnostic-platform' ? (
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <source src="diagnostic-platform.mp4" type="video/mp4" />
                  </video>
                ) : project.id === 'robotic-hand' ? (
                  <img src="robotic-hand.jpg" alt={project.title} className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700" />
                ) : project.id === 'valle-stem' ? (
                  <img src="valle-stem.png" alt={project.title} className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700" />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <span className="text-4xl font-bold opacity-20">PREVIEW</span>
                  </div>
                )}
              </div>

              {/* Header */}
              <div className="px-6 py-5 md:px-8 md:py-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors group-hover:bg-slate-50 relative z-10">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">{project.title}</h3>
                  <StageBadge stage={project.stage} />
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <span className="hidden md:inline text-xs uppercase tracking-wider font-semibold text-slate-400">Domain</span>
                  <span className="text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded shadow-sm group-hover:border-slate-300 transition-colors font-semibold">{project.domain}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">

                {/* Left Column: Context & Responsibility */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">The Problem</h4>
                    <p className="text-slate-800 text-base leading-relaxed font-medium">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Role & Ownership</h4>
                    <p className="text-slate-900 font-semibold text-sm border-l-2 border-slate-200 pl-4 py-1 group-hover:border-primary-500 transition-colors duration-300">
                      {project.role}
                    </p>
                  </div>
                </div>

                {/* Right Column: Solution & Tech */}
                <div className="space-y-6 flex flex-col h-full">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Engineering Solution</h4>
                    <p className="text-slate-700 text-base leading-relaxed">{project.solution}</p>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded border border-slate-200 transition-colors group-hover:border-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Footer */}
              <div className="px-6 py-4 md:px-8 md:py-5 bg-slate-900 border-t border-slate-900 text-white flex flex-col md:flex-row items-start md:items-center gap-3 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
                <span className="text-xs font-bold text-primary-400 uppercase tracking-widest shrink-0 mt-1 md:mt-0 relative z-10">Outcome</span>
                <p className="text-sm md:text-base font-medium leading-normal relative z-10">{project.impact}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};