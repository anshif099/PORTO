import React from "react";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import GoogleText from "@/components/GoogleText";
import GoogleBg1 from "@/components/GoogleBg1";
import GoogeData from "@/components/GoogleData";
import GoogleBg2 from "@/components/GoogleBg2";
import TextCarousal from "@/components/TextCarousal";
import GoogleBg3 from "@/components/GoogleBg3";
import FAQ from "@/components/FAQ";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";

const Index = () => {
  return (
    <div className="bg-framer-pattern">
      <div className="relative z-10">
              {/* Faint big rectangles */}
<div className="bg-rectangle"></div>
      <Header />
      <GoogleText />
      <GoogleBg1 />
      <GoogeData />
      <GoogleBg2 />
      <TextCarousal />
      <GoogleBg3 />
      <FAQ />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div></div>
  );
};

export default Index;
