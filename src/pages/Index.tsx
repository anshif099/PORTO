import Approach from "@/components/Approach";
import Bg1 from "@/components/Bg1";
import Bg2 from "@/components/Bg2";
import Bg3 from "@/components/Bg3";
import Bg4 from "@/components/Bg4";
import Bg5 from "@/components/Bg5";
import DropDown from "@/components/DropDown";
import FooterIdentity from "@/components/FooterIdentity";
import Grids from "@/components/grids";
import Header from "@/components/Header";
import Location from "@/components/Location";
import MainText from "@/components/MainText";
import MainText2 from "@/components/MainText2";
import MainText3 from "@/components/MainText3";
import MainText4 from "@/components/MainText4";
import MainText5 from "@/components/MainText5";
import Members from "@/components/Members";
import MovingCarosal from "@/components/MovingCarosal";
import Relation from "@/components/Relation";
import Sponsors from "@/components/Sponsers";
import Status from "@/components/Status";
import { Grid } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-framer-pattern relative">

      {/* Faint big rectangles */}
<div className="bg-rectangle"></div>

      {/* Noise texture */}
      <div className="noise-overlay"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <MainText />
        <Location />
        <Bg1 />
        <Approach />
        <Members />
        <Sponsors />
        <MainText2 />
        <Bg2 />
        <Bg3 />
        <Bg4 />
        <MainText3 />
        <DropDown />
        <Bg5 />
        <MainText4 />
        <Status />
        <Grids/>
        <MovingCarosal />
        <MainText5 />
        <Relation />
        <FooterIdentity />
      </div>

    </div>
  );
};

export default Index;
