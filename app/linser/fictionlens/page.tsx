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

              // UI-overlay: tekst, dato osv.
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
    <main className="min-h-screen bg-[#0033A0] text-white p-10 flex flex-col items-center">
      <div
        className="relative"
        style={{
          width: '870px',
          height: '500px',
        }}
      >
        {/* Videofeed */}
        <canvas
          ref={canvasRef}
          width={494}
          height={356}
          className="absolute"
          style={{
            top: '72px',
            left: '64px',
            width: '494px',
            height: '356px',
            borderRadius: '4px',
          }}
        />

        {/* Kamera-overlegg */}
        <img
          src="/kamera.png"
          alt="Digitalkamera-ramme"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />

        {/* Skjult videoelement */}
        <video ref={videoRef} autoPlay playsInline className="hidden" />
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
