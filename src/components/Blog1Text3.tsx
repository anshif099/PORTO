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
          Development
        </h2>

        {/* Paragraph */}
        <p className="max-w-4xl text-[1rem] leading-[1.75] text-white/80">
          Key challenges included low awareness among students, difficulties in
          reaching a wide college network, securing influencer endorsements, and
          crafting digital content that clearly communicated the course’s value.
          Creating consistency in engagement and content across diverse channels
          and institutions was a significant hurdle.
        </p>
      </div>
    </section>
  );
};

export default Blog1Text3;
