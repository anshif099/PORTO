import Approach from "@/components/Approach";
import Bg1 from "@/components/Bg1";
import Header from "@/components/Header";
import Location from "@/components/Location";
import MainText from "@/components/MainText";
import MainText2 from "@/components/MainText2";
import Members from "@/components/Members";
import Sponsors from "@/components/Sponsers";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <MainText />
      <Location />
      <Bg1 />
      <Approach />
      <Members />
      <Sponsors />
      <MainText2 />
      
    </div>
  );
};

export default Index;
