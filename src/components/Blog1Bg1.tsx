import React, { useEffect, useState } from "react";
import blog1HeroCybersecurity from "../assets/blog1-hero-cybersecurity.jpg";

const Blog1Bg1: React.FC = () => {
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
      className="w-full min-h-screen flex justify-center items-center px-0 sm:px-0 py-0 relative overflow-hidden"
      style={{
        backgroundColor: "#050505",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "6px 6px",
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      <div className="w-full h-screen">
        <div className="w-full h-full rounded-none sm:rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
          <img
            src={blog1HeroCybersecurity}
            alt="Cybersecurity Roadshows"
            className="w-full h-full object-cover will-change-transform transition-transform duration-75 ease-out"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog1Bg1;
