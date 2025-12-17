import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/identity-logo.svg";

const FooterIdentity: React.FC = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // trigger when 20% visible
      }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={footerRef}
      className="relative w-full text-white overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:80px_80px] opacity-40 pointer-events-none" />

      {/* Animated Wrapper */}
      <div
        className={`
          relative z-10 flex flex-col justify-between font-sans
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}
        `}
      >
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
                pointer-events-none
              "
            />
          </div>
        </main>

        {/* FOOTER LINKS */}
        <footer
          className="w-full px-20 flex items-center justify-between uppercase"
          style={{
            fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            lineHeight: "1",
          }}
        >
          <a href="#" className="hover:text-gray-300 tracking-[-0.02em]">
            DESIGN & DEV BY THE
          </a>

          <a href="#" className="hover:text-gray-300 tracking-[-0.02em]">
            BACK TO HOME
          </a>
        </footer>

        <br />
      </div>
    </section>
  );
};

export default FooterIdentity;
