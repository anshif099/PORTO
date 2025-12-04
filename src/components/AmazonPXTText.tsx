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
          July 1, 2023
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
          AMAZONPXT <br></br> SUMMIT
        </h1>

        {/* DESCRIPTION */}
        <div className="space-y-6 text-white/60 text-[13px] sm:text-[14px] leading-relaxed">

          <p>
            Amazon PXT All India Connect 2024 was a full-day offsite event held on August 2nd at  <br></br>
            Hilton Manyata, Bengaluru, bringing together 150 PXT leaders from across India. The <br></br>
            event combined strategic alignment sessions—including keynotes, leadership talks, and  <br></br>
            panel discussions—with team engagement through fun games, R&R recognitions, and a  <br></br>
            high-energy Bollywood-themed dinner party featuring DJ Lloyd. <br></br>
          </p>

        </div>

        {/* BUTTON */}
        <div className="pt-6">
          <a
            href="https://www.youtube.com/watch?v=u3qroNabo0o"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-3
              rounded-full
              bg-white
              text-black
              text-[11px]
              sm:text-[12px]
              tracking-[0.2em]
              uppercase
              font-semibold
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
              border
              border-white
            "
          >
            Live Preview
          </a>
        </div>

      </div>
    </section>
  );
};

export default AmazewitText;
