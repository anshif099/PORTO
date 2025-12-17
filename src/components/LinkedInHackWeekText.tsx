import React from "react";

const AmazewitText: React.FC = () => {
  return (
    <section
      className="w-full py-20 flex items-center justify-center text-white font-clash px-6"
      style={{
       
      }}
    >
      <div className="max-w-[820px] w-full text-center space-y-8">

        {/* DATE */}
        <p className="text-[12px] tracking-[-0.02em] uppercase text-[#808080]">
          April 3, 2023
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
          lg:text-[120px]
        ">
          LinkedIn <br></br> HackWeek
        </h1>

        {/* DESCRIPTION */}
        <div className="space-y-6 text-[#808080] text-[20px] sm:text-[20px] leading-relaxed">

          <p>
            LinkedIn Hack Week 2025, hosted on January 15th and 16th at the LinkedIn Bangalore <br></br>
            office, was a high-impact internal engagement program designed to foster innovation,<br></br>
            teamwork, and creativity among employees. The event brought together diverse teams to <br></br>
            collaborate on breakthrough ideas through a mix of hackathon sessions, interactive <br></br>
            activities, and competitive challenges. Aimed at energizing the workforce and promoting a <br></br>
            culture of experimentation, the event blended tech innovation with hands-on experiences <br></br>
            in a vibrant and inclusive setting.
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
              text-[18px]
              sm:text-[18px]
              tracking-[-0.02em]
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
