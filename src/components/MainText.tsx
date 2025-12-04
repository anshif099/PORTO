import React, { useEffect } from 'react';
import { MoveRight } from 'lucide-react';

export default function App() {
  // Inject the font into the document head
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="py-20 bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden flex flex-col">
      {/* Custom font */}
      <style>{`
        :root {
          --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
        }
        .font-clash {
          font-family: var(--framer-font-family);
        }
      `}</style>

      {/* Main Content Container */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative w-full">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1400px]">
          {/* Heading – made smaller on mobile */}
          <h1 className="font-clash font-semibold text-white tracking-tighter uppercase flex flex-col items-center justify-center leading-[0.9] sm:leading-[0.85] w-full mx-auto">
            {/* 
              Clamp:
              - min ~1.8rem (≈ 29px) so it fits even on 320px
              - fluid with 8vw
              - max 10rem (160px) on big screens
            */}
            <span className="block text-[clamp(1.8rem,8vw,10rem)]">
              Experience
            </span>
            <span className="block text-[clamp(1.8rem,8vw,10rem)]">
              Extraordinary
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 sm:mt-8 md:mt-10 font-clash text-sm sm:text-lg md:text-[20px] lg:text-[24px] text-gray-200 font-medium max-w-xl sm:max-w-2xl leading-relaxed tracking-wide">
            Turn brand narratives into living, breathing moments{' '}
            <br className="hidden sm:block" />
            that resonate.
          </p>
        </div>
      </main>
    </div>
  );
}
