'use client';

import { useEffect, useRef } from 'react';

export default function FloatingOrb() {
  const orbRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
     const orb = orbRef.current;
    if (!orb) return;
    
    let angle = 0;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;    
    
    const animate = () => {
      angle += 0.01;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      orb.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={orbRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '160px',        // Økt fra 100px
        height: '160px',       // Økt fra 100px
        borderRadius: '50%',
        backgroundImage: 'url(/orb.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 1,            // Full opasitet
        zIndex: 10,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 0 20px rgba(0, 174, 255, 0.7))'
      }}
    />
  );
}
