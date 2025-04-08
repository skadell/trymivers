'use client';

import { useEffect, useRef, useState } from 'react';

export default function Fictionlens() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }

          const draw = () => {
            if (videoRef.current && canvas && context) {
              context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

              // UI-tekst og datostempel
              context.font = '16px monospace';
              context.fillStyle = '#FFCC00';
              context.fillText('11.02.2000', 10, canvas.height - 10);
              context.fillStyle = '#00FF00';
              context.fillText('PLAY', 10, 20);
              context.fillText('BATTERY ▓▓▓', canvas.width - 100, 20);
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

  const takeSnapshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    setImageDataUrl(dataUrl);

    // Spill av lyd senere: new Audio('/camera-shutter.wav').play();
  };

  return (
    <main className="min-h-screen bg-[#0033A0] text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">📸 Fictionlens</h1>
      <p className="mb-4 text-lg max-w-xl text-center">
        Et interaktivt digitalkamera-filter. Ta et bilde og last det ned — med ekte 2000-talls-vibe.
      </p>

      <div className="relative w-full max-w-md border-4 border-gray-300 rounded-xl bg-[#d4d4d4] shadow-lg">
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          className="w-full h-auto rounded-xl"
        />
        <video ref={videoRef} autoPlay playsInline className="hidden" />

        {/* Fake logo */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-black font-semibold tracking-wide">
          Trymix DC3000
        </div>
      </div>

      <button
        onClick={takeSnapshot}
        className="mt-6 px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full shadow hover:bg-gray-200 transition"
      >
        Ta bilde
      </button>

      {imageDataUrl && (
        <a
          href={imageDataUrl}
          download="fictionlens-bilde.png"
          className="mt-4 underline text-sm hover:text-gray-300"
        >
          Last ned bilde
        </a>
      )}
    </main>
  );
} 
