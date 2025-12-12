import React from "react";
import { useNavigate } from "react-router-dom";
import { useCursor } from "../contexts/CursorContext";

import img1 from "@/assets/google-ics.jpg"; // Google/ICS Summit 2022-25
import img2 from "@/assets/amaze-wit.jpg"; // Amaze WIT

const GoogleBg3: React.FC = () => {
  const { setIsHovering } = useCursor();
  const navigate = useNavigate();
  return (
    <section className="relative w-full overflow-hidden py-10">

      <div className="mx-auto max-w-[1600px] w-full px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT IMAGE */}
          <div
            className="w-full group cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => navigate('/Google')}
          >
            <div className="relative aspect-[16/11] rounded-xl overflow-hidden transition duration-500 ease-out">

              <img
                src={img1}
                alt="Amaze WIT"
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
                draggable={false}
              />

              {/* Dark Layer on hover */}
              <div className="
                absolute inset-0 bg-black/0 
                transition duration-500 
                group-hover:bg-black/20
              " />
            </div>

            {/* Pagination + title */}
            <div className="mt-4 flex items-center justify-between text-white text-sm tracking-wide">
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500/40"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500/40"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500/40"></span>
              </div>

              <span className="group-hover:opacity-80 transition">Google/ICS Summit 2022-25</span>

              <span className="text-xl group-hover:translate-x-1 transition">→</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="w-full group cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => navigate('/AmazeWit')}
          >
            <div className="relative aspect-[16/11] rounded-xl overflow-hidden transition duration-500 ease-out">

              <img
                src={img2}
                alt="LinkedIn HackWeek"
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
                draggable={false}
              />

              {/* Dark Layer on hover */}
              <div className="
                absolute inset-0 bg-black/0 
                transition duration-500 
                group-hover:bg-black/20
              " />
            </div>

            {/* Pagination + title */}
            <div className="mt-4 flex items-center justify-between text-white text-sm tracking-wide">
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500/40"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500/40"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500/40"></span>
              </div>

              <span className="group-hover:opacity-80 transition">
                Amaze WIT
              </span>

              <span className="text-xl group-hover:translate-x-1 transition">→</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GoogleBg3;
