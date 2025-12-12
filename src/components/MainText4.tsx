import React from "react";
import ismailmk from "@/assets/ismailmk.svg"; // ⭐ imported your signature image

const MainText4: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden text-white font-sans bg-transparent">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#000_40%,transparent_75%)]" />
      </div>

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
      <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center">
        <h1
          className="max-w-[1100px] leading-[0.95] font-bold uppercase tracking-tight"
          style={{ fontSize: "clamp(28px, 5vw, 58px)" }}
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
