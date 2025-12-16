import React from "react";
import ismailMk from "../assets/ismail-mk.jpg";
import craigDmello from "../assets/Craig-Dmello.jpg";
import manuVikraman from "../assets/Manu-Vikraman.jpg";
import madhuJ from "../assets/Madhu-J.jpg";
import suseenthiranJ from "../assets/Suseenthiran-J.jpg";
import vinishMm from "../assets/vinish.png";
import riyazMk from "../assets/Riyaz-M-K.jpg";
import sudhishRam from "../assets/Sudhish-Ram.jpg";
import sandeshKarant from "../assets/Sandesh-Karant.jpg";
import yacobPs from "../assets/Yacob-P-S.jpg";
import sayeedMk from "../assets/Sayeed-M-K.jpg";
import harishaB from "../assets/Harisha-B.jpg";
import naufalKk from "../assets/Naufal-K-K.jpg";
import saffan from "../assets/Saffan.jpg";
import saninSadath from "../assets/Sanin-Sadath.jpg";
import mohammedFahiz from "../assets/Mohammed-Fahiz.jpg";
import priyankaBr from "../assets/Priyanka-B-R.jpg";
import manzoor from "../assets/Manzoor.jpg";
import rameshAp from "../assets/Ramesh-AP.jpg";
import malaN from "../assets/Mala-N.jpg";

type Member = {
  name: string;
  role: string;
  image: string;
};

const members: Member[] = [
  {
    name: "Ismail M K",
    role: "Founder / Director",
    image: ismailMk,
  },
  {
    name: "Craig Dmello",
    role: "Creative Partner",
    image: craigDmello,
  },
  {
    name: "Manu Vikraman",
    role: "Creative Associate",
    image: manuVikraman,
  },
  {
    name: "Madhu J",
    role: "Associate Director",
    image: madhuJ,
  },
  {
    name: "Suseenthiran J",
    role: "Associate Director",
    image: suseenthiranJ,
  },
  {
    name: "Vinish M M",
    role: "Operation Head",
    image: vinishMm,
  },
  {
    name: "Riyaz M K",
    role: "Account Manager",
    image: riyazMk,
  },
  {
    name: "Sudhish Ram",
    role: "Creative Director",
    image: sudhishRam,
  },
  {
    name: "Sandesh Karant",
    role: "Account Manager",
    image: sandeshKarant,
  },
  {
    name: "Yacob P S",
    role: "Account Manager",
    image: yacobPs,
  },
  {
    name: "Sayeed M K",
    role: "Program Manager",
    image: sayeedMk,
  },
  {
    name: "Harisha B",
    role: "Sr 3D Designer",
    image: harishaB,
  },
  {
    name: "Naufal K K",
    role: "Sr Executive",
    image: naufalKk,
  },
  {
    name: "Saffan",
    role: "Finance Head",
    image: saffan,
  },
  {
    name: "Sanin Sadath",
    role: "Executive",
    image: saninSadath,
  },
  {
    name: "Mohammed Fahiz",
    role: "Executive",
    image: mohammedFahiz,
  },
  {
    name: "Priyanka B R",
    role: "Executive",
    image: priyankaBr,
  },
  {
    name: "Manzoor",
    role: "Office Assistanat",
    image: manzoor,
  },
  {
    name: "Ramesh AP",
    role: "Senior 2D Designer",
    image: rameshAp,
  },
  {
    name: "Mala N",
    role: "Executive Response Management",
    image: malaN,
  },
];

const WhoweareCard: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen flex justify-center px-4 sm:px-8 py-16"
      style={{
       
        fontFamily: `"inter", "inter Placeholder", sans-serif`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* flex layout so last 2 are centered on final row */}
        <div className="flex flex-wrap justify-center gap-y-5 gap-x-5">
          {members.map((member) => (
            <div
              key={member.name}
              className="w-full sm:w-1/2 lg:w-1/3 max-w-[320px] flex justify-center"
            >
              <div className=" w-full rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)] bg-transparent">
                {/* photo block */}
                <div className="bg-[#1d1d1d]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[320px] md:h-[320px] object-cover"
                  />
                </div>

                {/* info block */}
                <div className="bg-[#ffff]">
                <div className="  bg-pattern px-7 py-6 ">
                  <h3 className="text-[20px] leading-snug font-semibold text-[#111111] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[16px] text-[#777777] mb-1">
                    {member.role}
                  </p>
                  <button className="inline-flex items-center px-5 py-2.5 rounded-[10px] bg-framer-pattern text-white text-[14px] font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
                    <p className="z-10">Read More</p>
                  </button>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoweareCard;
