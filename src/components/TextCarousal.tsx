import React from "react";

const TextCarousal: React.FC = () => {
  const items = new Array(12).fill("MORE WORKS");

  return (
    <div className="relative w-full overflow-hidden bg-[#050505] py-6">

      {/* LEFT FOG */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 md:w-40 lg:w-56"
        style={{
          background:
            "linear-gradient(to right, rgba(5,5,5,1) 0%, rgba(5,5,5,0) 100%)",
        }}
      />

      {/* RIGHT FOG */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 md:w-40 lg:w-56"
        style={{
          background:
            "linear-gradient(to left, rgba(5,5,5,1) 0%, rgba(5,5,5,0) 100%)",
        }}
      />

      {/* MOVING TEXT */}
      <div className="flex whitespace-nowrap animate-text-marquee">
        <div className="flex">
          {[...items, ...items].map((text, index) => (
            <span
              key={index}
              className={`mx-8 text-[5vw] md:text-[4vw] lg:text-[64px] font-bold uppercase ${
                index % 2 === 0 ? "text-gray-500" : "text-white"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TextCarousal;
