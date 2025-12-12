import React from "react";
import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import amazonPxt from "@/assets/amazon-pxt.jpg";      
import xiaomiCivi from "@/assets/xiaomi-civi.jpg";

const Bg4: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-20 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 gap-16">

     

      {/* font */}
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", system-ui, sans-serif;
        }
      `}</style>

      {/* GRID (auto columns & centered) */}
      <div className="relative z-10 w-full max-w-[1500px] grid gap-x-36 gap-y-16 items-end justify-center lg:[grid-template-columns:auto_auto]">

        {/* LEFT CARD - FIXED SIZE 518×279 */}
        <div className="flex flex-col justify-end">
          <div
            className="group rounded-[26px] overflow-hidden border border-white/10
                       shadow-[0_40px_80px_rgba(0,0,0,0.8)]
                       transition-all duration-500 hover:scale-[1.03] cursor-pointer"
            style={{ width: "518px", height: "279px" }}
            onClick={() => navigate("/AmazonPXT")}
          >
            <img
              src={amazonPxt}
              alt="Amazon PXT Summit"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between w-full text-white font-inter-display" style={{ width: "518px" }}>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
            </div>

            <p className="text-[18px]">Amazon PXT Summit</p>
            <MoveRight size={20} onClick={() => navigate("/AmazonPXT")} className="cursor-pointer" />
          </div>
        </div>

        {/* RIGHT CARD - FIXED SIZE 700×459 */}
        <div className="flex flex-col justify-end">
          <div
            className="group rounded-[26px] overflow-hidden border border-white/10
                       shadow-[0_40px_90px_rgba(0,0,0,0.9)]
                       transition-all duration-500 hover:scale-[1.03] cursor-pointer"
            style={{ width: "700px", height: "459px" }}
            onClick={() => navigate("/Xiaomi")}
          >
            <img
              src={xiaomiCivi}
              alt="Xiaomi 14 Civi Launch"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between w-full text-white font-inter-display" style={{ width: "700px" }}>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white/30 rounded-full" />
            </div>

            <p className="text-[18px]">Xiaomi 14 Civi Launch</p>
            <MoveRight size={20} onClick={() => navigate("/Xiaomi")} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <Link to="https://docs.google.com/presentation/d/1hd7tlaGOBHem6UjJ5yCB6ub09TKteYDRv0Ehlx87L6E/edit?usp=sharing">
        <button
          className="
            relative z-10 mt-4 px-8 py-3 rounded-full 
            bg-white text-black font-semibold tracking-widest 
            border border-black transition-all duration-300
            hover:bg-black hover:text-white hover:border-white hover:scale-105
          "
        >
          LATEST PROFILE
        </button>
      </Link>

    </section>
  );
};

export default Bg4;
