'use client';

import { useState, useEffect, useRef } from 'react';

const LaptopAnimation = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        
        const newProgress = (screenHeight - top) / (screenHeight + height);
        setProgress(Math.max(0, Math.min(1, newProgress)));
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const numParticles = 150;
  const radius = 250;

  const parallaxOffset = (progress - 0.5) * 350;

  return (
    <div ref={containerRef} style={{ 
        width: '100%', 
        height: '500px', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    }}>
      <div style={{ 
        position: 'relative', 
        width: '1px', 
        height: '1px',
        transform: `translateY(${parallaxOffset}px) rotate(${progress * 180}deg)`,
      }}>
        {[...Array(numParticles)].map((_, i) => {
          const phi = Math.acos(1 - 2 * (i + 0.5) / numParticles);
          const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

          const x3d = radius * Math.cos(theta) * Math.sin(phi);
          const y3d = radius * Math.sin(theta) * Math.sin(phi);
          const z3d = radius * Math.cos(phi);

          const perspective = 1.5;
          const scaleFactor = perspective / (perspective - z3d / radius);
          
          const x2d = x3d * scaleFactor;
          const y2d = y3d * scaleFactor;

          const startX = ( (i / numParticles - 0.5) * 2 ) * (radius * 2);
          const startY = ( ( ((i*41) % numParticles) / numParticles - 0.5) * 2) * (radius * 2);

          const easeProgress = 1 - Math.pow(1 - progress, 3);

          const currentX = (1 - easeProgress) * startX + easeProgress * x2d;
          const currentY = (1 - easeProgress) * startY + easeProgress * y2d;

          const finalScale = (scaleFactor * 0.5 + 0.5) * easeProgress;
          const opacity = easeProgress;
          
          const hue = (theta * 10) + (progress * 120);

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '8px',
                height: '8px',
                background: `hsl(${hue}, 80%, 70%)`,
                borderRadius: '50%',
                transform: `translate(${currentX}px, ${currentY}px) scale(${finalScale})`,
                opacity: opacity,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LaptopAnimation;
