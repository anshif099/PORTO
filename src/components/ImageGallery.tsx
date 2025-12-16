import React from "react";
import galleryHeroCommunityMixer from "../assets/gallery-hero-community-mixer.jpg";
import galleryAudienceRedLights from "../assets/gallery-audience-red-lights.jpg";
import galleryGoogleForDevelopersLeaf from "../assets/gallery-google-for-developers-leaf.jpg";
import galleryMiStage from "../assets/gallery-mi-stage.jpg";
import galleryCamelVideo from "../assets/gallery-camel.mp4";
import galleryIndiaCommunityDoor from "../assets/gallery-india-community-door.jpg";
import galleryGoogleForStartups from "../assets/gallery-google-for-startups.jpg";
import galleryRedStageGrid from "../assets/gallery-red-stage-grid.jpg";
import galleryAwardsTable from "../assets/gallery-awards-table.jpg";
import galleryCommunityMixerBooth from "../assets/gallery-community-mixer-booth.jpg";

const ImageGallery: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-8 py-16"
      style={{
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      <div className="w-full max-w-[1450px] mx-auto">
        {/* HEADLINE */}
        <h2 className="text-white uppercase tracking-[-0.04em] leading-[1em] text-center text-[71px] font-semibold">
          WE BELIEVE IN SUSTAINABLE EVENTS,
          <br />
          EXPERIENCES AND ENGAGEMENTS.
        </h2>

        {/* 1. HERO IMAGE */}
        <div className="mt-10 rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
          <img
            src={galleryHeroCommunityMixer}
            alt="Community Mixer Event"
            className="w-full h-[512px] object-cover"
          />
        </div>

        {/* 2. TWO IMAGE ROW */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
            <img
              src={galleryAudienceRedLights}
              alt="Audience under red lights"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </div>

          <div className="rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
            <img
              src={galleryGoogleForDevelopersLeaf}
              alt="Google for Developers installation"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </div>
        </div>

        {/* 3. LEFT STACK + RIGHT TALL */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.4fr,1fr] gap-5">
          {/* LEFT STACK */}
          <div className="flex flex-col gap-5">
            <div className="rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
              <img
                src={galleryMiStage}
                alt="Mi launch stage"
                className="w-full h-[260px] md:h-[550px] object-cover"
              />
            </div>

            <div className="rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
              <video
                src={galleryCamelVideo}
                className="w-full h-[260px] md:h-[320px] object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* RIGHT TALL */}
          <div className="rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
            <img
              src={galleryIndiaCommunityDoor}
              alt="India Community Summit entrance"
              className="w-full h-full min-h-[340px] md:min-h-[540px] object-cover"
            />
          </div>
        </div>

        {/* 4. FULL WIDTH */}
        <div className="mt-6 rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
          <img
            src={galleryGoogleForStartups}
            alt="Google for Startups display"
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </div>

        {/* 5. LEFT TALL + RIGHT STACK */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.4fr,1fr] gap-5">
          <div className="rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
            <img
              src={galleryRedStageGrid}
              alt="Red stage performance"
              className="w-full h-full min-h-[380px] md:min-h-[520px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
              <img
                src={galleryAwardsTable}
                alt="Awards on table"
                className="w-full h-[200px] md:h-[240px] object-cover"
              />
            </div>

            <div className="rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)]">
              <img
                src={galleryCommunityMixerBooth}
                alt="Community Mixer booth"
                className="w-full h-[200px] md:h-[240px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
