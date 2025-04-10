'use client';

import { useEffect, useRef } from 'react';

export default function FloatingOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let angle = 0;
    const centerX = window.innerWidth / 2 - 80;
    const centerY = window.innerHeight / 2 - 80;
    const radius = 200; // ← Her er radius nå definert!

    const animate = () => {
      angle += 0.01;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      orb.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed top-0 left-0 w-40 h-40 z-10"
      style={{
        backgroundImage: "url('/orb.png')",
        backgroundSize: 'cover',
        filter: 'drop-shadow(0 0 12px #fff)',
        opacity: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
