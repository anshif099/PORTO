import React from "react";

const Blog2: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-8 py-16 relative"
      style={{
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      {/* Center vertical divider */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid gap-12 md:grid-cols-[1.3fr,1fr]">
        {/* LEFT COLUMN */}
        <div className="text-white">
          {/* Date */}
          <p className="text-[12px] tracking-[-0.02em] uppercase text-[#808080] mb-8">
            Apr 11, 2025
          </p>

          {/* Title */}
          <h1 className="uppercase font-semibold leading-[1.08] text-[48px] mb-8">
            XIAOMI-SMARTER-<br></br>
            LIVING
          </h1>

          {/* Description */}
          <p className="text-[18px] md:text-[18px] leading-[1.3em] text-[#808080] max-w-xl"
          style={{
        fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
      }}>
            Xiaomi’s Smarter Living event brought its latest smart home product lineup 
            to life through a hyper-realistic set experience. The launch showcased 
            automation, innovation, and interactivity—blending technical precision with 
            immersive storytelling for media and fans alike.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="text-white/80 text-sm md:text-[0.9rem] flex flex-col justify-center">
          {/* Client */}
          <div className="flex items-center justify-between py-6 border-b border-white/10">
            <span className="tracking-[-0.02em] uppercase text-[12px] text-[#808080]">
              Client
            </span>
            <span className="text-[24px] text-white">Google</span>
          </div>

          {/* Duration */}
          <div className="flex items-center justify-between py-6 border-b border-white/10">
            <span className="tracking-[-0.02em] uppercase text-[12px] text-[#808080]">
              Duration
            </span>
            <span className="text-[24px] text-white">3 Months</span>
          </div>

          {/* Category / Casestudy ID */}
          <div className="flex items-center justify-between py-6">
            <span className="tracking-[-0.02em] uppercase text-[12px] text-[#808080]">
              Product launch and experiential
            </span>
            <span className="text-[24px] text-white">Casestudy 03</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog2;
