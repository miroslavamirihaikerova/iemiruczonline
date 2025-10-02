export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <img
        src="/_____0xMiruImageEntry-Vortex.png"
        alt="Hero image"
        className="max-w-xl rounded-xl shadow-lg mb-8"
      />
      <h1 className="text-3xl font-bold mt-2">Total game over. Datový vortex zpracován na 111%.</h1>
      <p className="text-center max-w-md mb-6">
        Tady začíná i končí moje digitální cesta.
      </p>

      <div className="flex gap-4">
        <a
          href="https://facebook.com/miroslavamirihaikerovaeu"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com/miroslavamirihaikerova"
          className="text-pink-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://linkedin.com/in/miroslavamirihaikerova"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://pinterest.com/in/miroslavamirihaikerovaeu"
          className="text-red-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
      
        </a>
       
      </div>
    </main>
  );
}

