import React from 'react';
import { DOMAINS } from '../../constants';
import { Section } from '../UI/Section';
import { FadeIn } from '../UI/FadeIn';

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round"/>,
    leaf: <path d="M12 2L12 22 M12 12 L20 4 M12 12 L4 4" strokeLinecap="round" strokeLinejoin="round"/>,
    heart: <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 3.2a8 8 0 0 1 8 6C20 16.5 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round"/>,
    building: <path d="M3 21h18M5 21V7l8-4 8 4v14" strokeLinecap="round" strokeLinejoin="round"/>,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      {icons[name] || null}
    </svg>
  );
};

export const Domains: React.FC = () => {
  return (
    <div className="bg-slate-50 border-y border-slate-200">
      <Section className="!py-20">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Impact Domains</h2>
            <p className="text-slate-500 font-medium md:text-right max-w-md">
              Applying technical systems to critical human infrastructure.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DOMAINS.map((domain, index) => (
            <FadeIn key={domain.id} delay={index * 50}>
              <div className="group p-6 bg-white rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{domain.name}</h3>
                  <div className="text-slate-400 group-hover:text-primary-600 transition-colors duration-300">
                    <Icon name={domain.iconName} className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{domain.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
};