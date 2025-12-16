import React, { useState, useEffect } from 'react';
import { Button } from '../UI/Button';


export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl border-slate-200 py-3'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex items-center justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-lg tracking-tighter text-slate-900 cursor-pointer select-none group"
        >
          Andrés Corredor
        </div>

        <div className="hidden md:flex items-center gap-1">
          {['About', 'Projects', 'Skills'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100/50"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={() => {
            const link = document.createElement('a');
            link.href = `${import.meta.env.BASE_URL}Resume_Engineering_EN.pdf`;
            link.download = 'Resume_Engineering_EN.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }} className="hidden sm:inline-flex">
            Resume
          </Button>
          <Button variant="primary" size="sm" onClick={() => window.location.href = "mailto:andrescorredor345@gmail.com"}>
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};