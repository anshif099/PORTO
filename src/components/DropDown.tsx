import React, { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

import liveEventsImg from "@/assets/live-events.jpg";
import virtualEventsImg from "@/assets/virtual-events.jpg";
import destinationsImg from "@/assets/destinations.jpg";
import brandStrategyImg from "@/assets/brand-strategy.jpg";
import mediaFilmImg from "@/assets/media-film.jpg";

type ServiceItem = {
  title: string;
  subtitle: string;
  dotsActive: number; // how many dots are white
  image: string;
  bullets: string[];
};

const services: ServiceItem[] = [
  {
    title: "Live Events",
    subtitle:
      "IMMERSIVE, IN-PERSON EXPERIENCES DESIGNED FOR DIRECT AUDIENCE ENGAGEMENT.",
    dotsActive: 1,
    image: liveEventsImg,
    bullets: [
      "Launches",
      "Employee Engagement",
      "Festivals & Concerts",
      "MICE (Meetings, Incentives, Conferences & Expos)",
      "Activations",
    ],
  },
  {
    title: "Virtual Events",
    subtitle:
      "ONLINE GATHERINGS LEVERAGING DIGITAL PLATFORMS FOR REMOTE PARTICIPATION.",
    dotsActive: 2,
    image: virtualEventsImg,
    bullets: [
      "Virtual Summits & Conferences",
      "Webinars",
      "Digital Product Launches",
      "E-Learning Workshops",
      "Video-on-Demand",
    ],
  },
  {
    title: "Destinations",
    subtitle:
      "EVENTS HELD IN UNIQUE LOCATIONS, OFTEN FOR INCENTIVE OR CELEBRATORY PURPOSES.",
    dotsActive: 3,
    image: destinationsImg,
    bullets: [
      "Bespoke Business Conferences",
      "Customized Travel Incentives",
      "Travel Management",
      "Event Concepts",
      "Destination Weddings",
    ],
  },
  {
    title: "Brand Strategy",
    subtitle:
      "DEFINING AND COMMUNICATING A BRAND'S CORE IDENTITY AND VALUES.",
    dotsActive: 4,
    image: brandStrategyImg,
    bullets: [
      "Visual Identity",
      "Campaign Development",
      "Brand Messaging",
      "Brand Collaborations",
      "Experiential Centers",
    ],
  },
  {
    title: "Media & Film Production",
    subtitle:
      "CREATING VISUAL CONTENT FOR ENTERTAINMENT, MARKETING, OR INFORMATIONAL PURPOSES.",
    dotsActive: 5,
    image: mediaFilmImg,
    bullets: [
      "Animations",
      "Anthems",
      "Curtain Raiser Films",
      "Brand Films",
      "AR, VR & AI",
    ],
  },
];

const DropDown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full py-20 bg-[#050505] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#171717_1px,transparent_1px)] bg-[size:9px_9px] opacity-60" />

      {/* Inter Display font */}
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", "Inter Display Placeholder", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-16 font-inter-display">
        {/* Two-column layout, left mostly empty like screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr,2fr] gap-10 md:gap-16">
          {/* Left spacer column (keeps content pushed right) */}
          <div className="hidden md:block" />

          {/* Right: accordion list */}
          <div className="space-y-1 border-t border-white/5">
            {services.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className="border-b border-white/10 pb-4 md:pb-6"
                >
                  {/* Header row */}
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-center justify-between gap-6 pt-4 md:pt-6"
                  >
                    {/* Dots on the far left */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {Array.from({ length: 5 }).map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`h-2 w-2 rounded-full ${
                            dotIdx < item.dotsActive
                              ? "bg-white"
                              : "bg-white/25"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Text block */}
                    <div className="flex-1 text-left">
                      <h3 className="text-[18px] md:text-[19px] font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] md:text-[12px] tracking-[0.12em] uppercase text-white/60">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Arrow + state dot on the right */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`h-2.5 w-2.5 rounded-full border border-white transition-all ${
                          isOpen ? "bg-white" : "bg-transparent opacity-60"
                        }`}
                      />
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="mt-6 flex flex-col md:flex-row gap-8 md:gap-10">
                      {/* Image card */}
                      <div className="w-full md:w-[360px] rounded-[22px] overflow-hidden bg-black/60 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Bullet list with checkmarks */}
                      <ul className="flex-1 space-y-2.5 text-[13px] md:text-[14px] leading-relaxed">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-white/90"
                          >
                            <Check className="h-4 w-4 mt-0.5 shrink-0" />
                            <span className="uppercase tracking-[0.08em]">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DropDown;
