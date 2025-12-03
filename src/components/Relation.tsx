import React from "react";
import relationImg from "@/assets/relation.jpg"; // <- replace with your handshake image

const Relation: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#171717_1px,transparent_1px)] bg-[size:8px_8px] opacity-60 pointer-events-none" />

      {/* Font: Inter Display */}
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", "Inter Display Placeholder", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col items-center justify-center min-h-screen font-inter-display">
        {/* Top row: left text / image / right text */}
        <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-12 md:mb-16">
          {/* Left text */}
          <div className="hidden sm:flex flex-col items-start justify-center text-left">
            <p className="text-[11px] tracking-[0.22em] uppercase">
              Based in Bengaluru
            </p>
            <p className="mt-1 text-[10px] tracking-[0.18em] uppercase text-white/55">
              India
            </p>
          </div>

          {/* Center image */}
          <div className="flex justify-center">
            <div
              className="
                w-[70vw] max-w-[420px]
                rounded-[32px]
                overflow-hidden
                bg-black/70
                border border-white/10
                shadow-[0_40px_90px_rgba(0,0,0,0.9)]
              "
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src={relationImg}
                alt="Handshake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right text */}
          <div className="hidden sm:flex flex-col items-end justify-center text-right">
            <p className="text-[11px] tracking-[0.22em] uppercase">
              Events
            </p>
            <p className="mt-1 text-[10px] tracking-[0.18em] uppercase text-white/55">
              &amp; Experiences
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="max-w-[780px] text-center text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed tracking-[0.22em] uppercase text-white">
          Comprehensive brand experience
          <br className="hidden md:block" />
          solutions, to future defining experiential
          <br className="hidden md:block" />
          campaigns, to the next big thing.
        </p>
      </div>
    </section>
  );
};

export default Relation;
