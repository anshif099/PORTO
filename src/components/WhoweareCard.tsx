import React from "react";

type Member = {
  name: string;
  role: string;
  image: string;
};

const members: Member[] = [
  {
    name: "Ismail M K",
    role: "Founder / Director",
    image: "src/assets/ismail-mk.jpg", // TODO: replace with real path
  },
  {
    name: "Craig Dmello",
    role: "Creative Partner",
    image: "src/assets/Craig-Dmello.jpg",
  },
  {
    name: "Manu Vikraman",
    role: "Creative Associate",
    image: "src/assets/Manu-Vikraman.jpg",
  },
  {
    name: "Madhu J",
    role: "Associate Director",
    image: "src/assets/Madhu-J.jpg",
  },
  {
    name: "Suseenthiran J",
    role: "Associate Director",
    image: "src/assets/Suseenthiran-J.jpg",
  },
  {
    name: "Vinish M M",
    role: "Operation Head",
    image: "src/assets/vinish.png",
  },
  {
    name: "Riyaz M K",
    role: "Account Manager",
    image: "src/assets/Riyaz-M-K.jpg",
  },
  {
    name: "Sudhish Ram",
    role: "Creative Director",
    image: "src/assets/Sudhish-Ram.jpg",
  },
  {
    name: "Sandesh Karant",
    role: "Account Manager",
    image: "src/assets/Sandesh-Karant.jpg",
  },
  {
    name: "Yacob P S",
    role: "Account Manager",
    image: "src/assets/Yacob-P-S.jpg",
  },
  {
    name: "Sayeed M K",
    role: "Program Manager",
    image: "src/assets/Sayeed-M-K.jpg",
  },
  {
    name: "Harisha B",
    role: "Sr 3D Designer",
    image: "src/assets/Harisha-B.jpg",
  },
  {
    name: "Sanju C",
    role: "3D Designer",
    image: "src/assets/Sanju-C.jpg",
  },
  {
    name: "Prasant T S",
    role: "2D Designer",
    image: "src/assets/Prasant-T-S.jpg",
  },
  {
    name: "Ananya Rao",
    role: "Sr Executive",
    image: "src/assets/Ananya-Rao.jpg",
  },
  {
    name: "Naufal K K",
    role: "Sr Executive",
    image: "src/assets/Naufal-K-K.jpg",
  },
  {
    name: "Saffan",
    role: "Finance Head",
    image: "src/assets/Saffan.jpg",
  },
  {
    name: "Sanin Sadath",
    role: "Executive",
    image: "src/assets/Sanin-Sadath.jpg",
  },
  {
    name: "Mohammed Fahiz",
    role: "Executive",
    image: "src/assets/Mohammed-Fahiz.jpg",
  },
  {
    name: "Priyanka B R",
    role: "Executive",
    image: "src/assets/Priyanka-B-R.jpg",
  },
  {
    name: "Manzoor",
    role: "Office Assistanat",
    image: "src/assets/Manzoor.jpg",
  },
  {
    name: "Ramesh AP",
    role: "Senior 2D Designer",
    image: "src/assets/Ramesh-AP.jpg",
  },
  {
    name: "Mala N",
    role: "Executive Response Management",
    image: "src/assets/Mala-N.jpg",
  },
];

const WhoweareCard: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen flex justify-center px-4 sm:px-8 py-16"
      style={{
        backgroundColor: "#050505",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "6px 6px",
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* flex layout so last 2 are centered on final row */}
        <div className="flex flex-wrap justify-center gap-y-12 gap-x-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="w-full sm:w-1/2 lg:w-1/3 max-w-[360px] flex justify-center"
            >
              <div className="w-full rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)] bg-transparent">
                {/* photo block */}
                <div className="bg-[#1d1d1d]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[320px] md:h-[340px] object-cover"
                  />
                </div>

                {/* info block */}
                <div className="bg-[#f4f4f4] px-7 py-6">
                  <h3 className="text-[18px] leading-snug font-semibold text-[#111111] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[14px] text-[#777777] mb-5">
                    {member.role}
                  </p>

                  <button className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#202020] text-white text-[14px] font-semibold shadow-[0_6px_0_rgba(0,0,0,0.45)]">
                    Read More
                  </button>
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
