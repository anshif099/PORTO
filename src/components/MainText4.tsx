import React from "react";
import ismailmk from "@/assets/ismailmk.svg";

const MainText4: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden text-white font-sans bg-transparent">
      {/* ❌ NO BACKGROUND — completely removed */}

      {/* ⭐ TOP clean horizontal line */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* Top labels */}
      <div className="absolute top-8 left-12 z-20 text-[12px] tracking-[0.25em] uppercase text-white/80">
        04
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-[12px] tracking-[0.25em] uppercase text-white">
        //VOICE OF IDENTITY
      </div>

      <div className="absolute top-8 right-12 z-20 text-[12px] tracking-[0.25em] uppercase text-white/60">
        SINCE 2016
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 py-24 md:py-32 lg:py-20 flex flex-col items-center justify-center text-center">
        <h1
  className="max-w-[1100px] leading-[0.95] font-semibold uppercase"
  style={{
    fontSize: "clamp(28px, 5vw, 48px)",
    fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
  }}
>
  "WE BELIEVE IN SUSTAINABLE EVENTS,
  <br />
  EXPERIENCES AND ENGAGEMENTS."
</h1>

        {/* Signature image */}
        <div className="mt-12 text-center">
          <img
            src={ismailmk}
            alt="IsmailMK Signature"
            className="mx-auto w-[160px] md:w-[190px] object-contain"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default MainText4;
