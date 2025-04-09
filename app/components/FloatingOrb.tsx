'use client';

import { useEffect, useRef } from 'react';

export default function FloatingOrb() {
  const orbRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let angle = 0;

    const animate = () => {
      angle += 0.01;
      const x = Math.cos(angle) * 50;
      const y = Math.sin(angle) * 30;

      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <img
      ref={orbRef}
      src="/orb.png"
      alt="Svevende kule"
      className="pointer-events-none fixed top-10 left-10 w-32 h-32 z-0 opacity-80 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
    />
  );
}
