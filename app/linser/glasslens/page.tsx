'use client';

import { useRef, useEffect } from 'react';

export default function Glasslens() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const width = 500;
  const height = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const video = videoRef.current;

    if (!canvas || !context || !video) return;

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;
      video.play();

      const draw = () => {
        const tileCount = 10;
        const gap = 2;
        const tileWidth = (width - (tileCount - 1) * gap) / tileCount;
        const tileHeight = (height - (tileCount - 1) * gap) / tileCount;

        for (let row = 0; row < tileCount; row++) {
          for (let col = 0; col < tileCount; col++) {
            const x = col * (tileWidth + gap);
            const y = row * (tileHeight + gap);

            context.drawImage(video, 0, 0, width, height, x, y, tileWidth, tileHeight);
          }
        }

        requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#0033A0] flex items-center justify-center">
      <div>
        <canvas ref={canvasRef} width={width} height={height} className="rounded-xl" />
        <video ref={videoRef} className="hidden" />
      </div>
    </main>
  );
}
