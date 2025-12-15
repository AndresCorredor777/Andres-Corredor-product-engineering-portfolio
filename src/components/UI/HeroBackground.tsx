import React, { useEffect, useRef } from 'react';

export const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let points: { x: number; y: number; vx: number; vy: number }[] = [];
    
    // Config for "calm" system feel
    const config = {
      pointCountFactor: 9000, // Higher = fewer points (density control)
      connectionDistance: 180,
      baseVelocity: 0.15, // Very slow movement
      pointColor: 'rgba(148, 163, 184, 0.5)', // slate-400
      lineColor: 'rgba(148, 163, 184, 0.15)', // Very subtle lines
    };

    const initPoints = () => {
      const { width, height } = canvas;
      // Calculate number of points based on screen area to maintain consistent density
      const numPoints = Math.floor((width * height) / config.pointCountFactor);
      
      points = [];
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * config.baseVelocity,
          vy: (Math.random() - 0.5) * config.baseVelocity,
        });
      }
    };

    const resize = () => {
      // Set actual canvas size to avoid blurring
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initPoints();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { width, height } = canvas;

      // Draw connections first (behind points)
      ctx.beginPath();
      ctx.strokeStyle = config.lineColor;
      
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        
        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Soft bounce off edges
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Check connections
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < config.connectionDistance * config.connectionDistance) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();

      // Draw points
      ctx.fillStyle = config.pointColor;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Initialize
    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-[-1] pointer-events-none opacity-100"
      aria-hidden="true"
    />
  );
};