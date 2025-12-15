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

const DotRow: React.FC<{ active: number }> = ({ active }) => (
  <div className="hidden md:flex items-center gap-2 w-[120px]">
    {[1, 2, 3, 4, 5].map((n) => (
      <span
        key={n}
        className={`h-2.5 w-2.5 rounded-full ${
          n <= active ? "bg-white" : "bg-white/25"
        }`}
      />
    ))}
  </div>
);

const DropDown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full text-white font-sans bg-framer-pattern relative overflow-hidden">
      <style>{`
        .font-inter-display {
          font-family: "Inter Display", "Inter Display Placeholder", system-ui, sans-serif;
        }
      `}</style>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 font-inter-display">
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr,2fr] gap-16">
          <div className="hidden md:block" />

          <div className="border-t border-white/5">
            {services.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <div key={item.title} className="border-b border-white/10 py-6">
                  {/* HEADER */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-6"
                  >
                    <DotRow active={item.dotsActive} />

                    <div className="flex-1 text-left">
                      <h3 className="text-[18px] font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[12px] tracking-[0.12em] uppercase text-white/60">
                        {item.subtitle}
                      </p>
                    </div>

                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  {/* EXPANDED */}
                  {isOpen && (
                    <div className="pl-[140px] mt-8 grid grid-cols-1 md:grid-cols-[360px,1fr] gap-10 items-start">
                      
                      {/* LEFT: IMAGE BELOW SUBTITLE */}
                      <div className=" w-full h-[230px] rounded-[22px] overflow-hidden bg-black/60 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* RIGHT: BULLETS */}
                      <ul className="space-y-3 text-[12px] leading-relaxed">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <Check className="h-4 w-4 mt-0.5 shrink-0" />
                            <span className="uppercase tracking-[0.08em] text-[rgb(128,128,128)]">
                              {b}
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
