import React from "react";

const stats = [
  { value: "15+", label: "GLOBAL CLIENTS" },
  { value: "9+", label: "YEARS OF EXPERIENCE" },
  { value: "16+", label: "AWARDS WON" },
  { value: "99%", label: "SUCCESS RATE" },
];

const Status: React.FC = () => {
  return (
    <section className="relative w-full pt-20  bg-[#050505] text-white overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:80px_80px] opacity-45" />

      {/* Font (Inter Display) */}
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", "Inter Display Placeholder", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
      `}</style>

      {/* Top row: 05 / //STATS / FUN FACTS */}
      <div className="absolute top-8 left-6 md:left-12 text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-white/80 font-inter-display">
        05
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-white font-inter-display">
        //STATS
      </div>

      <div className="absolute top-8 right-6 md:right-12 text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-white/55 font-inter-display">
        FUN FACTS
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center w-full py-20">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 font-inter-display">
          {/* 4 stats in a row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="text-[clamp(40px,7vw,90px)] leading-none font-bold">
                  {item.value}
                </div>
                <div className="mt-5 text-[11px] tracking-[0.20em] uppercase text-white/55">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
