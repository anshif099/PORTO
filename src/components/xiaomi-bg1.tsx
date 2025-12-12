// GoogleBg1.tsx
import React, { useEffect, useRef, useState } from "react";
import googleBg1 from "@/assets/xiaomi-bg1.png"; // <- change to your image file

const GoogleBg1: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>("translateY(0px) scale(1)");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Distance of the image center from the viewport center (-1 to 1)
      const centerOffset =
        (viewportHeight / 2 - (rect.top + rect.height / 2)) / viewportHeight;

      // Clamp between -1 and 1
      const clamped = Math.max(-1, Math.min(1, centerOffset));

      // Parallax amount
      const translateY = clamped * -30; // px
      const scale = 1 + Math.abs(clamped) * 0.04; // 1 to 1.04

      setTransformStyle(`translateY(${translateY}px) scale(${scale})`);
    };

    handleScroll(); // initial
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      className="
        w-full
        flex
        justify-center
        items-center
        px-4
        py-12
        md:py-16
        lg:py-20
      "
    >
      <div
        ref={containerRef}
        className="
          w-full
          max-w-[1500px]
          mx-auto
          rounded-2xl
          overflow-hidden
        "
        style={{
          transform: transformStyle,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src={googleBg1}
          alt="Google ICS cultural performance"
          className="
            w-full
            h-full
            object-cover
            block
            aspect-[16/9]
          "
        />
      </div>
    </section>
  );
};

export default GoogleBg1;
