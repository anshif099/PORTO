export default function WhoweareText() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-[5vw] pt-40"
      style={{
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] text-center uppercase tracking-[-0.02em] leading-[5em] text-white">

        {/* HONEST */}
        <h1 className="font-semibold text-[101px] mb-[2.4vh] tracking-[-0.02em] leading-[-5em]">
          HONEST.
        </h1>

        {/* Small Description */}
        <div className="font-semibold text-[34px]  space-y-[0.2em] tracking-[-0.02em] leading-[0.9em]">
          <p>HARD + SMART + INTELLIGENT-WORKING.</p>
          <p>DILIGENT, DEPENDABLE. AT THE EDGE.</p>
          <p>THE LEADING EDGE. CRAFTING. CURATING.</p>
          <p>CELEBRATING. CONSISTENT. CREATIVE.</p>
        </div>

        {/* WE ARE IDENTITY */}
        <h2 className="font-semibold text-[101px] leading-none tracking-[-0.02em]">
          WE ARE IDENTITY.
        </h2>

        {/* CHAMPION BLOCK */}
        <div className="font-semibold text-[101px] leading-none space-y-[0.45em] tracking-[-0.02em]">
          <div>WE CHAMPION<br></br>
          THE
          EXTRAORDINARY.</div>
        </div>

      </div>
    </section>
  );
}
