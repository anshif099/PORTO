import React from "react";

const MainText3: React.FC = () => {
  return (
    <section className="relative w-full py-20 bg-[#050505] overflow-hidden">

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,#000_45%,transparent_75%)]" />

      {/* Top labels: 03 / //SERVICES / FAST DELIVERY */}
      <div className="pointer-events-none absolute top-8 left-6 md:left-12 text-[11px] md:text-xs tracking-[0.18em] uppercase text-white/70">
        03
      </div>

      <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 text-[11px] md:text-xs tracking-[0.18em] uppercase text-white">
        //SERVICES
      </div>

      <div className="pointer-events-none absolute top-8 right-6 md:right-12 text-[11px] md:text-xs tracking-[0.18em] uppercase text-white/60">
        FAST DELIVERY
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 flex items-center py-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16">

          {/* Left: big headline */}
          <div className="flex flex-col justify-center">
            <h1 className="text-white font-bold uppercase leading-[0.82] text-[clamp(60px,11vw,160px)]">
              PRO<br />
              SERVICES
            </h1>
          </div>

          {/* Right: description block */}
          <div className="flex flex-col justify-center items-start md:items-end">
            <p className="max-w-xs md:max-w-sm text-right text-[14px] md:text-[15px] leading-relaxed text-white">
              Discover our range of services
              designed to elevate your brand
              to next level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainText3;
