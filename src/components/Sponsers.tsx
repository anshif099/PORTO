import React, { useEffect, useRef, useState } from "react";

const brands = [
  { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adobe_logo_2020.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" }
];

export default function Sponsors() {
  const [hidden, setHidden] = useState<string[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);

  const valid = brands.filter(b => !hidden.includes(b.name));
  const scrolling = [...valid, ...valid];

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full bg-[#050505] py-20 overflow-hidden relative border-t border-white/5">

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-${trackRef.current?.scrollWidth ? trackRef.current.scrollWidth / 2 : 1000}px); }
        }

        .track {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }

        /* FORCE ALL LOGOS WHITE */
        .brand {
          height: 44px;
          max-width: 140px;
          object-fit: contain;
          opacity: 0.85;
          transition: all 0.3s ease;
          filter: brightness(0) invert(1);
        }

        /* LIGHT HOVER EFFECT */
        .brand:hover {
          opacity: 1;
          transform: translateY(-2px);
          filter: brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.35));
        }
      `}</style>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      {/* Scrolling Sponsors */}
      <div className="relative z-10 overflow-hidden">
        <div ref={trackRef} className="track gap-16 px-10">
          {scrolling.map((b, i) => (
            <img
              key={`${b.name}-${i}`}
              src={b.logo}
              alt={b.name}
              className="brand"
              loading="lazy"
              draggable={false}
              onError={() => setHidden(prev => [...prev, b.name])}
            />
          ))}
        </div>
      </div>

      {/* Edge Fade */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#050505] to-transparent z-20" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#050505] to-transparent z-20" />

    </div>
  );
}
