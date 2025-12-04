import React from "react";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import AmazonPXTText from "@/components/AmazonPXTText";
import AmazonPXTBg1 from "@/components/AmazonPXTBg1";
import AmazonPXTBg2 from "@/components/AmazonPXTBg2";
import TextCarousal from "@/components/TextCarousal";
import LinkedInHackWeekBg3 from "@/components/LinkedInHackWeekBg3";
import FAQ from "@/components/FAQ";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";
import AmazoneData from "@/components/AmazonData";


const Index = () => {
  return (
    <div className="py-20 bg-[#050505]">
      <Header />
      <AmazonPXTText />
      <AmazonPXTBg1 />
      <AmazoneData/>
      <AmazonPXTBg2 />
      <TextCarousal />
      <LinkedInHackWeekBg3 />
      <FAQ />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div>
  );
};

export default Index;
