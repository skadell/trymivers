'use client';

import FloatingOrb from './components/FloatingOrb';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <FloatingOrb />
      <main className="min-h-screen bg-[#0033A0] text-white p-10 flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-bold">Velkommen til Trymivers</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/Musikk">
            <button className="px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full hover:bg-gray-200 transition">
              Musikk
            </button>
          </Link>
          <Link href="/linser">
            <button className="px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full hover:bg-gray-200 transition">
              Linser
            </button>
          </Link>
          <Link href="/tekst">
            <button className="px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full hover:bg-gray-200 transition">
              Tekst
            </button>
          </Link>
          <Link href="/bilder">
            <button className="px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full hover:bg-gray-200 transition">
              Bilder
            </button>
          </Link>
        </div>
        <img
          src="/fanzine-v-2.png"
          alt="Trym"
          className="w-64 rounded-lg shadow-lg"
        />
      </main>
    </>
  );
}
