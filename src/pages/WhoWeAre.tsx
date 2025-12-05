import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import WhoweareCard from "@/components/WhoweareCard";
import WhoweareText from "@/components/WhoweareText";
const Index = () => {
  return (
    <div className="py-20 bg-[#050505]">
      <Header />
      <WhoweareText />
      <WhoweareCard />
      <FooterIdentity />
      
    </div>
  );
};

export default Index;
