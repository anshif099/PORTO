import React from "react";
import teamImage from "@/assets/team-photo.jpg"; // <- change to your actual file name

const Bg5: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center px-4 sm:px-8 lg:px-20 py-10 sm:py-14 lg:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#171717_1px,transparent_1px)] bg-[size:8px_8px] opacity-60" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto">
        {/* Card holding the image */}
        <div
          className="
            w-full 
            rounded-[28px] 
            overflow-hidden 
            border border-white/10 
            bg-black/70 
            shadow-[0_40px_90px_rgba(0,0,0,0.9)]
          "
          // Aspect ratio close to screenshot (1603 x 768 ≈ 2.08:1)
          style={{ aspectRatio: "1603 / 768" }}
        >
          <img
            src={teamImage}
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Bg5;
