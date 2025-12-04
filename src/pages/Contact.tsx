import React from "react";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

const Index = () => {
  return (
    <div className="py-20 bg-[#050505]">
      <Header />
      <br></br>
      <ContactForm />
      <ContactDetails />
      <FooterIdentity />
      
    </div>
  );
};

export default Index;
