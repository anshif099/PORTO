import React from "react";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import XiaomiText from "@/components/XiaomiText";
import XiaomiBg1 from "@/components/xiaomi-bg1";


const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <XiaomiText />
      <XiaomiBg1 />
      <FooterIdentity />
      
    </div>
  );
};

export default Index;
