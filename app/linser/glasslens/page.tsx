'use client';

import { useRef, useEffect, useState } from 'react';

export default function Glasslens() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  const width = 700;
  const height = 700;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const video = videoRef.current;

    if (!canvas || !context || !video) return;

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      video.srcObject = stream;
      video.play();

      const draw = () => {
        const tileCount = 7;
        const gapX = 0.1;
        const gapY = 1;
        const tileWidth = (width - (tileCount - 2) * gapX) / tileCount;
        const tileHeight = (height - (tileCount - 2) * gapY) / tileCount;

        for (let row = 0; row < tileCount; row++) {
          for (let col = 0; col < tileCount; col++) {
            const x = col * (tileWidth + gapX);
            const y = row * (tileHeight + gapY);
            context.drawImage(video, 0, 0, width, height, x, y, tileWidth, tileHeight);
          }
        }

        requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);
    });
  }, []);

  const toggleRecording = () => {
    if (!recording) {
      const stream = canvasRef.current?.captureStream();
      if (!stream) return;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks: Blob[] = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'glasslens-recording.webm';
        a.click();
        URL.revokeObjectURL(url);
      };

      mediaRecorder.start();
      setRecordedChunks([]);
      setRecording(true);
    } else {
      mediaRecorderRef.current?.stop();
      setRecording(false);
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/glass-background.jpg')",
      }}
    >
      {/* Tilbake-knapp */}
    <Link href="/linser">
      <button className="absolute top-6 left-6 px-4 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition z-50">
        ← Tilbake
      </button>
    </Link>
      <div className="relative">
        <canvas ref={canvasRef} width={width} height={height} className="rounded-xl" />
        <video ref={videoRef} className="hidden" />

        <button
          onClick={toggleRecording}
          className="absolute top-1/2 -translate-y-1/2 -left-20 w-14 h-14 rounded-full bg-red-600 border-4 border-white shadow-lg hover:bg-red-700 transition"
          title="Start/Stop opptak"
        />
      </div>
    </main>
  );
}
