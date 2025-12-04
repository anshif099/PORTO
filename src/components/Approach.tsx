import React, { useEffect } from 'react';

export default function Approach() {
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
    <div className="w-full py-20 bg-[#050505] text-white font-sans overflow-hidden relative flex flex-col">
      <style>{`
        :root {
          --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
        }
        .font-clash {
          font-family: var(--framer-font-family);
        }
      `}</style>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-12 flex flex-col h-full py-20 justify-between">
        
        {/* Top Header Row */}
        <div className="flex justify-between items-start w-full text-[12px] md:text-sm font-clash font-medium tracking-widest text-gray-400 mb-10 md:mb-0">
          <span className="block">01</span>
          <span className="block uppercase">// Approach</span>
          <span className="block uppercase">Four Phases</span>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          
          {/* Hero Heading */}
          <h1 className="font-clash font-semibold text-white tracking-tight uppercase leading-[0.9] w-full mx-auto mb-10 md:mb-12 px-2">
            <span className="block text-[5vw] md:text-[6vw] lg:text-[62px] whitespace-nowrap">
              Crafting Extraordinary Brand
            </span>
            <span className="block text-[5vw] md:text-[6vw] lg:text-[62px] whitespace-nowrap">
              Experiences Since 2016
            </span>
          </h1>

          {/* Subtext Paragraph */}
          {/* Max-width constrained to ~550px to match the line wrapping of the image */}
          <div className="max-w-[550px] mx-auto px-4">
            <p className="font-clash text-sm md:text-[16px] text-gray-400 font-medium leading-relaxed tracking-wide text-center">
              Iconic, bold, innovative events, and experiential marketing that breaks through the noise, cuts through the clutter — becoming part of your identity. We believe that every touchpoint is an opportunity to strengthen brand perception, through meaningful, and powerfully engaging experiences. Experiences that redefine. Experiences that inspire.
            </p>
          </div>

        </div>

        {/* Bottom Spacer to balance the layout vertically */}
        <div className="h-10"></div>
      </div>
    </div>
  );
}