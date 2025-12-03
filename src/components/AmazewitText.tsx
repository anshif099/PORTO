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
          July 12, 2023
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
          AMAZEWIT
        </h1>

        {/* DESCRIPTION */}
        <div className="space-y-6 text-white/60 text-[13px] sm:text-[14px] leading-relaxed">

          <p>
            AmazeWIT is Amazon's flagship initiative to celebrate and empower women in technology.
            The 2023 edition, held on 1st August at Sheraton Grand, Whitefield, Bangalore, brought together over
            400 attendees for a day of inspiration, connection, and innovation under the theme:
            "Empowering Inclusion, Fostering Belonging."
            The event focused on showcasing real stories, Amazon’s internal tech journeys, and creating a space where women felt seen, heard, and celebrated.
          </p>

          <p>
            The agenda featured keynote addresses, fireside chats, tech talks, demos,
            and networking activities — all designed to nurture a sense of community and amplify diverse voices in technology.
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
