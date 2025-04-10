import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Navigasjonsknapper */}
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-[#0033A0]">
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

      {/* Hovedinnhold */}
      <main className="min-h-screen bg-[#0033A0] text-white p-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="/fanzine-v-2.png"
          alt="Trym"
          className="w-64 rounded-lg shadow-lg relative -top-30 -left-20"        />
        
        <div className="relative -top-40">
          <h1 className="text-4xl font-bold mb-4">Velkommen til Trymivers</h1>
          <p className="text-lg max-w-md">
            Utforsk mine kreative prosjekter innen musikk, tekst, bilder og mer.
            Dette er et personlig univers – et zine – kuratert og bygget med kjærlighet.
          </p>
        </div>
      </main>
    </>
  );
}
