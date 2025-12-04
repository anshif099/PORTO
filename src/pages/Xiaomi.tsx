import React from "react";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import XiaomiText from "@/components/XiaomiText";
import XiaomiBg1 from "@/components/xiaomi-bg1";
import XiaomiData from "@/components/XiaomiData";
import XiaomiBg2 from "@/components/XiaomiBg2";
import TextCarousal from "@/components/TextCarousal";
import LinkedInHackWeekBg3 from "@/components/LinkedInHackWeekBg3";
import FAQ from "@/components/FAQ";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";


const Index = () => {
  return (
    <div className="py-20 bg-[#050505]">
      <Header />
      <XiaomiText />
      <XiaomiBg1 />
      <XiaomiData />
      <XiaomiBg2 />
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
