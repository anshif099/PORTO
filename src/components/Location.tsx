import React, { useEffect } from 'react';
import { MapPin, BadgeCheck } from 'lucide-react';
import globeImg from '@/assets/globe.png';

export default function Location() {
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
    <>
      {/* ⭐ TOP clean horizontal line */}
      <div className="w-full h-[1px] bg-white/10" />

      <div className="w-full text-white px-4 flex justify-center items-center font-sans overflow-hidden relative">
        <style>{`
          :root {
            --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
          }
          .font-clash {
            font-family: var(--framer-font-family);
          }
        `}</style>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-80 relative z-10 pt-10">

          {/* Item 1: HQ */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-5">
              <MapPin className="w-6 h-6 text-green-500" strokeWidth={1.5} />
            </div>
            <div className="font-clash text-[12px] tracking-wider font-semibold uppercase leading-relaxed">
              <span className="text-white block">HQ in Bengaluru,</span>
              <span className="text-gray-500 block">India</span>
            </div>
          </div>

          {/* Item 2: Worldwide */}
          <div className="flex flex-col items-center text-center">
            <img
              src={globeImg}
              alt="Globe"
              className="w-[53px] h-[21px] mb-5 brightness-0 invert"
            />

            <div className="font-semibold font-clash leading-tight tracking-wide uppercase text-center">
              <span className="block text-[12px] font-semibold text-white">
                Available All Around
              </span>

              <span className="block text-[12px] text-gray-500 mt-1">
                Worldwide
              </span>
            </div>
          </div>

          {/* Item 3: Events */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-5">
              <BadgeCheck className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
            </div>
            <div className="font-clash text-[12px] tracking-wider font-semibold uppercase leading-relaxed">
              <span className="text-white block">Events</span>
              <span className="text-gray-500 block">& Experiences</span>
            </div>
            <div className='pt-10'></div>
          </div>
        </div>
      </div>

      {/* ⭐ BOTTOM clean horizontal line */}
      <div className="w-full h-[1px] bg-white/10 " />
    </>
  );
}
