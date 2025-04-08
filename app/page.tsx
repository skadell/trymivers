import Link from 'next/link';

export default function Home() {
   {/* Knappene ligger nå øverst */}
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
        </Link>  return (
<main className="min-h-screen bg-[#0033A0] text-white p-10 flex flex-col md:flex-row-reverse items-center justify-center gap-10">
      </div>
      {/* Innhold under knappene */}
      <div className="max-w-xl text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Trymivers</h1>
        <p className="text-lg leading-relaxed">
          Et levende arkiv av impulser, uttrykk og digitale drypp fra under overflaten. <br />
          Her finner du fragmenter av lyd, tekst, bilder og idéer – alt filtrert gjennom ett og samme blikk. <br />
          Du trenger ikke forstå alt. Bare føl deg frem.
        </p>
      </div>

      {/* Bilde nederst */}
      <img
        src="/fanzine-v-2.png"
        alt="Trym"
        className="w-64 rounded-lg shadow-lg mt-8"
      />
    </main>
  );
}
