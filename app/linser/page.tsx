import Link from 'next/link';

export default function LinserPage() {
  return (
    <main className="min-h-screen bg-[#0033A0] text-white p-10">
      <Link href="/">
        <button className="text-white text-xl mb-6 hover:underline">← Tilbake</button>
      </Link>

      <h1 className="text-4xl font-bold mb-6">Linser</h1>
      <p className="text-lg leading-relaxed mb-10">
        Her samler jeg inntrykk, testbilder og anbefalinger fra kameralinsenes verden.
        <br />
        Et sted for nerderi og optisk kjærlighet.
      </p>

      {/* Fictionlens presentasjon */}
      <section className="bg-white text-[#0033A0] p-6 rounded-xl shadow-md max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">🔍 Fictionlens</h2>
        <p>
          Fictionlens er en imaginær kameralinse som filtrerer virkeligheten gjennom fiksjon.
          Alt du ser blir tolket som en scene i en historie.
          <br />
          Brukes best når du vil gjøre det hverdagslige magisk ✨
        </p>
      </section>
    </main>
  );
}
