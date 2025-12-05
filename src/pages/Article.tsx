import ArticleText from "@/components/ArticleText";
import Blog from "@/components/Blog";
import FooterIdentity from "@/components/FooterIdentity";
import Header from "@/components/Header";
import MainText5 from "@/components/MainText5";
import Relation from "@/components/Relation";

const Index = () => {
  return (
    <div className="py-20 bg-[#050505]">
      <Header />
      <ArticleText />
      <Blog />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div>
  );
};

export default Index;
