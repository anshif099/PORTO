import Bg2 from "@/components/Bg2";
import Bg3 from "@/components/Bg3";
import Bg4 from "@/components/Bg4";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";
import WorkText from "@/components/WorkText";

const Index = () => {
  return (
    <div className="bg-framer-pattern">
      <div className="relative z-10">
              {/* Faint big rectangles */}
<div className="bg-rectangle"></div>
      <Header />
      <WorkText />
      <Bg2 />
      <Bg3 />
      <Bg4 />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div>
    </div>
  );
};

export default Index;
