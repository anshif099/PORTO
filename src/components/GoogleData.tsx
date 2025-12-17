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
            <p className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Year
            </p>
            <p className="text-[24px] md:text-[24px] leading-none">2025</p>
          </div>

          {/* CLIENT */}
          <div>
            <p className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Client
            </p>
            <p className="text-[20px] md:text-[24px] leading-tight">
              Google India
            </p>
          </div>

          {/* CATEGORY */}
          <div>
            <p className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Category
            </p>
            <p className="text-[20px] md:text-[24px] leading-tight">
              Developer Ecosystem &amp; Community Engagement
            </p>
          </div>

          {/* PRODUCT DURATION */}
          <div>
            <p className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Product Duration
            </p>
            <p className="text-[22px] md:text-[24px] leading-none">72 Hrs</p>
          </div>
        </div>

        {/* ───── RESEARCH Block ───── */}
        <div className="pt-16 md:pt-20 border-b border-white/10 pb-16 md:pb-20">
          <div className="flex flex-col md:flex-row gap-10 md:gap-24">
            {/* Left label */}
            <div className="md:w-1/3">
              <p className="text-[12px] md:text-[18px] font-semibold tracking-[-0.02em] uppercase">
                Research
              </p>
            </div>

            {/* Right text */}
            <div className="md:w-2/3 space-y-5 text-[14px] md:text-[18px] leading-relaxed text-white/80">
              <p>
                Each year of ICS was crafted around a distinct lens to deepen community
                connection and thought leadership.
              </p>
              <p>
                Leh (2022) focused on resilience, accessibility, and infrastructure in extreme
                environments.
              </p>
              <p>
                Goa (2023) embraced sustainability and regenerative practices, integrating
                local ecology and low-impact planning.
              </p>
              <p>
                Udaipur (2024) emphasized heritage, collaboration, and cross-cultural bonding.
              </p>
              <p>
                Kerala (2025) advanced the theme further through the “Seed, Lead, Deed, Need”
                framework—blending eco-activism, robotics, cultural engagement, and circular
                practices. Across all editions, program structures were grounded in
                participant feedback, local relevance, and real-time learning.
              </p>
            </div>
          </div>
        </div>

        {/* ───── DEVELOPMENT Block ───── */}
        <div className="pt-16 md:pt-20">
          <div className="flex flex-col md:flex-row gap-10 md:gap-24">
            {/* Left label */}
            <div className="md:w-1/3">
              <p className="text-[12px] md:text-[18px] font-semibold tracking-[-0.02em] uppercase">
                Development
              </p>
            </div>

            {/* Right text */}
            <div className="md:w-2/3 space-y-5 text-[14px] md:text-[18px] leading-relaxed text-white/80">
              <p>
                Each edition posed new logistical and environmental challenges:
              </p>
              <p>
                Ladakh&apos;s altitude and remoteness required weather buffers and material
                imports from Delhi.
              </p>
              <p>
                Goa and Udaipur introduced new benchmarks in sustainable vendor management,
                zero-waste events, climate-positive planning and immersive cultural blend.
              </p>
              <p>
                ICS 2025 in Kerala raised the bar with local sourcing, cultural compliance,
                community tie-ups, and a multi-day plan involving robotics races, mindful
                music workshops, and heritage dinners. Managing 120+ rooms, multiple transport
                cycles, high-tech and high-touch setups—across beaches, craft villages, and
                hotel venues—demanded layered, parallel execution with regional vendors and
                partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogeData;
