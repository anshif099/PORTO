import Blog from "@/components/Blog";
import Blog1Text2 from "@/components/Blog1Text2";
import Blog1Text3 from "@/components/Blog1Text3";
import Blog2Text3 from "@/components/Blog2Text3";
import Blog4Bg1 from "@/components/Blog4Bg1";
import Blog4Bg2 from "@/components/Blog4Bg2";
import Blog4Bg3 from "@/components/Blog4Bg3";
import Blog4Text from "@/components/Blog4Text";
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
      <Blog4Text />
      <Blog4Bg1 />
      <Blog1Text2 />
      <Blog4Bg2 />
      <Blog2Text3 />
      <Blog4Bg3 />
      <Blog1Text3 />
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
