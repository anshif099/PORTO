import ArticleText from "@/components/ArticleText";
import Blog from "@/components/Blog";
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
      <ArticleText />
      <Blog />
      <MainText5 />
      <Relation />
      <FooterIdentity />
      
    </div></div>
  );
};

export default Index;
