import React from "react";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import linkedinHackweek from "@/assets/linkedin-hackweek.jpg"; // change name if needed

const Bg3: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center px-4 sm:px-8 lg:px-20">
      {/* background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#1a1a1a_1px,transparent_1px)] bg-[size:7px_7px] opacity-50" />

      {/* Inter Display font */}
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", "Inter Display Placeholder", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl flex items-center justify-center">
        <article className="flex flex-col items-center w-full max-w-[610px]">
          {/* image card */}
          <div
            className="group w-full rounded-[26px] overflow-hidden border border-white/10
                       shadow-[0_40px_90px_rgba(0,0,0,0.9)]
                       transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_40px_90px_rgba(255,255,255,0.1)] cursor-pointer"
            style={{ aspectRatio: "610 / 459" }}
            onClick={() => navigate("/LinkedInHackWeek")}
          >
            <img
              src={linkedinHackweek}
              alt="LinkedIn HackWeek"
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
            />
          </div>

          {/* footer: dots + title + arrow */}
          <div className="mt-4 flex items-center justify-between w-full text-white font-inter-display">
            {/* dots */}
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
            </div>

            {/* title */}
            <p className="text-[18px] leading-tight text-center flex-1">
              LinkedIn HackWeek
            </p>

            {/* arrow */}
            <button
              type="button"
              aria-label="Next"
              className="flex items-center justify-center shrink-0 rounded-full p-1.5 transition-colors duration-300 hover:bg-white hover:text-black"
              onClick={() => navigate("/LinkedInHackWeek")}
            >
              <MoveRight className="w-5 h-5" />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Bg3;
