// GoogeData.tsx
import React from "react";

const GoogeData: React.FC = () => {
  return (
    <section
      className="
        w-full
       
        text-white
        px-6
        md:px-16
        lg:px-24
        py-16
        md:py-24
      "
      style={{
        fontFamily: '"Clash Display", "Clash Display Placeholder", sans-serif',
      }}
    >
      <div className="max-w-[1400px] mx-auto">

        {/* ───── Top Meta Row: YEAR / CLIENT / CATEGORY / PRODUCT DURATION ───── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-12 border-b border-white/10 pb-16 md:pb-20">
          {/* YEAR */}
          <div>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Year
            </p>
            <p className="text-[26px] md:text-[30px] leading-none">2023</p>
          </div>

          {/* CLIENT */}
          <div>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Client
            </p>
            <p className="text-[20px] md:text-[22px] leading-tight">
              LinkedIn
            </p>
          </div>

          {/* CATEGORY */}
          <div>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Category
            </p>
            <p className="text-[20px] md:text-[22px] leading-tight">
              Linkedin Facility Team
            </p>
          </div>

          {/* PRODUCT DURATION */}
          <div>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Product Duration
            </p>
            <p className="text-[22px] md:text-[26px] leading-none">48 Hrs</p>
          </div>
        </div>

        {/* ───── RESEARCH Block ───── */}
        <div className="pt-16 md:pt-20 border-b border-white/10 pb-16 md:pb-20">
          <div className="flex flex-col md:flex-row gap-10 md:gap-24">
            {/* Left label */}
            <div className="md:w-1/3">
              <p className="text-[12px] md:text-[13px] font-semibold tracking-[0.28em] uppercase">
                Research
              </p>
            </div>

            {/* Right text */}
            <div className="md:w-2/3 space-y-5 text-[14px] md:text-[16px] leading-relaxed text-white/80">
              <p>
                Hack Week was built on insights gathered from previous editions of internal innovation  
              </p>
              <p>
               programs across global tech firms. LinkedIn's team identified a growing need for  
              </p>
              <p>
                employee-driven problem-solving, cross-functional collaboration, and informal learning 
              </p>
              <p>
               environments. Research highlighted the importance of combining technical challenges with 
              </p>
              <p>
                creative outlets to appeal to both engineering and non-engineering teams. Studies on </p>
                <p>gamified learning and team dynamics were also referenced to structure the Battle of Bots </p>
                and LEGO stations as high-engagement activities.
            </div>
          </div>
        </div>

        {/* ───── DEVELOPMENT Block ───── */}
        <div className="pt-16 md:pt-20">
          <div className="flex flex-col md:flex-row gap-10 md:gap-24">
            {/* Left label */}
            <div className="md:w-1/3">
              <p className="text-[12px] md:text-[13px] font-semibold tracking-[0.28em] uppercase">
                Development
              </p>
            </div>

            {/* Right text */}
            <div className="md:w-2/3 space-y-5 text-[14px] md:text-[16px] leading-relaxed text-white/80">
              <p>
                The planning team curated a two-day immersive journey featuring a dedicated Hack Zone, 
                keynote talks by internal leaders, and themed panel discussions on innovation, AI, and 
                product thinking. Signature activities included the Battle of Bots, where teams assembled 
                and customized robotic kits to race on an obstacle-filled track—focusing on parameters 
                like speed, durability, and drift. A LEGO activity zone promoted creative prototyping and 
                collaborative thinking. Hands-on counters for mug, tote, and cap painting, along with a 3D 
                printing demo, brought in artistic engagement. A vibrant showcase booth displayed 
                ongoing hack projects, while a themed photo booth captured team memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogeData;
