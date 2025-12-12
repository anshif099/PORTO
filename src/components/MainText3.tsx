import React from "react";

const MainText3: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ❌ No background elements at all */}

      {/* Top labels */}
      <div className="pointer-events-none absolute top-8 left-6 md:left-12 text-[11px] md:text-xs tracking-[0.18em] uppercase text-white">
        03
      </div>

      <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 text-[11px] md:text-xs tracking-[0.18em] uppercase text-white">
        //SERVICES
      </div>

      <div className="pointer-events-none absolute top-8 right-6 md:right-12 text-[11px] md:text-xs tracking-[0.18em] uppercase text-white/60">
        FAST DELIVERY
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6  flex items-center py-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 pt-7">

          {/* Left: big headline */}
          <div className="flex flex-col justify-center">
            <h1
              className="
                text-white
                font-semibold
                uppercase
                leading-[0.75]
                text-[64px] md:text-[120px]
              "
              style={{
                fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
              }}
            >
              PRO
              <br />
              SERVICES
            </h1>
          </div>

          {/* Right: paragraph */}
          <div className="flex flex-col justify-end items-start md:items-end">
            <p
              className="max-w-xs md:max-w-[360px] text-left font-bold text-[18px] leading-relaxed text-white md:pr-12 lg:pr-22"
              style={{
                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
              }}
            >
              Discover our range of services<br />
              designed to elevate your brand<br />
              to next level.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainText3;
