'use client';

import { useEffect, useRef } from 'react';

export default function OrangeOrb() {
  const orbRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let angleX = 0;
    let angleY = 0;

    const animate = () => {
      angleX += 0.008; // Juster for fart
      angleY += 0.005;

      const amplitudeX = window.innerWidth / 3;
      const amplitudeY = window.innerHeight / 3;

      const x = Math.sin(angleX) * amplitudeX + window.innerWidth / 2 - 64;
      const y = Math.cos(angleY) * amplitudeY + window.innerHeight / 2 - 64;

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
