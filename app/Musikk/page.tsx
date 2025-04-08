import Link from 'next/link';
export default function MusikkPage() {
  return (
    <main className="min-h-screen bg-[#0033A0] text-white p-10">
       <Link href="/">
        <button className="text-white text-xl mb-6 hover:underline">← Tilbake</button>
      </Link>     
      <h1 className="text-4xl font-bold mb-6">Musikk</h1>
      <p className="text-lg leading-relaxed">
        Her kommer alt jeg vil dele innen musikk. Remixer og anbefalinger.
      </p>
    </main>
  );
}
