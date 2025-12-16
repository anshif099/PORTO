// src/components/bg1.tsx
import React from "react";
import bg1 from "@/assets/bg1.png"; // or .jpg – use your actual file name

const Bg1: React.FC = () => {
  return (
    <section className="w-full ">
      <div className="relative flex items-center justify-center overflow-hidden py-20">
        <img
          src={bg1}
          alt="Stage background"
          className="
            w-[1420px]
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
