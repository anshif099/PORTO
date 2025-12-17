import React from "react";

const AmazewitText: React.FC = () => {
  return (
    <section
      className="w-full py-20 flex items-center justify-center text-white font-clash px-6"
    >
      <div className="max-w-[820px] w-full text-center space-y-8">

        {/* DATE */}
        <p className="text-[12px] tracking-[-0.02em] uppercase text-[#808080] font-[500px]">
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
          lg:text-[120px]
        ">
          AMAZEWIT
        </h1>

        {/* DESCRIPTION */}
        <div className="space-y-6 text-[#808080] text-[20px] sm:text-[20px] leading-relaxed">

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
