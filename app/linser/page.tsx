import Link from 'next/link';
export default function LinserPage() {
  return (
    <main className="min-h-screen bg-[#0033A0] text-white p-10">
      <Link href="/">
        <button className="text-white text-xl mb-6 hover:underline">← Tilbake</button>
      </Link>

      <h1 className="text-4xl font-bold mb-6">Linser</h1>
      <p className="text-lg leading-relaxed mb-10">
        Her samler jeg inntrykk, testbilder og anbefalinger fra kameralinsenens verden. <br />
        Et sted for nerderi og optisk kjærlighet.
      </p>
    </main>
  );
}
