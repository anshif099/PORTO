import Blog from "@/components/Blog";
import Blog1Text2 from "@/components/Blog1Text2";
import Blog1Text3 from "@/components/Blog1Text3";
import Blog1Text4 from "@/components/Blog1Text4";
import Blog3Bg1 from "@/components/Blog3Bg1";
import Blog3Bg2 from "@/components/Blog3Bg2";
import Blog3Bg3 from "@/components/Blog3Bg3";
import Blog3Text from "@/components/Blog3Text";
import BlogCarousal from "@/components/BlogCarousal";
import FAQ from "@/components/FAQ";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";


const Index = () => {
  return (
    <div className="bg-framer-pattern">
      <div className="relative z-10">
              {/* Faint big rectangles */}
<div className="bg-rectangle"></div>
      <Header />
      <Blog3Text />
      <Blog3Bg1 />
      <Blog1Text2 />
      <Blog3Bg2 />
      <Blog1Text3 />
      <Blog3Bg3 />
      <Blog1Text4 />
      <BlogCarousal />
      <Blog/>
      <FAQ />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div></div>
  );
};

export default Index;
