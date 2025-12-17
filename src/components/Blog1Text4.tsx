import React from "react";

const Blog1Text4: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center px-6 sm:px-10 py-20 relative"
      style={{
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      {/* Center vertical divider */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 pointer-events-none" />

      <div className="px-20 w-full max-w-6xl ml-auto text-white">
        {/* Heading */}
        <h2 className="text-[24px] mb-6">
          Concept
        </h2>

        {/* Paragraph */}
        <p className="max-w-4xl text-[18px] leading-[1.4] text-[#808080]"
        style={{
        fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
      }}>
          We adopted a multi-pronged outreach strategy. This included direct
          engagement with colleges through seminars, posters, and speaker
          sessions; targeted digital campaigns across email, WhatsApp, and
          social media; influencer tie-ups with aligned messaging; and
          development of GIFs and infographics for strong visual storytelling.
          Testing and iteration helped refine and amplify the campaign impact.
        </p>
      </div>
    </section>
  );
};

export default Blog1Text4;
