export default function WhoweareText() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-[5vw]"
      style={{
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
        backgroundColor: "#050505",
      }}
    >

      {/* background dot texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:6px_6px] opacity-70" />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] text-center uppercase tracking-[0.12em] leading-tight text-white">

        {/* HONEST */}
        <h1 className="font-extrabold text-[clamp(3.3rem,7vw,5.4rem)] mb-[2.4vh]">
          HONEST.
        </h1>

        {/* Small Description */}
        <div className="font-bold text-[clamp(0.78rem,1.15vw,1.1rem)] leading-[1.45] space-y-[0.2em]">
          <p>HARD + SMART + INTELLIGENT-WORKING.</p>
          <p>DILIGENT, DEPENDABLE. AT THE EDGE.</p>
          <p>THE LEADING EDGE. CRAFTING. CURATING.</p>
          <p>CELEBRATING. CONSISTENT. CREATIVE.</p>
        </div>

        {/* Spacer */}
        <div className="h-[7vh] min-h-[40px]" />

        {/* WE ARE IDENTITY */}
        <h2 className="font-extrabold text-[clamp(3.1rem,6.6vw,5rem)] leading-none">
          WE ARE IDENTITY.
        </h2>

        {/* Spacer */}
        <div className="h-[3.5vh] min-h-[24px]" />

        {/* CHAMPION BLOCK */}
        <div className="font-extrabold text-[clamp(3.1rem,6.6vw,5rem)] leading-none space-y-[0.45em]">
          <div>WE CHAMPION</div>
          <div>THE</div>
          <div>EXTRAORDINARY.</div>
        </div>

      </div>
    </section>
  );
}
