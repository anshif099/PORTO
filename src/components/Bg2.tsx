import React from "react";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCursor } from "../contexts/CursorContext";

import googleIcs from "@/assets/google-ics.jpg";
import amazeWit from "@/assets/amaze-wit.jpg";

const Bg2: React.FC = () => {
  const navigate = useNavigate();
  const { setIsHovering } = useCursor();

  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center px-4 sm:px-8 lg:px-20">

      {/* background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#1a1a1a_1px,transparent_1px)] bg-[size:7px_7px] opacity-50" />

      {/* FONT */}
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", "Inter Display Placeholder", system-ui, sans-serif;
        }
      `}</style>

      {/* GRID LAYOUT */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start">

        {/* LEFT BIG CARD */}
        <div className="flex flex-col">
          <div
            className="group w-full lg:w-[610px] rounded-[26px] overflow-hidden border border-white/10 
                       shadow-[0_40px_90px_rgba(0,0,0,0.9)]
                       transition-all duration-500 hover:scale-[1.03]"
            style={{ aspectRatio: "610 / 459" }}
          >
            <img
              src={googleIcs}
              alt="Google / ICS Summit"
              className="w-full h-full object-cover"
              onClick={() => navigate('/Google')}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </div>

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between text-white font-inter-display">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white/30 rounded-full"></span>
              <span className="w-2 h-2 bg-white/30 rounded-full"></span>
              <span className="w-2 h-2 bg-white/30 rounded-full"></span>
              <span className="w-2 h-2 bg-white/30 rounded-full"></span>
            </div>

            <p className="text-[18px]">
              Google / ICS Summit 2022-25
            </p>

            <MoveRight size={20} onClick={() => navigate('/Google')} className="cursor-pointer" />
          </div>
        </div>

        {/* RIGHT SMALL LOWER CARD */}
        <div className="flex flex-col lg:mt-28 w-full lg:items-end">
          <div
            className="group w-full lg:w-[549px] rounded-[22px] overflow-hidden border border-white/10
                       shadow-[0_30px_70px_rgba(0,0,0,0.8)]
                       transition-all duration-500 hover:scale-[1.04]"
            style={{ aspectRatio: "549 / 279" }}
          >
            <img
              src={amazeWit}
              alt="Amaze WIT"
              className="w-full h-full object-cover"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </div>

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between text-white font-inter-display w-full lg:max-w-[549px]">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white/30 rounded-full"></span>
              <span className="w-2 h-2 bg-white/30 rounded-full"></span>
              <span className="w-2 h-2 bg-white/30 rounded-full"></span>
            </div>

            <p className="text-[18px]">
              Amaze WIT
            </p>

            <MoveRight size={20} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bg2;
