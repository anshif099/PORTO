import React from "react";

const Blog1Text3: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center px-6 sm:px-10 py-20"
      style={{
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      <div className="w-full max-w-6xl text-white">
        {/* Heading */}
        <h2 className="text-[1.2rem] font-semibold mb-6">
          Design
        </h2>

        {/* Paragraph */}
        <p className="max-w-4xl text-[1rem] leading-[1.75] text-white/80">
          The campaign design emphasized immersive storytelling and sustainable aesthetics. We incorporated eco-friendly materials like hemp paper, fabric 
          banners, and jute backdrops to align with the campaign’s values. The spatial layout supported interaction—featuring a Community Walk Display and 
          Interactive Panel Installation that encouraged active exploration and engagement. Each design element was crafted to reinforce the narrative of 
          inclusive urban planning and give voice to marginalized communities.
        </p>
      </div>
    </section>
  );
};

export default Blog1Text3;
