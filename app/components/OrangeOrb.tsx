'use client';

import { useEffect, useRef } from 'react';

export default function OrangeOrb() {
  const orbRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let angle = 0;

    const animate = () => {
      angle += 0.01; // Juster farten på bevegelsen

      const radius = 120; // Hvor stor sirkel den beveger seg i
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const x = centerX + radius * Math.cos(angle) - 64; // 64 = halvparten av bredden
      const y = centerY + radius * Math.sin(angle) - 64; // 64 = halvparten av høyden

      orb.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <img
      ref={orbRef}
      src="/oransje-orb.png"
      alt="Oransje Planet"
      className="pointer-events-none fixed w-32 h-32 z-10"
    />
  );
}
