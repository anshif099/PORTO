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
    <section className="relative w-full py-20 flex items-center justify-center px-4 sm:px-8 lg:px-20">
      
      {/* FONT */}
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", "Inter Display Placeholder", system-ui, sans-serif;
        }
      `}</style>

      {/* GRID LAYOUT */}
      {/* key: use auto columns and center the grid so columns don't stretch apart */}
      <div className="relative z-10 w-full max-w-[1400px] grid gap-x-36 gap-y-16 items-end justify-center lg:[grid-template-columns:repeat(2,auto)]">

        {/* LEFT BIG CARD */}
        <div className="flex flex-col justify-end">
          <div
            className="group w-full lg:w-[710px] rounded-[26px] overflow-hidden border border-white/10 
                       shadow-[0_40px_90px_rgba(0,0,0,0.9)]
                       transition-all duration-500 hover:scale-[1.03]"
            style={{ aspectRatio: "610 / 459" }}
            role="button"
            onClick={() => navigate("/Google")}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={googleIcs}
              alt="Google / ICS Summit"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between text-white font-inter-display w-full lg:max-w-[610px]">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
            </div>

            <p className="text-[18px]">Google / ICS Summit 2022-25</p>

            <MoveRight
              size={20}
              onClick={() => navigate("/Google")}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* RIGHT SMALL LOWER CARD */}
        <div className="flex flex-col justify-end">
          <div
            className="group w-full lg:w-[525px] rounded-[22px] overflow-hidden border border-white/10
                       shadow-[0_30px_70px_rgba(0,0,0,0.8)]
                       transition-all duration-500 hover:scale-[1.04]"
            style={{ aspectRatio: "549 / 279" }}
          >
            <img
              src={amazeWit}
              alt="Amaze WIT"
              className="w-full h-full object-cover object-[80%_0%]"
              onClick={() => navigate("/AmazeWit")}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              draggable={false}
            />
          </div>

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between text-white font-inter-display w-full lg:max-w-[549px]">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
            </div>

            <p className="text-[18px]">Amaze WIT</p>

            <MoveRight
              size={20}
              onClick={() => navigate("/AmazeWit")}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bg2;
