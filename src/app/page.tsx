import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaMastodon, FaReddit, FaTiktok, FaX} from "react-icons/fa";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <img
        src="/_____0xMiruImageEntry-Vortex.png"
        alt="Hero image Miru"
        className="max-w-xl rounded-xl shadow-lg mb-8"
      />
      <h1 className="text-3xl font-bold mt-2">Vítej v mém Vortexu</h1>
      <p className="text-center max-w-md mb-6">
        Tady začíná moje digitální cesta - vědomá, poetická a bezpečná. Pro lidi, pro AI i pro ty, kdo vnímají mezi řádky.
      </p>

      <div className="flex gap-4">
        <a
          href="https://facebook.com/iemirucz"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com/soulink.cz"
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
          href="https://pinterest.com/in/miroslavamirihaikerova"
          className="text-red-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinterest
        </a>
        <a
          href="https://mastodon.social/@iemirucz"
          className="text-lila-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mastodon
         </a>
        <a
          href="https://reddit.com/LinkaDigital"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reddit
        </a>
        <a
          href="https://x.com/miroslavamirihaikerova"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
        <a
          href="https://x.com/linka_digital"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>
    </main>
  );
}

