import React, { useEffect } from 'react';
import { MapPin, Globe, BadgeCheck } from 'lucide-react';

export default function Location() {
  // Inject the font into the document head
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full bg-[#050505] text-white py-16 px-4 flex justify-center items-center font-sans overflow-hidden relative">
      <style>{`
        :root {
          --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
        }
        .font-clash {
          font-family: var(--framer-font-family);
        }
      `}</style>

      {/* Subtle Grid Background to match the aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        
        {/* Item 1: HQ */}
        <div className="flex flex-col items-center text-center group">
          <div className="mb-5 p-2 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
            <MapPin className="w-6 h-6 text-green-500" strokeWidth={1.5} />
          </div>
          <div className="font-clash text-[12px] tracking-wider font-semibold uppercase leading-relaxed">
            <span className="text-white block">HQ in Bengaluru,</span>
            <span className="text-gray-500 block">India</span>
          </div>
        </div>

        {/* Item 2: Worldwide */}
        <div className="flex flex-col items-center text-center group">
          <div className="mb-5 p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
            <Globe className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div className="font-clash text-[12px] tracking-wider font-semibold uppercase leading-relaxed">
            <span className="text-white block">Available All Around</span>
            <span className="text-gray-500 block">Worldwide</span>
          </div>
        </div>

        {/* Item 3: Events */}
        <div className="flex flex-col items-center text-center group">
          <div className="mb-5 p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
            <BadgeCheck className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
          </div>
          <div className="font-clash text-[12px] tracking-wider font-semibold uppercase leading-relaxed">
            <span className="text-white block">Events</span>
            <span className="text-gray-500 block">& Experiences</span>
          </div>
        </div>

      </div>
    </div>
  );
}