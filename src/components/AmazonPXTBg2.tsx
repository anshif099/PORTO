// GoogleBg2.tsx
import React, { useEffect, useRef, useState } from "react";

// ⬇️ Replace these with your actual image paths
import imgOne from "@/assets/amazonpxt-stage-1.png";
import imgTwo from "@/assets/amazonpxt-stage-2.png";
import imgThree from "@/assets/amazonpxt-stage-3.png";

type ZoomImageProps = {
  src: string;
  alt: string;
};

const ZoomImageSection: React.FC<ZoomImageProps> = ({ src, alt }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1.06); // start slightly zoomed-in

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // position of section center relative to viewport center (-1 to 1)
      const centerOffset =
        (viewportHeight / 2 - (rect.top + rect.height / 2)) / viewportHeight;

      const clamped = Math.max(-1, Math.min(1, centerOffset));

      // progress 0 (far) -> 1 (centered)
      const progress = 1 - Math.abs(clamped);
      const minScale = 1.0;
      const maxScale = 1.06;

      // when centered -> minScale, when offscreen -> maxScale
      const currentScale = maxScale - progress * (maxScale - minScale);
      setScale(currentScale);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="
        w-full
        max-w-[1500px]
        mx-auto
        rounded-3xl
        overflow-hidden
      "
      style={{
        transform: "translateZ(0)", // avoids jitter
      }}
    >
      <img
        src={src}
        alt={alt}
        className="
          w-full
          h-full
          block
          object-cover
          aspect-[16/9]
        "
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.4s ease-out",
        }}
      />
    </div>
  );
};

const GoogleBg2: React.FC = () => {
  return (
    <section
      className="
        w-full
        px-4
        md:px-8
        lg:px-10
        py-12
        md:py-16
        lg:py-20
        space-y-12
        md:space-y-16
        lg:space-y-20
        flex
        flex-col
        items-center
      "
    >
      <ZoomImageSection
        src={imgOne}
        alt="Google ICS lighting stage setup"
      />

      <ZoomImageSection
        src={imgTwo}
        alt="Google ICS music performance on stage"
      />

      <ZoomImageSection
        src={imgThree}
        alt="Google ICS cultural tiger body painting performance"
      />
    </section>
  );
};

export default GoogleBg2;
