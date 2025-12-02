import React, { useEffect } from 'react';
import { User, Users, Zap, Layers } from 'lucide-react';

export default function Members() {
  // Inject the font into the document head
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const services = [
    {
      id: "01",
      title: "EXPERIENTIAL MARKETING",
      description: "We design multi-sensory brand experiences that forge emotional connections, drive engagement, and create lasting impressions that traditional marketing cannot achieve.",
      image: "https://images.unsplash.com/photo-1550948537-130a1ce83314?auto=format&fit=crop&q=80&w=200&h=200", // Placeholder for the avatar/icon
      dots: 1 
    },
    {
      id: "02",
      title: "CORPORATE EVENTS",
      description: "From executive summits to product launches, we craft sophisticated corporate gatherings that align with your business objectives while exceeding attendee expectations.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=200&h=200",
      dots: 3
    },
    {
      id: "03",
      title: "BRAND ACTIVATIONS",
      description: "We bring brands to life through interactive installations, pop-up experiences, and guerrilla marketing campaigns that generate authentic engagement and social amplification.",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=200&h=200",
      dots: 4
    },
    {
      id: "04",
      title: "COMMUNITY ENGAGEMENT",
      description: "We build, nurture, and immerse the world's largest tech, developer, and student communities through tailored experiences.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200&h=200",
      dots: 4
    }
  ];

  return (
    <div className="w-full bg-[#050505] text-white font-sans overflow-hidden relative py-20">
      <style>{`
        :root {
          --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif;
        }
        .font-clash {
          font-family: var(--framer-font-family);
        }
      `}</style>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          
          {services.map((service, index) => (
            <div key={service.id} className="flex flex-col items-center text-center px-4 lg:px-6 relative group">
              
              {/* Number Badge (Top) */}
              <div className="mb-16 md:mb-24 lg:mb-32 w-full flex justify-center lg:justify-center">
                 <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-[10px] font-medium text-white/80 font-clash bg-black/50">
                   {service.id}
                 </span>
              </div>

              {/* Dotted Indicator above Image */}
              <div className="flex gap-1 mb-4 opacity-60">
                {[...Array(4)].map((_, i) => (
                   <div 
                     key={i} 
                     className={`w-1.5 h-1.5 rounded-full ${i < service.dots ? 'bg-white' : 'bg-white/20'}`}
                   />
                ))}
              </div>

              {/* Image/Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="font-clash text-lg md:text-xl lg:text-[22px] font-medium uppercase tracking-wide mb-6 text-white leading-tight max-w-[200px]">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h3>

              {/* Description */}
              <p className="font-clash text-sm text-gray-400 leading-relaxed tracking-wide max-w-[280px] opacity-80">
                {service.description}
              </p>

              {/* Divider Line (Mobile/Tablet only, or specific layout requirement) */}
              {/* Adding a subtle separator for mobile view if items are stacked */}
              <div className="lg:hidden w-12 h-[1px] bg-white/10 mt-12"></div>
              
              {/* Vertical Divider for Desktop (Optional, based on image grid look) */}
              {index !== services.length - 1 && (
                 <div className="hidden lg:block absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
              )}

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}