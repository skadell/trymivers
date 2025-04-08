'use client';

import { useEffect, useRef } from 'react';

export default function Fictionlens() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }

          const canvas = canvasRef.current;
          const context = canvas?.getContext('2d');

          const draw = () => {
            if (videoRef.current && context && canvas) {
              context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

              context.font = '16px monospace';
              context.fillStyle = '#FFCC00';
              context.fillText('11.02.2000', 10, canvas.height - 10);
            }
            requestAnimationFrame(draw);
          };

          requestAnimationFrame(draw);
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
      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        className="w-full max-w-md mt-8 rounded-lg shadow-xl border-4 border-white"
      />
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="hidden"
      />
    </main>
  );
}
