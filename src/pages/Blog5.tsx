import Blog from "@/components/Blog";
import Blog1Text2 from "@/components/Blog1Text2";
import Blog1Text3 from "@/components/Blog1Text3";
import Blog2Text3 from "@/components/Blog2Text3";
import Blog5Bg1 from "@/components/Blog5Bg1";
import Blog5Bg2 from "@/components/Blog5Bg2";
import Blog5Bg3 from "@/components/Blog5Bg3";
import Blog5Text from "@/components/Blog5Text";
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
      <Blog5Text />
      <Blog5Bg1 />
      <Blog1Text2 />
      <Blog5Bg2 />
      <Blog2Text3 />
      <Blog5Bg3 />
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
