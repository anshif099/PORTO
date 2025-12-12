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
  dotsActive: number;
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

const DotRow: React.FC<{ active: number }> = ({ active }) => {
  return (
    <div className="hidden md:flex items-center justify-start gap-2 w-[120px]">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`block h-2.5 w-2.5 rounded-full transition-all ${
            n <= active ? "bg-white" : "bg-white/25"
          }`}
        />
      ))}
    </div>
  );
};

const DropDown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full text-white overflow-hidden bg-transparent">

      {/* Font */}
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", "Inter Display Placeholder", system-ui, sans-serif;
        }
      `}</style>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 font-inter-display">
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr,2fr] gap-10 md:gap-16">

          {/* Left Empty Space */}
          <div className="hidden md:block" />

          {/* Accordion */}
          <div className="space-y-1 border-t border-white/5">
            {services.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <div key={item.title} className="border-b border-white/10 pb-4 md:pb-6">
                  
                  {/* Header */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-6 pt-4 md:pt-6"
                  >
                    <DotRow active={item.dotsActive} />

                    <div className="flex-1 text-left">
                      <h3 className="text-[18px] md:text-[19px] font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] md:text-[12px] tracking-[0.12em] uppercase text-white/60">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Arrow */}
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  {/* Expanded */}
                  {isOpen && (
                    <div className="mt-6 flex flex-col md:flex-row gap-8 md:gap-10">
                      {/* Image */}
                      <div className="w-full md:w-[360px] rounded-[22px] overflow-hidden bg-black/60 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>

                      {/* Bullets */}
                      <ul className="flex-1 space-y-2.5 text-[13px] md:text-[14px] leading-relaxed">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-white/90">
                            <Check className="h-4 w-4 mt-0.5 shrink-0" />
                            <span className="uppercase tracking-[0.08em]">{b}</span>
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
