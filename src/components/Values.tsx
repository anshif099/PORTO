import React from "react";

type ValueItem = {
  title: string;
  description: string;
  icon: string;
};

const values: ValueItem[] = [
  {
    title: "BOLD INNOVATION",
    description: "We create experiences that haven't been seen before.",
    icon: "src/assets/value-bold-innovation.webp", // hand + bulb
  },
  {
    title: "STRATEGIC IMPACT",
    description: "We design every element with clear objectives",
    icon: "src/assets/value-strategic-impact.webp", // pen tool
  },
  {
    title: "AUTHENTIC ENGAGEMENT",
    description:
      "We create genuine connections between brands and audiences",
    icon: "src/assets/value-authentic-engagement.webp", // palette
  },
  {
    title: "TECHNICAL EXCELLENCE",
    description:
      "Our production standards and technical capabilities employ the best-in-business.",
    icon: "src/assets/value-technical-excellence.webp", // eye
  },
];

const Values: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-8 py-16"
      style={{
        backgroundColor: "#050505",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "6px 6px",
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
        <h2 className="uppercase tracking-[0.16em] leading-none font-extrabold text-[clamp(2.4rem,5vw,4.4rem)] mb-12">
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
                <div className="w-[150px] h-[150px] md:w-[170px] md:h-[170px] rounded-[32px] bg-white flex items-center justify-center shadow-[0_18px_32px_rgba(0,0,0,0.55)] mb-6">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`w-[70%] h-[70%] object-contain ${iconAnimClass}`}
                  />
                </div>

                {/* Title */}
                <h3 className="uppercase font-extrabold text-[0.95rem] md:text-[1rem] tracking-[0.12em] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed text-white/90">
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
