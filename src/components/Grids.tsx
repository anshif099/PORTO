import React from "react";



const MovingCarosal: React.FC = () => {
  

  return (
    
    <section className="w-full text-white font-sans overflow-hidden relative z-20">

      {/* ⭐ TOP clean horizontal line */}
      <div className="relative z-30 w-full h-[1px] bg-white/10" />

      <br /><br />

      {/* ⭐ BOTTOM clean horizontal line */}
      <div className="relative z-30 w-full h-[1px] bg-white/10" />
    </section>
  );
};

export default MovingCarosal;
