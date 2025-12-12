import Blog from "@/components/Blog";
import Blog1Text2 from "@/components/Blog1Text2";
import Blog1Text3 from "@/components/Blog1Text3";
import Blog2Bg1 from "@/components/Blog2Bg1";
import Blog2Bg2 from "@/components/Blog2Bg2";
import Blog2Bg3 from "@/components/Blog2Bg3";
import Blog2Text from "@/components/Blog2Text";
import Blog2Text3 from "@/components/Blog2Text3";
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
      <Blog2Text />
      <Blog2Bg1 />
      <Blog1Text2 />
      <Blog2Bg2 />
      <Blog2Text3 />
      <Blog2Bg3 />
      <Blog2Text3 />
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
