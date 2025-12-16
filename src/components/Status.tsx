import React from "react";

const stats = [
  { value: "15+", label: "GLOBAL CLIENTS" },
  { value: "9+", label: "YEARS OF EXPERIENCE" },
  { value: "16+", label: "AWARDS WON" },
  { value: "99%", label: "SUCCESS RATE" },
];

const Status: React.FC = () => {
  return (
    <>
      {/* ⭐ TOP clean horizontal line */}
      <div className="w-full h-[1px] bg-white/10" />

      <section className="relative w-full pt-20 text-white overflow-hidden">
        <style>{`
          .font-inter-display {
            font-family: "Inter Display", "Inter Display Placeholder",
              system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
        `}</style>

        {/* Header */}
        <div className="absolute top-2 left-6 md:left-12 text-[12px] tracking-[0.22em] uppercase text-white font-inter-display">
          05
        </div>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[12px] tracking-[0.22em] uppercase text-white font-inter-display">
          //STATS
        </div>
        <div className="absolute top-2 right-6 md:right-12 text-[12px] tracking-[0.22em] uppercase text-white/55 font-inter-display">
          FUN FACTS
        </div>

        <br /><br />

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* ✅ PURE bg-framer-pattern (NO global layers leaking) */}
        <div className="relative isolate bg-framer-pattern py-12 ">
          <div className="relative z-10  max-w-[1500px]  font-inter-display mx-auto ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 ">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="mx-auto  flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className="text-[clamp(40px,7vw,88px)] leading-none font-bold text-white">
                    {item.value}
                  </div>
                  <div className="mt-5 text-[12px] tracking-[0.20em] uppercase text-white/70">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Status;
