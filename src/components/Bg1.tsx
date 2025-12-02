// src/components/bg1.tsx
import React from "react";
import bg1 from "@/assets/bg1.png"; // or .jpg – use your actual file name

const Bg1: React.FC = () => {
  return (
    <section className="w-full bg-black">
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <img
          src={bg1}
          alt="Stage background"
          className="
            w-full
            h-full
            max-h-screen
            object-contain
            pointer-events-none
            select-none
          "
        />
      </div>
    </section>
  );
};

export default Bg1;
