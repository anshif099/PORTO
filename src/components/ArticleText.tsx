import React from "react";

const AmazewitText: React.FC = () => {
  return (
    <section
      className="w-full py-20 flex items-center justify-center text-white font-clash px-6"
      style={{
        backgroundColor: "#050505",
        backgroundImage: "radial-gradient(#202020 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="max-w-[820px] w-full text-center space-y-8">

        {/* DATE */}
        <p className="text-[11px] tracking-[0.25em] uppercase text-white/50">
          (2021 - 2025)
        </p>

        {/* TITLE */}
        <h1 className="
          text-white
          font-semibold
          leading-[0.95]
          tracking-tight
          uppercase
          text-[48px]
          sm:text-[64px]
          md:text-[80px]
          lg:text-[96px]
        ">
          LATEST  <br></br>ARTICLES
        </h1>
      </div>
    </section>
  );
};

export default AmazewitText;
