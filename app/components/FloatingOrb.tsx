'use client';

import { useEffect, useRef } from 'react';

export default function FloatingOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    // Startposisjon midt på skjermen
    orb.style.transform = 'translate(0px, 0px)';

    const moveOrb = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Begrenset område for bevegelse
      const maxX = screenWidth / 2 - 100;
      const maxY = screenHeight / 2 - 100;
      const minX = -screenWidth / 2 + 100;
      const minY = -screenHeight / 2 + 100;

      const randomX = Math.floor(Math.random() * (maxX - minX) + minX);
      const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

      orb.style.transition = 'transform 1s ease-in-out';
      orb.style.transform = `translate(${randomX}px, ${randomY}px)`;
    };

    const interval = setInterval(moveOrb, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed top-1/2 left-1/2 w-[160px] h-[160px] rounded-full z-20 pointer-events-none"
      style={{
        transform: 'translate(-50%, -50%)',
        backgroundImage: 'url(/orb.png)',
        backgroundSize: 'cover',
        filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.6))'
      }}
    />
  );
}
