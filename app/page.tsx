import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0033A0] text-white p-10 flex flex-col md:flex-row items-center justify-center gap-10">
      <img
        src="/fanzine-v-2.png"
        alt="Trym"
        className="w-64 rounded-lg shadow-lg"
      />
      <div className="max-w-xl">
<h1 className="text-4xl font-bold mb-6">Trymivers</h1>
  <p className="text-lg leading-relaxed">
 Et levende arkiv av impulser, uttrykk og digitale drypp fra under overflaten.  
          Her finner du fragmenter av lyd, tekst, bilder og idéer – alt filtrert gjennom ett og samme blikk.  
          Du trenger ikke forstå alt. Bare føl deg frem.
        </p><Link href="/Musikk">
  <button className="mt-6 px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full hover:bg-gray-200 transition">
    Musikk
  </button>
</Link>
        <Link href="/linser">
  <button className="mt-4 px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full hover:bg-gray-200 transition">
    Linser
  </button>
</Link>
        <Link href="/tekst">
  <button className="mt-4 px-6 py-3 bg-white text-[#0033A0] font-semibold rounded-full hover:bg-gray-200 transition">
    Utforsk tekst
  </button>
</Link>
      </div>
    </main>
  );
}
