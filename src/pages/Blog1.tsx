import Blog from "@/components/Blog";
import Blog1Bg1 from "@/components/Blog1Bg1";
import Blog1Bg2 from "@/components/Blog1Bg2";
import Blog1Text from "@/components/Blog1Text";
import Blog1Text2 from "@/components/Blog1Text2";
import Blog1Text3 from "@/components/Blog1Text3";
import Blog1Text4 from "@/components/Blog1Text4";
import BlogCarousal from "@/components/BlogCarousal";
import FAQ from "@/components/FAQ";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";


const Index = () => {
  return (
    <div className="py-20 bg-[#050505]">
      <Header />
      <Blog1Text />
      <Blog1Bg1 />
      <Blog1Text2 />
      <Blog1Bg2 />
      <Blog1Text3 />
      <Blog1Bg1 />
      <Blog1Text4 />
      <BlogCarousal />
      <Blog />
      <FAQ />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div>
  );
};

export default Index;
