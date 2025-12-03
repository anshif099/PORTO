import React from "react";

const MainText4: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-[#050505] overflow-hidden text-white font-sans">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,#000_40%,transparent_75%)]" />

      {/* Top labels */}
      <div className="absolute top-[32px] left-[50px] text-[12px] tracking-[0.25em] uppercase text-white/80">
        04
      </div>

      <div className="absolute top-[32px] left-1/2 -translate-x-1/2 text-[12px] tracking-[0.25em] uppercase text-white">
        //VOICE OF IDENTITY
      </div>

      <div className="absolute top-[32px] right-[50px] text-[12px] tracking-[0.25em] uppercase text-white/60">
        SINCE 2016
      </div>

      {/* Main Quote */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="max-w-[1200px] leading-[0.95] font-bold uppercase tracking-tight 
           text-[clamp(28px,5vw,58px)]">
          "WE BELIEVE IN SUSTAINABLE EVENTS,<br />
          EXPERIENCES AND ENGAGEMENTS."
        </h1>

        {/* Signature */}
        {/* Signature */}
<div className="mt-12 text-center">
  <p
    className="text-[30px] font-serif tracking-wide"
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
    className="mx-auto mt-[-2px]"
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
