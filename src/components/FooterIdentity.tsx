import React from "react";
import logo from "@/assets/identity-logo.svg"; // <-- your logo file

const FooterIdentity: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:80px_80px] opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between min-h-screen font-sans">

      

        {/* BIG LOGO */}
        <main className="flex-1 flex items-end justify-center pb-14 md:pb-18 lg:pb-22">
          <div className="w-full max-w-[1600px] px-4 md:px-10 flex justify-center">
            <img
              src={logo}
              alt="IDENTITY"
              className="
                w-full max-w-[1400px]
                object-contain
                brightness-0 invert
                opacity-100
                pointer-events-none
              "
            />
          </div>
        </main>

        {/* FOOTER LINKS */}
        <footer className="w-full pb-6 md:pb-8 px-6 md:px-12 flex items-center justify-between text-[11px] md:text-[12px] tracking-[0.25em] uppercase">
          <div>
            <a href="#" className="hover:text-gray-300">Design & Dev By The</a>
          </div>
          <div>
            <a href="#" className="hover:text-gray-300">Back To Home</a>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default FooterIdentity;
