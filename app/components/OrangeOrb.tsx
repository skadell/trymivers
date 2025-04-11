'use client';

import { useEffect, useRef } from 'react';

export default function OrangeOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    orb.style.transform = 'translate(0px, 0px)';

    const moveOrb = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Juster området slik at den beveger seg i et annet mønster
      const maxX = screenWidth / 2 - 100;
      const maxY = screenHeight / 2 - 100;
      const minX = -screenWidth / 2 + 100;
      const minY = -screenHeight / 2 + 100;

      const randomX = Math.floor(Math.random() * (maxX - minX) + minX + 40); //  +40 forskyvning
      const randomY = Math.floor(Math.random() * (maxY - minY) + minY - 20); // -20 forskyvning

      orb.style.transition = 'transform 5.5s ease-in-out';
      orb.style.transform = `translate(${randomX}px, ${randomY}px)`;
    };

    const interval = setInterval(moveOrb, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed top-[60%] left-[70%] w-[160px] h-[160px] rounded-full z-10 pointer-events-none"
      style={{
        transform: 'translate(-50%, -50%)',
        backgroundImage: 'url(/oransje-orb.png)',
        backgroundSize: 'cover',
        filter: 'drop-shadow(0 0 12px rgba(255, 130, 0, 0.6))',
      }}
    />
  );
}
