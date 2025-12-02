import React, { useEffect } from 'react';
import { MoveRight } from 'lucide-react';

export default function App() {
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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden flex flex-col">
      {/* Custom style to force the specific font family requested. 
        Tailwind arbitrary values can also be used, but this ensures the specific font stack.
      */}
      <style>{`
        :root {
          --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
        }
        .font-clash {
          font-family: var(--framer-font-family);
        }
      `}</style>

      {/* Main Content Container */}
      <main className="flex-grow flex items-center justify-center p-4 relative w-full">
        
        {/* Optional: Subtle Grid Background Pattern to match the texture in the image slightly */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1400px]">
          
          {/* Main Heading 
            - Requested size: 160px
            - Responsive: Scales down on smaller screens to prevent breaking
            - Leading: Tightened (0.85) to match the stacked look
            - Tracking: Negative to squeeze letters together
          */}
          <h1 className="font-clash font-semibold text-white tracking-tighter uppercase flex flex-col items-center justify-center leading-[0.85] w-full">
            <span className="text-[12vw] md:text-[160px] block">
              Experience
            </span>
            <span className="text-[12vw] md:text-[160px] block">
              Extraordinary
            </span>
          </h1>

          {/* Subtext
            - Requested size: 24px
            - Font: Sans-serif (using Clash Display again for consistency or generic sans)
            - Layout: Centered with max-width for line break
          */}
          <p className="mt-8 md:mt-10 font-clash text-base md:text-[24px] text-gray-200 font-medium max-w-2xl leading-relaxed tracking-wide">
            Turn brand narratives into living, breathing moments <br className="hidden md:block" />
            that resonate.
          </p>

        </div>
      </main>

    </div>
  );
}