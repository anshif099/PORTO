import React from "react";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import amazonPxt from "@/assets/amazon-pxt.jpg";      // Left
import xiaomiCivi from "@/assets/xiaomi-civi.jpg";    // Right

const Bg4: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-14 gap-16">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#1a1a1a_1px,transparent_1px)] bg-[size:7px_7px] opacity-50" />

      {/* Inter Display Font */}
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", "Inter Display Placeholder", system-ui, sans-serif;
        }
      `}</style>

      {/* GRID */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start">

        {/* LEFT CARD (Amazon PXT) */}
        <div className="flex flex-col items-start">
          <div
            className="group w-full lg:w-[560px] rounded-[26px] overflow-hidden border border-white/10
                       shadow-[0_40px_90px_rgba(0,0,0,0.9)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_40px_90px_rgba(255,255,255,0.1)] cursor-pointer"
            style={{ aspectRatio: "560 / 360" }}
            onClick={() => navigate("/AmazonPXT")}
          >
            <img
              src={amazonPxt}
              alt="Amazon PXT Summit"
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
            />
          </div>

          <div className="mt-4 flex items-center justify-between w-full lg:max-w-[560px] text-white font-inter-display">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
            </div>

            <p className="text-[18px]">Amazon PXT Summit</p>
            <button
              type="button"
              aria-label="Next"
              className="flex items-center justify-center shrink-0 rounded-full p-1.5 transition-colors duration-300 hover:bg-white hover:text-black"
              onClick={() => navigate("/AmazonPXT")}
            >
              <MoveRight size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT CARD → FIXED SIZE */}
        <div className="flex flex-col items-start lg:items-end">
          <div
            className="group w-full lg:w-[600px] rounded-[26px] overflow-hidden border border-white/10
                       shadow-[0_40px_90px_rgba(0,0,0,0.9)] transition-all duration-500 hover:scale-[1.03] cursor-pointer"
            style={{ aspectRatio: "600 / 459" }}
            onClick={() => navigate("/Xiaomi")}
          >
            <img
              src={xiaomiCivi}
              alt="Xiaomi 14 Civi Launch"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-4 flex items-center justify-between w-full lg:max-w-[600px] text-white font-inter-display">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
            </div>

            <p className="text-[18px]">Xiaomi 14 Civi Launch</p>
            <button
              type="button"
              aria-label="Next"
              className="flex items-center justify-center shrink-0 rounded-full p-1.5 transition-colors duration-300 hover:bg-white hover:text-black"
              onClick={() => navigate("/Xiaomi")}
            >
              <MoveRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <button
  className="
    relative z-10 mt-4 px-8 py-3 rounded-full 
    bg-white text-black font-semibold tracking-widest 
    border border-black
    transition-all duration-300
    hover:bg-black hover:text-white hover:border-white
    hover:scale-105
  "
>
  LATEST PROFILE
</button>


    </section>
  );
};

export default Bg4;
