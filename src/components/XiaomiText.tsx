import React from "react";

const AmazewitText: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center text-white font-clash px-6"
      style={{
        backgroundColor: "#050505",
        backgroundImage: "radial-gradient(#202020 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="max-w-[820px] w-full text-center space-y-8">

        {/* DATE */}
        <p className="text-[11px] tracking-[0.25em] uppercase text-white/50">
          July 16, 2024
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
          XIAOMI 14 CIVI <br></br> LAUNCH
        </h1>

        {/* DESCRIPTION */}
        <div className="space-y-6 text-white/60 text-[13px] sm:text-[14px] leading-relaxed">

          <p>
            The Xiaomi 14 Civi Launch Event, held on June 12, 2024, at Andaz, Aerocity, New Delhi, <br></br>
            was a bold and immersive showcase of Xiaomi’s latest mid-premium flagship. Celebrated  <br></br>
            as the "Cinematic Vision" smartphone, the event was meticulously designed to mirror the  <br></br>
            device’s core identity—sleek, symmetrical, powerful, and creative. The venue brought  <br></br>
            together 500+ attendees, including media, fans, partners, and Xiaomi crew, for a  <br></br>
            multisensory product journey, setting a new standard for experiential tech launches.
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
