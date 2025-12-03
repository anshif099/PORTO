import React from "react";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import GoogleText from "@/components/GoogleText";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <GoogleText />
      <FooterIdentity />
      
    </div>
  );
};

export default Index;
