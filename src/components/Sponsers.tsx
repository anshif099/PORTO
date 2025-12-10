import React from "react";

import poco from "@/assets/poco.svg";
import amazon from "@/assets/amazon.svg";
import artpark from "@/assets/artpark.svg";
import dataiku from "@/assets/dataiku.svg";
import neo4j from "@/assets/neo4j.svg";
import orkes from "@/assets/orkes.svg";
import polygon from "@/assets/polygon.svg";
import smartbridge from "@/assets/smartbridge.svg";
import smartinternz from "@/assets/smartinternz.svg";
import unacademy from "@/assets/unacademy.svg";
import google from "@/assets/google.svg";
import xiaomi from "@/assets/xiaomi.svg";
import sagility from "@/assets/sagility.svg";
import linkedin from "@/assets/linkedin.svg";

const brands = [
  { name: "Sagility", logo: sagility },
  { name: "LinkedIn", logo: linkedin },
  { name: "POCO", logo: poco },
  { name: "Amazon", logo: amazon },
  { name: "Google", logo: google },
  { name: "Xiaomi", logo: xiaomi },
  { name: "ARTPARK", logo: artpark },
  { name: "dataiku", logo: dataiku },
  { name: "neo4j", logo: neo4j },
  { name: "orkes", logo: orkes },
  { name: "polygon", logo: polygon },
  { name: "SMARTBRIDGE", logo: smartbridge },
  { name: "SmartInternz", logo: smartinternz },
  { name: "unacademy", logo: unacademy },
];

export default function Sponsors() {
  const scrolling = [...brands, ...brands];

  return (
    <div className="w-full bg-[#050505] py-16 sm:py-20 overflow-hidden relative border-t border-white/5">

      <style>{`
        @keyframes sponsors-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .sponsors-track {
          display: flex;
          width: max-content;
          animation: sponsors-scroll 35s linear infinite;
        }

        .sponsor-card {
          min-width: 240px;
          height: 140px;
          border-radius: 20px;
          background: radial-gradient(circle at top left, #111, #050505 65%);
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 15px 40px rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .sponsor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 55px rgba(0,0,0,1);
        }

        .sponsor-logo {
          max-width: 140px;
          max-height: 50px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }

        @media (min-width: 1024px) {
          .sponsor-card {
            min-width: 280px;
            height: 160px;
          }
          .sponsor-logo {
            max-width: 160px;
          }
        }
      `}</style>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      {/* Scrolling logos */}
      <div className="relative z-10 overflow-hidden">
        <div className="sponsors-track gap-6 sm:gap-10 px-6 sm:px-16">
          {scrolling.map((item, i) => (
            <div className="sponsor-card" key={`${item.name}-${i}`}>
              <img
                src={item.logo}
                alt={item.name}
                className="sponsor-logo"
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Edge fade */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />

    </div>
  );
}
