import React from "react";
import relationImg from "@/assets/relation.jpg"; // handshake image

const Relation: React.FC = () => {
  return (
    <section className="relative w-full text-white overflow-hidden">

      {/* ❌ Background dots removed */}

      {/* Inter Display Font */}
      <style>{`
        .font-inter-display {
          font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col items-center justify-center font-inter-display">

        {/* Top row: left text / image / right text */}
        <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-12 md:mb-16">

          {/* Left text */}
          <div className="hidden sm:flex flex-col items-center justify-center text-left font-bold">
            <p className="text-[11px] tracking-[0.22em] uppercase">
              Based in Bengaluru
            </p>
            <p className="mt-1 text-[10px] tracking-[0.18em] uppercase text-white/55">
              India
            </p>
          </div>

          {/* Center image */}
         {/* Center image */}
<div className="flex justify-center py-20">
  <div
    className="
  w-[450px] h-[500px]
  rounded-t-[18px] rounded-b-[6px]
  overflow-hidden
  bg-black/70
  border border-white/10
  shadow-[0_40px_90px_rgba(0,0,0,0.9)]
"

  >
    <img
      src={relationImg}
      alt="Handshake"
      className="w-full h-full object-cover"
      draggable={false}
    />
  </div>
</div>

          {/* Right text */}
          <div className="hidden sm:flex flex-col items-center justify-center text-right font-bold">
            <p className="text-[11px] tracking-[0.22em] uppercase">
              Events
            </p>
            <p className="mt-1 text-[10px] tracking-[0.18em] uppercase text-white/55">
              &amp; Experiences
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className=" leading-[1] max-w-[780px] text-center text-[11px] sm:text-[12px] md:text-[24px] uppercase text-white">
          Comprehensive brand experience
          <br className="hidden md:block" />
          solutions, to future defining experiential
          <br className="hidden md:block" />
          campaigns, to the next big thing.
        </p>

        {/* Social Links */}
        <header className="w-full pt-8 px-6 md:px-12 flex justify-center py-40">
          <nav className="flex gap-8 md:gap-12 text-[11px] md:text-[18px] font-semibold uppercase">
            <a href="#" className="hover:text-gray-300">Instagram ↗</a>
            <a href="#" className="hover:text-gray-300">LinkedIn ↗</a>
            <a href="#" className="hover:text-gray-300">Twitter ↗</a>
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Relation;
