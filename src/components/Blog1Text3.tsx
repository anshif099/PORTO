import React from "react";

const Blog1Text3: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center px-6 sm:px-10 py-20"
      style={{
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      <div className="px-20 w-full max-w-6xl text-white">
        {/* Heading */}
        <h2 className="text-[24px]  mb-6">
          Development
        </h2>

        {/* Paragraph */}
        <p className="max-w-4xl text-[18px] leading-[1.3em] text-[#808080]"
        style={{
        fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
      }}>
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
