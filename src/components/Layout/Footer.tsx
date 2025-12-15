import React from 'react';
import { Button } from '../UI/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-24">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-8">
          Ready to discuss impact?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <Button variant="primary" size="lg" onClick={() => window.location.href = 'mailto:andrescorredor345@gmail.com'} className="bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg shadow-lg shadow-slate-900/20">
            Start a Conversation
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4 text-slate-400 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Andres Corredor Portfolio all rights reserved</p>
          <div className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-500">
            Built for speed and clarity
          </div>
        </div>
      </div>
    </footer>
  );
};