import React from "react";
import { Link } from "react-router-dom";

const MainText5: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center items-center text-center py-20">

      {/* ❌ Background dots removed */}

      {/* Main Title */}
      <h1
        className="
          relative z-10
          font-semibold uppercase tracking-[-0.02em] leading-[0.75]
          text-white
          text-[clamp(42px,8vw,120px)]
        "
      >
        LET'S WORK
        <br />
        TOGETHER
      </h1>

      {/* Button */}
      <Link to="/Contact">
        <button
          className="
            relative z-10 mt-20
            px-10 py-3 rounded-full
            bg-white text-black
            font-semibold tracking-widest text-[18px]
            transition-all duration-300
            hover:bg-black hover:text-white hover:border hover:border-white
          "
        >
          CONTACT NOW
        </button>
      </Link>
    </section>
  );
};

export default MainText5;
