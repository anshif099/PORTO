import React from "react";

const MainText4: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden text-white font-sans bg-transparent">
      {/* Background layers (behind content) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
        {/* soft vignette / radial darkening */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#000_40%,transparent_75%)]" />
      </div>

      {/* Top labels (force on top) */}
      <div className="absolute top-8 left-12 z-20 text-[12px] tracking-[0.25em] uppercase text-white/80">
        04
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-[12px] tracking-[0.25em] uppercase text-white">
        //VOICE OF IDENTITY
      </div>

      <div className="absolute top-8 right-12 z-20 text-[12px] tracking-[0.25em] uppercase text-white/60">
        SINCE 2016
      </div>

      {/* Main content in normal flow so it won't get covered */}
      <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center">
        <h1
          className="max-w-[1100px] leading-[0.95] font-bold uppercase tracking-tight"
          style={{ fontSize: "clamp(28px, 5vw, 58px)" }}
        >
          "WE BELIEVE IN SUSTAINABLE EVENTS,
          <br />
          EXPERIENCES AND ENGAGEMENTS."
        </h1>

        {/* Signature */}
        <div className="mt-12 text-center">
          <p
            className="text-[28px] md:text-[30px] font-serif tracking-wide"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            IsmailMK
          </p>

          {/* Handwritten underline */}
          <svg
            width="210"
            height="26"
            viewBox="0 0 210 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-[-6px] block"
            aria-hidden="true"
          >
            <path
              d="M8 16C45 6 140 28 202 12"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MainText4;
