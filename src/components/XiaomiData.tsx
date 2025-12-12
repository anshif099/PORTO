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
            <p className="text-[26px] md:text-[30px] leading-none">2024</p>
          </div>

          {/* CLIENT */}
          <div>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Client
            </p>
            <p className="text-[20px] md:text-[22px] leading-tight">
              Xiaomi
            </p>
          </div>

          {/* CATEGORY */}
          <div>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Category
            </p>
            <p className="text-[20px] md:text-[22px] leading-tight">
              Xiaomi Global Launch
            </p>
          </div>

          {/* PRODUCT DURATION */}
          <div>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
              Product Duration
            </p>
            <p className="text-[22px] md:text-[26px] leading-none">72 Hrs</p>
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
                At the heart of the event was the insight that today’s consumers crave not just specs, but 
              </p>
              <p>
               emotionally resonant technology experiences. The Xiaomi 14 Civi, rebranded from the Civi  
              </p>
              <p>
                4 Pro, addressed this demand with Leica-engineered pro cameras, a quad-curved 
              </p>
              <p>
                AMOLED display, and standout dual 32MP AI selfie cameras. Market research highlighted 
              </p>
              <p>
                growing momentum around influencer content creation and cinematic storytelling—directly 
              </p>
              <p>
                shaping the "Cinematic Vision" narrative that guided both the product and the event 
              </p>
              design.
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
                Every touchpoint at the launch was crafted to extend the visual and functional DNA of the Xiaomi 14 Civi into the<br></br>
                 physical space:<br></br>
                 <b>Design Aesthetics: </b> A seamless blend of tech and art—curved LED walls, 68 billion color installations, and symmetrical spatial layouts—echoed the phone’s quad-curve design.<br></br>
                 <b>Registration & Collateral:</b> Fans and media entered through designated pathways, receiving custom-designed badges, lanyards, and door tickets in colorways inspired by the phone's editions—Cruise Blue, Matcha Green, and Shadow Black.<br></br>
                 <b>Stage & Content:</b>The countdown to launch was delivered via a 3D-animated cinematic AV, inspired by Xiaomi’s legacy but elevated for a flagship reveal. The stage setup fused dynamic lighting with bold vertical and horizontal lines—mirroring the dual-slice and curved form factor of the phone.<br></br>
                 <b>Experience Zones:</b>Guests explored hands-on zones featuring 30+ devices, with creatively designed photo ops demonstrating the dual selfie camera capabilities and Leica photography system. A larger-than-life “Cinematic Vision” wall offered a storytelling backdrop for content creation.<br></br>
                 <b>AIoT Showcase:</b>Future-facing tech like the Xiaomi RVC X10 and Air Fryer were also on display, reinforcing Xiaomi’s expanding smart home ecosystem.<br></br>
                </p>
                <b>Creative Integration:</b> From spec cards to a checkered photo backdrop, every asset was a reflection of the product's aesthetic sophistication and cinematic ambition.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogeData;
