import React from "react";
import logo from "@/assets/identity-logo.svg"; // <-- your logo file

const FooterIdentity: React.FC = () => {
  return (
    <section className="relative w-full   text-white overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:80px_80px] opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between  font-sans">

      

        {/* BIG LOGO */}
        <main className="flex-1 flex items-end justify-center pb-14 md:pb-18 lg:pb-22">
          <div className="w-full flex justify-center">
  <img
    src={logo}
    alt="IDENTITY"
    className="
     px-1 md:px-5
      object-contain
      brightness-0 invert
      opacity-100
      pointer-events-none
    "
  />
</div>
        </main>

        {/* FOOTER LINKS */}
        <footer
  className="
    w-full 
             /* ↓ tighter top & bottom like screenshot */
    px-20               /* ↓ remove left & right gap */
    flex items-center justify-between
    uppercase 
    
  "
  style={{
    fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
    fontSize: "18px",
    fontWeight: 600,
    letterSpacing: "0.15em",   /* ↓ tighter spacing like screenshot */
    lineHeight: "1",           /* ↓ compressed vertical height */
  }}
>
  <div>
    <a href="#" className="hover:text-gray-300 tracking-[-0.02em]">DESIGN & DEV BY THE</a>
  </div>

  <div>
    <a href="#" className="hover:text-gray-300 tracking-[-0.02em]">BACK TO HOME</a>
  </div>
</footer>
<br></br>
      </div>
    </section>
  );
};

export default FooterIdentity;
