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
      angleX += 0.008;
      angleY += 0.006;

      const amplitudeX = window.innerWidth / 4;
      const amplitudeY = window.innerHeight / 4;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const x = centerX + amplitudeX * Math.cos(angleX) - 64;
      const y = centerY + amplitudeY * Math.sin(angleY) - 64;

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
