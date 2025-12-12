import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";
import Values from "@/components/Values";
import WhoweareCard from "@/components/WhoweareCard";
import WhoweareText from "@/components/WhoweareText";
const Index = () => {
  return (
    <div className="bg-framer-pattern ">
      <div className="relative z-10">
      {/* Faint big rectangles */}
<div className="bg-rectangle"></div>
      <Header />
      <WhoweareText />
      <WhoweareCard />
      <ImageGallery />
      <Values />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div>
    </div>
  );
};

export default Index;
