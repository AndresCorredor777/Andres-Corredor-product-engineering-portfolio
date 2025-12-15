import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${dark ? 'bg-slate-900 text-white' : 'bg-transparent text-slate-900'} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};