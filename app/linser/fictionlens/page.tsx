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
        <button className="text-white text-lg mb-6 hover:underline absolute top-4 left-4 z-10">← Tilbake</button>
      </Link>

      <div className="relative mx-auto mt-10 w-[870px] h-[500px] md:w-[870px] md:h-[500px]" style={{ maxWidth: '100%' }}>
        <canvas
          ref={canvasRef}
          width={494}
          height={356}
          className="absolute top-[138px] left-[127px] w-[494px] h-[356px] md:top-[275px] md:left-[127px] md:w-[494px] md:h-[356px]"
        />
        <video ref={videoRef} autoPlay playsInline className="hidden" />
        <img
          src="/kamera.png"
          alt="Digitalkamera-ramme"
          className="absolute top-0 left-0 w-full h-auto pointer-events-none"
        />
      </div>

      <div className="mt-6 md:mt-12 w-full flex justify-center">
        <button
          onClick={takeSnapshot}
          className="px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full shadow hover:bg-gray-200 transition"
        >
          Ta bilde
        </button>
      </div>

      {imageDataUrl && (
        <div className="absolute bottom-2 w-full flex justify-center">
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
