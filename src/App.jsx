import {
  InstagramLogo,
  YoutubeLogo,
  CurrencyCircleDollar,
  Globe,
} from "phosphor-react";
import { useRef } from "react";

const links = [
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: <InstagramLogo size={24} weight="fill" />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/yourchannel",
    icon: <YoutubeLogo size={24} weight="fill" />,
  },
  {
    name: "Saweria",
    url: "https://saweria.co/yourusername",
    icon: <CurrencyCircleDollar size={24} weight="fill" />,
  },
  {
    name: "Website",
    url: "https://bxfundz.my.id",
    icon: <Globe size={24} weight="fill" />,
  },
];

function App() {
  const hoverSound = useRef(new Audio("/hover.mp3"));
  const clickSound = useRef(new Audio("/click.mp3"));

  const playHover = () => {
    hoverSound.current.currentTime = 0;
    hoverSound.current.play();
  };

  const playClick = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  return (
    <main className="min-h-screen flex flex-col items-center pt-10 px-4 py-6">
      {/* Avatar */}
      <div className="relative h-44 w-44 md:w-60 md:h-60 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-4 before:border-transparent before:animate-[spin_6s_linear_infinite] before:bg-[conic-gradient(from_0deg,_red,_orange,_yellow,_green,_blue,_indigo,_violet,_red)] before:blur-sm before:drop-shadow">
        <img
          src="/pp.png"
          className="absolute inset-0 w-full h-full rounded-full object-cover p-1"
          alt="Profile"
        />
      </div>

      {/* Nama & Bio */}
      <h1 className="mt-2 text-white text-4xl font-semibold font-pop">
        byntangxyz
      </h1>
      <p className="text-white/80 font-inter text-center mx-2">
        Aku memang manusia biasa yang tak sempurna dan kadang salah
      </p>

      {/* Cards */}
      <div className="mt-6 w-full flex flex-col gap-4 max-w-md">
        {links.map((link, index) => (
          <div
            key={link.name}
            className={`w-full flex ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white text-black px-5 py-4 md:py-6 rounded-2xl shadow-lg font-medium flex items-center gap-3 w-[90%] max-w-xs overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02]"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-800 opacity-0 group-hover:opacity-100 blur-[6px] transition-all duration-500 z-0"></span>
              <span className="relative z-10 flex items-center gap-2">
                {link.icon}
                <span>{link.name}</span>
              </span>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 w-full flex justify-center">
        <div className="flex flex-col lg:flex-row w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Kiri: Email */}
          <div className="bg-neutral-200 p-5 lg:w-1/3 flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold text-neutral-700">Contact</h2>
            <a
              href="mailto:bintangmurtifandy@gmail.com"
              className="text-sm text-neutral-600 mt-2 select-text break-words"
            >
              bintangmurtifandy@gmail.com
            </a>
          </div>

          {/* Kanan: Lagu Favorit (Spotify Embed) */}
          <div className="bg-neutral-100 p-5 lg:w-2/3">
            <div className="w-full">
              <iframe
                className="w-full rounded-xl"
                src="https://open.spotify.com/embed/track/3be9ACTxtcL6Zm4vJRUiPG?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-white py-8">
        © 2024 - 2025 byntangxyz. All rights reserved.
      </p>
    </main>
  );
}

export default App;
