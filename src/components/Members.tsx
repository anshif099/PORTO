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
      dots: 2,
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
    <section className="w-full text-white font-sans overflow-hidden relative bg-framer-pattern z-20">
      <style>{`
        :root {
          --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
        }
        .font-clash {
          font-family: var(--framer-font-family);
        }
      `}</style>

     

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 ">

        {/* TOP BADGES ROW */}
        <div className="hidden lg:flex items-center absolute left-6 right-6 top-6 z-20 pointer-events-none w-[700px] m-auto">
          {services.map((s, idx) => (
            <React.Fragment key={s.id}>
              <div className="flex justify-center items-center">
                <span className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#292929] text-white font-clash font-semibold tracking-[0.15em] text-[12px]">
                  {s.id}
                </span>
              </div>

              {idx !== services.length - 1 && (
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-[175px] h-[1px] bg-white/10" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CONTENT */}
        <div className="pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0">
            {services.map((service, idx) => (
              <article
                key={service.id}
                className="
                  relative group flex flex-col items-center text-center
                  px-6 py-12 lg:py-16 lg:px-8
                  border border-white/10
                "
              >
                <div className="mb-4 flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full ${
                        i < service.dots ? "bg-white" : "bg-white/25"
                      }`}
                    />
                  ))}
                </div>

                <div className="w-10 h-10 rounded-[10px] overflow-hidden mb-6 shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-clash text-[20px] md:text-[22px] lg:text-[24px] font-medium uppercase tracking-wide mb-6 leading-tight text-white w-[275px]">
                  {service.title}
                </h3>

                <p className='[font-family:"Inter_Display","Inter_Display_Placeholder",sans-serif] text-sm md:text-[19px] text-[rgb(128,128,128)] font-normal leading-[1.3em] tracking-wide text-center w-[275px] h-[163.8px]'>
                  {service.description}
                </p>

              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
