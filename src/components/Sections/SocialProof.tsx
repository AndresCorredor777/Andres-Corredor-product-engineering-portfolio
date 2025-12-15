import React from 'react';
import { FadeIn } from '../UI/FadeIn';

const Logo = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
    <div className="flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
        <img
            src={src}
            alt={alt}
            className={`h-12 w-auto object-contain mix-blend-multiply ${className}`}
        />
    </div>
);

export const SocialProof: React.FC = () => {
    return (
        <div className="border-b border-slate-200 bg-slate-50/50 py-12">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                <FadeIn delay={300}>
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-16">
                        <Logo src="ibm.png" alt="IBM" className="h-10" />
                        <Logo src="uniboyaca.jpeg" alt="Universidad de Boyacá" className="h-10" />
                        <Logo src="futuresense.jpg" alt="Future Sense Foundation" className="h-10" />
                        <Logo src="uemc.jpg" alt="Universidad Europea Miguel de Cervantes" className="h-10" />
                        <Logo src="ewb.jpg" alt="Engineers Without Borders" className="h-10" />
                        <Logo src="cafam.png" alt="Cafam" className="h-10" />
                        <Logo src="voxy.png" alt="Voxy" className="h-10" />
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};
