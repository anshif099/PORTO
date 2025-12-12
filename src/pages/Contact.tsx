import React from "react";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

const Index = () => {
  return (
    <div className="bg-framer-pattern">
      <div className="relative z-10">
              {/* Faint big rectangles */}
<div className="bg-rectangle"></div>
      <Header />
      <br></br>
      <ContactForm />
      <ContactDetails />
      <FooterIdentity />
      
    </div></div>
  );
};

export default Index;
