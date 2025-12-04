import React from "react";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import AmazewitText from "@/components/AmazewitText";
import AmazewitBg1 from "@/components/AmazewitBg1";
import AmazewitBg2 from "@/components/AmazewitBg2";
import TextCarousal from "@/components/TextCarousal";
import AmazewitBg3 from "@/components/AmazewitBg3";
import FAQ from "@/components/FAQ";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";
import GoogleData from "@/components/GoogleData";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <AmazewitText />
      <AmazewitBg1 />
      <GoogleData />
      <AmazewitBg2 />
      <TextCarousal />
      <AmazewitBg3 />
      <FAQ />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div>
  );
};

export default Index;
