import React from "react";

const GoogleText: React.FC = () => {
  return (
    <section
      className="
        w-full py-20
        flex items-center justify-center
        bg-[#050505]
        text-white
        px-4
        bg-[radial-gradient(#333_1px,transparent_1px)]
        bg-[length:24px_24px]
      "
      style={{
        fontFamily: '"Clash Display", "Clash Display Placeholder", sans-serif',
      }}
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center">
        {/* Date */}
        <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.35em] uppercase text-white/70 mb-10 md:mb-12">
          February 12, 2022
        </p>

        {/* Title */}
        <h1 className="leading-[0.9] font-semibold uppercase">
          <span className="block text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] xl:text-[112px]">
            Google / ICS
          </span>
          <span className="block text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] xl:text-[112px]">
            Summit 2022–25
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 md:mt-10 max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed">
          Google ICS was a four-year multi-city journey across Leh, Goa, Udaipur, and
          Thiruvananthapuram—bringing together developer communities to celebrate impact,
          sustainability, and innovation through immersive learning, culture, and tech-powered
          engagement.
        </p>

        {/* Button */}
        <a
          href="https://www.youtube.com/watch?v=u3qroNabo0o"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-10 md:mt-12
            inline-flex items-center justify-center
            px-10 md:px-14
            py-3.5 md:py-4
            rounded-full
            bg-white text-black
            text-[10px] sm:text-xs md:text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            border border-white
            transition-colors duration-300
            hover:bg-black hover:text-white
          "
        >
          Live Preview
        </a>
      </div>
    </section>
  );
};

export default GoogleText;
