import React from 'react';
import { METRICS } from '../../constants';
import { FadeIn } from '../UI/FadeIn';

export const Snapshot: React.FC = () => {
  return (
    <div className="border-y border-slate-200 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <FadeIn delay={200} threshold={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {METRICS.map((metric, index) => (
              <div key={index} className={`py-8 ${index % 2 === 0 ? 'pr-8 pl-0' : 'px-8'} md:px-8 first:pl-0 last:pr-0`}>
                <div className="flex flex-col h-full justify-between group">
                  <div className="font-mono text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {metric.value}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-0.5">
                      {metric.label}
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      {metric.subtext}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};