'use client';

import { useEffect, useRef } from 'react';

export default function FloatingOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    const moveOrb = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const orbSize = 100; // Samme som i stil

      const x = Math.random() * (screenWidth - orbSize);
      const y = Math.random() * (screenHeight - orbSize);

      orb.style.transform = `translate(${x}px, ${y}px)`;
    };

    const interval = setInterval(moveOrb, 3000); // Flytt hvert 3. sekund
    moveOrb(); // Start med en gang

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={orbRef}
      className="w-[100px] h-[100px] bg-[url('/orb.png')] bg-cover bg-no-repeat rounded-full absolute pointer-events-none"
      style={{
        transition: 'transform 2s ease-in-out'
      }}
    ></div>
  );
}
