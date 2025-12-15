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
    <div className="w-full py-8 sm:py-12 overflow-hidden relative">

      <style>{`
        @keyframes sponsors-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .sponsors-track {
          display: flex;
          width: max-content;
          gap: 20px; 
          animation: sponsors-scroll 60s linear infinite;
        }

        .sponsor-card {
          min-width: 240px;
          height: 180px;
          border-radius: 10px;
          background-color: var(--token-24f27aa8-9496-4d3e-bf0e-429bb69788c2, rgb(10, 10, 10));
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .sponsor-card:hover {
          transform: translateY(-4px);
        }

        .sponsor-logo {
          max-width: 118px;
          max-height: 118px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }

        @media (min-width: 1024px) {
          .sponsor-card {
            min-width: 240px;
            height: 180px;
          }
          .sponsor-logo {
            max-width: 160px;
          }
        }
      `}</style>

      {/* ⭐ TOP clean horizontal line */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* Scrolling logos */}
      <div className="relative overflow-hidden bg-framer-pattern">
        <div className="sponsors-track gap-6 sm:gap-10 py-10 z-10 relative ">
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

      {/* ⭐ BOTTOM clean horizontal line */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* Edge fade */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />
    </div>
  );
}
