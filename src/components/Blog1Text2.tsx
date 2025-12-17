import React from "react";

const Blog1Text2: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center px-6 sm:px-10 py-20"
      style={{
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      
      <div className="px-20 w-full max-w-6xl text-white">
        {/* Heading */}
        <h2 className="text-[24px] mb-6">
          Research
        </h2>

        {/* Paragraph */}
        <p className="max-w-4xl text-[18px] leading-[1.4em] text-[#808080]">
          The campaign was initiated to increase awareness and accessibility of
          the Google Cybersecurity Course for students across India. It aimed to
          address the skill gap in cybersecurity by reaching students through
          scholarship opportunities. The strategy included mapping student
          behavior, identifying relevant communication channels, and building
          credibility around the course’s value through institutional outreach.
        </p>
      </div>
    </section>
  );
};

export default Blog1Text2;
