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
    <div className="pt-20 text-white selection:bg-white selection:text-black font-sans overflow-x-hidden flex flex-col">
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
      <main className="flex-grow flex items-center justify-center  relative w-full">
        <div className="absolute inset-0 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-none ">
          {/* Responsive Heading */}
          <h1 className="font-clash font-semibold text-white tracking-tighter uppercase flex flex-col items-center justify-center leading-[0.9] sm:leading-[0.85] mx-auto">
            <span className="block sm:text-[10.8vw] text-[10vw]">Experience</span>
            <span className="block sm:text-[10.8vw] text-[10vw]">Extraordinary</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 sm:mt-8 md:mt-2 font-clash text-sm sm:text-lg md:text-[20px] lg:text-[24px] text-gray-200 font-medium max-w-xl sm:max-w-2xl leading-relaxed tracking-wide ">
            Turn brand narratives into living, breathing moments{' '}
            <br className="hidden sm:block" />
            that resonate.
          </p>
          <br></br>
        </div>
      </main>
    </div>
  );
}
