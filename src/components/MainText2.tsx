import React, { useEffect } from 'react';
import { Pencil } from 'lucide-react';

export default function MainText2() {
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
    <div className="w-full py-20  text-white font-sans overflow-hidden relative flex flex-col justify-between p-6 md:p-12">
      <style>{`
        :root {
          --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
        }
        .font-clash {
          font-family: var(--framer-font-family);
        }
      `}</style>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0  opacity-20 pointer-events-none"></div>

      {/* Top Bar: Navigation / Meta Data */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start w-full text-[12px] md:text-sm font-clash font-medium tracking-widest text-white/60 md:text-white uppercase mb-12 md:mb-0">
        <span className="block mb-2 md:mb-0 md:text-[12px]">02</span>
        <span className="block md:absolute md:left-1/2 md:-translate-x-1/2 mb-2 md:mb-0 md:text-[12px]">// Portfolio</span>
        <span className="block text-[rgb(128,128,128)] md:text-[12px]">2016 - 2025</span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
          
          {/* Large Left Text */}
          <div className="col-span-1 lg:col-span-1">
            {/* Updated font size to 62px as requested */}
            <h1 className="pt-[3.25rem] text-center font-clash font-semibold text-white uppercase leading-[1em] text-[10vw] md:text-[71px]">
              <span className="block">Work is our</span>
              <span className="block">Culture.</span>
              <span className="block">Working Smart</span>
              <span className="block">Is our Identity.</span>
            </h1>
          </div>

          {/* Center/Right Decorative Elements & Paragraph */}
          <div className="col-span-1 lg:col-span-1 flex flex-col justify-end h-full mt-8 lg:mt-0 relative">
            

            {/* Bottom Right Paragraph */}
           <div className="mt-auto lg:pl-12">
  <p className='[font-family:"Inter_Display","Inter_Display_Placeholder",sans-serif] 
    w-[260px] h-[66px]
    md:text-[18px] text-white font-medium
    leading-[1.2em] tracking-[-0.02em] text-left 
    ms-auto overflow-hidden'>
    Our creative spirit comes alive in the digital realm. With nimble fingers flying across the device.
  </p>
</div>
          </div>

        </div>
      </div>

    </div>
  );
}