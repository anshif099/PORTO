import React from "react";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import LinkedInHackWeekText from "@/components/LinkedInHackWeekText";
import LinkedInHackWeekBg1 from "@/components/LinkedInHackWeekBg1";
import LinkedInHackWeekBg2 from "@/components/LinkedInHackWeekBg2";
import TextCarousal from "@/components/TextCarousal";
import LinkedInHackWeekBg3 from "@/components/LinkedInHackWeekBg3";
import FAQ from "@/components/FAQ";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";
import LinkedInData from "@/components/LinkedInData";

const Index = () => {
  return (
    <div className="bg-framer-pattern">
      <div className="relative z-10">
              {/* Faint big rectangles */}
<div className="bg-rectangle"></div>
      <Header />
      <LinkedInHackWeekText />
      <LinkedInHackWeekBg1 />
      <LinkedInData />
      <LinkedInHackWeekBg2 />
      <TextCarousal />
      <LinkedInHackWeekBg3 />
      <FAQ />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div></div>
  );
};

export default Index;
