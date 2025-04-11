// Filnavn: app/linser/glasslens/page.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function GlassLens() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const video = videoRef.current;

    if (!canvas || !context || !video) return;

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;
      video.play();

      const tileSize = 50;
      const cols = 10;
      const rows = 10;

      const draw = () => {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          context.clearRect(0, 0, canvas.width, canvas.height);

          for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
              context.save();
              context.beginPath();
              context.rect(x * tileSize, y * tileSize, tileSize, tileSize);
              context.clip();
              context.filter = 'blur(1px)';
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
              context.restore();
            }
          }
        }
        requestAnimationFrame(draw);
      };

      draw();
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#0033A0] flex flex-col items-center justify-center">
      <div className="relative">
        <canvas ref={canvasRef} width={500} height={500} className="rounded-lg shadow-lg" />
        <video ref={videoRef} className="hidden" />
      </div>
    </main>
  );
}
