import React, { useEffect, useState } from "react";

const Blog1Bg2: React.FC = () => {
  const [scale, setScale] = useState(1.2);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight || 1;
      const progress = Math.min(window.scrollY / vh, 1); // 0 → 1
      const nextScale = 1.2 - progress * 0.2; // 1.2 → 1.0
      setScale(nextScale);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-full flex justify-center items-center px-4 sm:px-8 py-16 relative overflow-hidden"
      style={{
        backgroundColor: "#050505",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "6px 6px",
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 h-[65vh] md:h-[70vh]">
          {/* LEFT IMAGE */}
          <div className="w-full h-full rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
            <img
              src="src/assets/blog4-bg2-left.jpg" // replace with your left image path
              alt="Cybersecurity event crowd"
              className="w-full h-full object-cover will-change-transform transition-transform duration-75 ease-out"
              style={{ transform: `scale(${scale})` }}
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-full rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
            <img
              src="src/assets/blog4-bg2-right.jpg" // replace with your right image path
              alt="Cybersecurity Roadshows stage"
              className="w-full h-full object-cover will-change-transform transition-transform duration-75 ease-out"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog1Bg2;
