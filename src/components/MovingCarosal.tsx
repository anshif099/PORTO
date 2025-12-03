import React from "react";

// ✅ Replace these with your actual 12 image files
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
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const MovingCarosal: React.FC = () => {
  // we duplicate the images array to create an infinite loop look
  const loopImages = [...images, ...images];

  return (
    <section className="relative w-full bg-[#050505] py-10 sm:py-14 lg:py-20 overflow-hidden">
      {/* background pattern to match other sections */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#171717_1px,transparent_1px)] bg-[size:8px_8px] opacity-60 pointer-events-none " />

      {/* custom animation for infinite scroll */}
      <style>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .moving-track {
          animation: scroll-x 50s linear infinite;
        }
        .moving-track-paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Outer wrapper so hover pauses animation */}
        <div className="group overflow-hidden w-full opacity-100 overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]">
          <div className="flex w-max gap-6 sm:gap-8 lg:gap-10 moving-track group-hover:moving-track-paused">
            {loopImages.map((src, index) => (
              <div
                key={index}
                className="
                  relative rounded-[22px] overflow-hidden 
                  bg-black/60 border border-white/10 
                  shadow-[0_30px_70px_rgba(0,0,0,0.9)]
                  flex-shrink-0 
                  w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[28vw] 
                  aspect-[4/3]
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
    </section>
  );
};

export default MovingCarosal;
