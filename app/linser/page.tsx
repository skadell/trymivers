import Link from 'next/link';

export default function LinserPage() {
  return (
    <main className="min-h-screen bg-[#0033A0] text-white p-10">
      <Link href="/">
        <button className="text-white text-xl mb-6 hover:underline">← Tilbake</button>
      </Link>

      <h1 className="text-4xl font-bold mb-6">Linser</h1>
      <p className="text-lg leading-relaxed mb-10">
        Her er et fotostudio bestående av ulike linser designet for å utforske et spekter av uttrykk i video- og bildeformat.
      </p>

      {/* Knappene ved siden av hverandre */}
      <div className="flex items-center gap-4 mt-6">
        <Link href="/linser/fictionlens">
          <img
            src="/linseknapp.png"
            alt="Fictionlens"
            width={100}
            height={100}
            className="hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/linser/glasslens">
          <img
            src="/glasslens-knapp.png"
            alt="Glasslens"
            width={100}
            height={100}
            className="hover:scale-105 transition-transform"
          />
        </Link>
      </div>
    </main>
  );
}
