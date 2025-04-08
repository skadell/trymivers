'use client';

import { useEffect, useRef } from 'react';

export default function Fictionlens() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error('Kamera-feil:', err);
        });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0033A0] text-white p-10">
      <h1 className="text-4xl font-bold mb-6">🎥 Fictionlens</h1>
      <p className="mb-4 text-lg max-w-xl">
        En imaginær linse som gjør alt du ser til en scene i en film.<br />
        Her får du se verden som fiksjon.
      </p>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full max-w-md mt-8 rounded-lg shadow-xl border-4 border-white"
      />
    </main>
  );
}
