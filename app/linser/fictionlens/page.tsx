'use client';

import Link from 'next/link';
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
  };

  return (
    <main className="min-h-screen bg-[#0033A0] text-white p-0 m-0 relative overflow-hidden">
      <Link href="/linser">
        <button className="text-white text-lg mb-6 hover:underline absolute top-4 left-4 z-10">
          ← Tilbake
        </button>
      </Link>

      {/* Wrapper som skaleres etter skjermstørrelse */}
      <div className="relative w-full max-w-[870px] aspect-[870/500] mx-auto">
        {/* Webkamera-bildet */}
        <canvas
          ref={canvasRef}
          className="absolute top-[27%] left-[14.5%]"
          width={494}
          height={356}
          style={{ width: '71.5%', height: '62%' }}
        />

        {/* Skjult video */}
        <video ref={videoRef} autoPlay playsInline className="hidden" />

        {/* Digitalkameraramme */}
        <img
          src="/kamera.png"
          alt="Digitalkamera-ramme"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      </div>

      {/* Ta bilde-knapp */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={takeSnapshot}
          className="px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full shadow hover:bg-gray-200 transition"
        >
          Ta bilde
        </button>
      </div>

      {/* Last ned-lenke */}
      {imageDataUrl && (
        <div className="mt-4 flex justify-center">
          <a
            href={imageDataUrl}
            download="fictionlens-bilde.png"
            className="underline text-sm hover:text-gray-300"
          >
            Last ned bilde
          </a>
        </div>
      )}
    </main>
  );
}
