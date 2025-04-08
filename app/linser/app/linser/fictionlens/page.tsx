export default function FictionLensPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10 flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="rounded-full border-4 border-gray-400 w-64 h-64 flex items-center justify-center shadow-xl bg-gradient-to-br from-gray-800 to-black">
        <span className="text-xl text-center">FictionLens™<br />Model X-0</span>
      </div>
      <div className="max-w-md text-left">
        <h1 className="text-3xl font-bold mb-4">FictionLens™ X-0</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          En kameralinse utviklet for å fange det usynlige. <br />
          Bryter linjene mellom det dokumentariske og det imaginære.
          <br /><br />
          🔭 Brennvidde: 0-∞ mm<br />
          ✨ Blender: f/Nonsens<br />
          🧠 Kompatibel med alle sanseorgan
        </p>
      </div>
    </main>
  );
}
