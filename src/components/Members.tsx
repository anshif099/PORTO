import React, { useEffect } from "react";
import { User, Users, Zap, Layers } from "lucide-react";

export default function Members() {
  // Inject the Clash Display font into the document head
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const services = [
    {
      id: "01",
      title: "EXPERIENTIAL MARKETING",
      description:
        "We design multi-sensory brand experiences that forge emotional connections, drive engagement, and create lasting impressions that traditional marketing cannot achieve.",
      image:
        "https://images.unsplash.com/photo-1550948537-130a1ce83314?auto=format&fit=crop&q=80&w=400&h=400",
      dots: 1,
    },
    {
      id: "02",
      title: "CORPORATE EVENTS",
      description:
        "From executive summits to product launches, we craft sophisticated corporate gatherings that align with your business objectives while exceeding attendee expectations.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400&h=400",
      dots: 3,
    },
    {
      id: "03",
      title: "BRAND ACTIVATIONS",
      description:
        "We bring brands to life through interactive installations, pop-up experiences, and guerrilla marketing campaigns that generate authentic engagement and social amplification.",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=400&h=400",
      dots: 3,
    },
    {
      id: "04",
      title: "COMMUNITY ENGAGEMENT",
      description:
        "We build, nurture, and immerse the world's largest tech, developer, and student communities through tailored experiences.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=400",
      dots: 4,
    },
  ];

  return (
    <section className="w-full text-white font-sans overflow-hidden relative">
      <style>{`
        :root {
          --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
          --token-4695e61d-48ec-4e1b-ae93-f5b8f9dc2f6c: rgb(41, 41, 41);
        }
        .font-clash {
          font-family: var(--framer-font-family);
        }
      `}</style>

      {/* subtle grid background placeholder */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-12">
        {/* Top badges row for lg (keeps same as earlier) */}
        <div className="hidden lg:flex justify-between items-center absolute left-6 right-6 top-6 z-20 pointer-events-none w-[700px] m-auto">
          {services.map((s) => (
            <div key={s.id} className="flex-1 flex justify-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-[12px] font-medium text-white font-clash bg-[#292929]">
                {s.id}
              </span>
            </div>
          ))}
        </div>

        {/* outer framed box to match screenshot look */}
        <div className="border border-white/5 p-6 py-20">
          {/* Cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0">
            {services.map((service, idx) => (
              <article
                key={service.id}
                className="relative group flex flex-col items-center text-center px-6 py-12 lg:py-16 lg:px-8 border border-transparent lg:border-l lg:border-white/5"
                // add subtle left divider for all but first on lg
                style={
                  idx === 0
                    ? {}
                    : { boxShadow: " rgba(10, 8, 8, 0.03)" }
                }
              >
                {/* top small carousel/dot indicators */}
                <div className="mb-4 flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i < service.dots ? "bg-white" : "bg-white"
                      }`}
                    />
                  ))}
                </div>

                {/* small avatar */}
                <div className="w-14 h-14 rounded-md overflow-hidden mb-6 shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="font-clash text-[20px] md:text-[22px] lg:text-[22px] font-medium uppercase tracking-wide mb-6 leading-tight text-white max-w-[260px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-clash text-[18px] leading-relaxed text-gray-400 max-w-[300px]">
                  {service.description}
                </p>

                {/* vertical divider line on desktop between cards (visual only) */}
                {idx !== services.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-6 h-[calc(100%-48px)] w-[1px] bg-gradient-to-b from-transparent via-white/6 to-transparent" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
