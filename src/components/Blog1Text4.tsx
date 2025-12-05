import React from "react";

const Blog1Text4: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center px-6 sm:px-10 py-20 relative"
      style={{
        backgroundColor: "#050505",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "6px 6px",
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      {/* Center vertical divider */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 pointer-events-none" />

      {/* Center white dot */}
      <div className="hidden md:block absolute left-1/2 top-[45%] -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)] pointer-events-none" />

      <div className="w-full max-w-6xl ml-auto text-white">
        {/* Heading */}
        <h2 className="text-[1.2rem] font-semibold mb-6">
          Concept
        </h2>

        {/* Paragraph */}
        <p className="max-w-4xl text-[1rem] leading-[1.75] text-white/80">
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
