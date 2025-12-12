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
              Amazon
            </p>
          </div>

          {/* CATEGORY */}
          <div>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Category
            </p>
            <p className="text-[20px] md:text-[22px] leading-tight">
              Amazon Women in Tech
            </p>
          </div>

          {/* PRODUCT DURATION */}
          <div>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Product Duration
            </p>
            <p className="text-[22px] md:text-[26px] leading-none">24 Hrs</p>
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
                Our creative exploration began with understanding Amazon’s internal DEI values, cultural 
              </p>
              <p>
               codes, and the spirit of AmazeWIT. The chosen theme, Empowering Inclusion, Fostering 
              </p>
              <p>
                Belonging, informed the tone of every experience—from the visual language to spatial 
              </p>
              <p>
                design.
              </p>
              <p>
               We also took into account Amazon's preference for subtle and inclusive branding—
               avoiding human likeness in illustrations, maintaining a non-binary design tone, and
                reinforcing brand consistency across both print and digital. Functional clarity, aesthetic 
                minimalism, and emotional warmth were key to shaping this experience.
              </p>
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
                The creative and experience development was led with a focus on elegance, clarity, and cohesiveness. The final scope included:<br></br>

<b>Onsite Branding:</b> Welcome panels, directional signages, help desks, badge designs, digital agenda panels, and feedback wall—crafted in sync with the visual theme.<br></br>

<b>Main Stage Design:</b> A striking, artistic main stage setup served as the visual anchor of the event. Designed with bold colors, fluid elements, and elegant lighting, it was both Instagrammable and presentation-friendly.<br></br>

<b>Photo Op Zones:</b> Branded, yet clean backdrops for attendees to capture memories and amplify the AmazeWIT narrative socially.<br></br>

<b>Feedback Wall:</b> An engaging physical touchpoint inviting attendees to leave their thoughts, stickers, or feedback in an expressive, visual format.<br></br>

<b>Showcase Zone:</b> A dedicated area where Amazon teams set up demo pods to present internal tech initiatives, tools, and innovations—enabling direct interactions and knowledge sharing.<br></br>

<b>Networking Lounge:</b> Calm, branded spaces with subtle cues, enabling meaningful conversations.<br></br>

<b>Swag & Collaterals:</b> Branded bookmarks, cue cards, tent cards, T-shirts, and tech kits were created for speakers, crew, and booth partners.<br></br>

Every visual asset followed a unified color scheme and typography treatment designed specifically for AmazeWIT, with the logo placed consistently on the top right of all materials as per brand guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogeData;
