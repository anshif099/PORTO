import React from "react";
import valueBoldInnovation from "../assets/value-bold-innovation.webp";
import valueStrategicImpact from "../assets/value-strategic-impact.webp";
import valueAuthenticEngagement from "../assets/value-authentic-engagement.webp";
import valueTechnicalExcellence from "../assets/value-technical-excellence.webp";

type ValueItem = {
  title: string;
  description: string;
  icon: string;
};

const values: ValueItem[] = [
  {
    title: "BOLD INNOVATION",
    description: "We create experiences that haven't been seen before.",
    icon: valueBoldInnovation,
  },
  {
    title: "STRATEGIC IMPACT",
    description: "We design every element with clear objectives",
    icon: valueStrategicImpact,
  },
  {
    title: "AUTHENTIC ENGAGEMENT",
    description:
      "We create genuine connections between brands and audiences",
    icon: valueAuthenticEngagement,
  },
  {
    title: "TECHNICAL EXCELLENCE",
    description:
      "Our production standards and technical capabilities employ the best-in-business.",
    icon: valueTechnicalExcellence,
  },
];

const Values: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-8 py-16"
      style={{
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      {/* Custom icon animations */}
      <style>
        {`
          @keyframes iconHandFloat {
            0%   { transform: translateY(0) rotate(0deg); }
            25%  { transform: translateY(-6px) rotate(-2deg); }
            50%  { transform: translateY(0) rotate(1deg); }
            75%  { transform: translateY(-4px) rotate(-1deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }

          @keyframes iconPenDraw {
            0%   { transform: translate(-3px, 2px) rotate(-3deg); }
            25%  { transform: translate(3px, -1px) rotate(2deg); }
            50%  { transform: translate(-2px, 1px) rotate(-2deg); }
            75%  { transform: translate(2px, -2px) rotate(1deg); }
            100% { transform: translate(-3px, 2px) rotate(-3deg); }
          }

          @keyframes iconPaletteWobble {
            0%   { transform: rotate(0deg) scale(1); }
            25%  { transform: rotate(-3deg) scale(1.02); }
            50%  { transform: rotate(2deg) scale(1.03); }
            75%  { transform: rotate(-2deg) scale(1.01); }
            100% { transform: rotate(0deg) scale(1); }
          }

          @keyframes iconEyeBlink {
            0%,
            12%,
            24%,
            100% { transform: scaleY(1) translateX(0); }
            6%   { transform: scaleY(0.1) translateX(0); }    /* quick blink */
            18%  { transform: scaleY(1) translateX(-2px); }   /* look left */
            21%  { transform: scaleY(1) translateX(2px); }    /* look right */
          }

          .icon-hand     { animation: iconHandFloat 3.4s ease-in-out infinite; transform-origin: 50% 80%; }
          .icon-pen      { animation: iconPenDraw 3s ease-in-out infinite; transform-origin: 50% 50%; }
          .icon-palette  { animation: iconPaletteWobble 3.6s ease-in-out infinite; transform-origin: 50% 50%; }
          .icon-eye      { animation: iconEyeBlink 4.2s ease-in-out infinite; transform-origin: 50% 50%; }
        `}
      </style>

      <div className="w-full max-w-6xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="uppercase tracking-[-0.04em] leading-none font-extrabold text-[101px] mb-12">
          OUR VALUES
        </h2>

        {/* Values row */}
        <div className="grid gap-y-12 gap-x-10 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {values.map((item, idx) => {
            const iconAnimClass =
              idx === 0
                ? "icon-hand"
                : idx === 1
                ? "icon-pen"
                : idx === 2
                ? "icon-palette"
                : "icon-eye";

            return (
              <div key={item.title} className="flex flex-col items-center max-w-xs">
                {/* Icon card */}
                <div className="w-[150px] h-[150px] md:w-[132px] md:h-[132px] rounded-[32px] bg-white flex items-center justify-center shadow-[0_18px_32px_rgba(0,0,0,0.55)] mb-6 tracking-[-0.02em] leading-[1em]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`w-[70%] h-[70%] object-contain ${iconAnimClass}`}
                  />
                </div>

                {/* Title */}
                <h3 className="uppercase font-bold text-[20px] md:text-[20px] tracking-[-0.02em] leading-[1em] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[19px] md:text-[19px] leading-[-0.02em] tracking-[-0.02em] text-white/90">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
