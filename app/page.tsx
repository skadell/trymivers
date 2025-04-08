return (
  <img
  src="/trymivers_helkropp_transparent.png"
  alt="Trymivers-avatar"
  className="fixed w-32 h-auto pointer-events-none transition-transform duration-75 z-50"
  style={{
    left: mousePos.x,
    top: mousePos.y,
    transform: 'translate(-50%, -50%)',
  }}
/>
  <main className="min-h-screen bg-[#0033A0] text-white p-10 flex flex-col md:flex-row items-center justify-center gap-10">
    <img 
      src="/fanzine-v-2.png" 
      alt="Trym" 
      className="w-64 rounded-lg shadow-lg"
    />
    <div className="max-w-xl">
      <h1 className="text-4xl font-bold mb-6">Velkommen til Trymivers 🌌</h1>
      <p className="text-lg">
        Dette er mitt digitale rom – fylt med tanker, anbefalinger, AI-lek og kreative impulser.
        En slags fanzine for fremtiden, et refleksjonsrom i skyen.
      </p>
    </div>
  </main>
);
}
