import Approach from "@/components/Approach";
import Bg1 from "@/components/Bg1";
import Header from "@/components/Header";
import Location from "@/components/Location";
import MainText from "@/components/MainText";
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
      
    </div>
  );
};

export default Index;
