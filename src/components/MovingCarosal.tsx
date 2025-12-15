import React from "react";

// your 12 images
import img1 from "@/assets/carousel-1.jpg";
import img2 from "@/assets/carousel-2.jpg";
import img3 from "@/assets/carousel-3.jpg";
import img4 from "@/assets/carousel-4.jpg";
import img5 from "@/assets/carousel-5.jpg";
import img6 from "@/assets/carousel-6.jpg";
import img7 from "@/assets/carousel-7.jpg";
import img8 from "@/assets/carousel-8.jpg";
import img9 from "@/assets/carousel-9.jpg";
import img10 from "@/assets/carousel-10.jpg";
import img11 from "@/assets/carousel-11.jpg";
import img12 from "@/assets/carousel-12.jpg";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
];

const MovingCarosal: React.FC = () => {
  const loopImages = [...images, ...images];

  return (
    
    <section className="w-full text-white font-sans overflow-hidden relative bg-framer-pattern z-20">

      {/* ⭐ TOP clean horizontal line */}
      <div className="relative z-30 w-full h-[1px] bg-white/10" />

      {/* Animation */}
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .moving-track {
          animation: scroll-x 50s linear infinite;
        }
        .moving-track-paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-10">
        <div
          className="group overflow-hidden w-full opacity-100 
          [mask-image:linear-gradient(to_right,
          rgba(0,0,0,0)_0%,
          rgb(0,0,0)_12.5%,
          rgb(0,0,0)_87.5%,
          rgba(0,0,0,0)_100%)]"
        >
          <div className="flex w-max gap-6 sm:gap-8 lg:gap-10 
            moving-track group-hover:moving-track-paused"
          >
            {loopImages.map((src, index) => (
              <div
                key={index}
                className="
                  relative rounded-[22px] overflow-hidden
                  bg-black/60 border border-white/10
                  shadow-[0_30px_70px_rgba(0,0,0,0.9)]
                  flex-shrink-0
                  w-[350px] h-[245px]
                "
              >
                <img
                  src={src}
                  alt={`carousel-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <br /><br />

      {/* ⭐ BOTTOM clean horizontal line */}
      <div className="relative z-30 w-full h-[1px] bg-white/10" />
    </section>
  );
};

export default MovingCarosal;
