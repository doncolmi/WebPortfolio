import React, { FC } from "react";
import "../Main.css";
import "./Welcome.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Icon from "../Item/Icon";

const Welcome: FC = () => {
  AOS.init();

  return (
    <div className="wrapper section wrapImg">
      <div className="wrapper">
        <div className="video w100h100">
          <video muted autoPlay loop>
            <source src="/Sand.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="halfOpacity w100h100" />
        <div className="contents w100h100 welcome">
          <div className="Hello" data-aos="fade-right" data-aos-duration="1000">
            <div className="Name HelloBox">임대성</div>
            <div className="Portfolio HelloBox">포트폴리오</div>
            <div className="school">한국폴리텍대학 데이터분석과</div>
          </div>
          <div></div>
        </div>
        <div className="WelcomeBottom">
          <div className="WelcomeBottomRow">
            <Icon Src="/Icon/JS.jpg" Name="JS" Delay="400" />
            <Icon Src="/Icon/TS.png" Name="TS" Delay="500" />
            <Icon Src="/Icon/React.png" Name="React" Delay="600" />
          </div>
          <div className="WelcomeBottomRow">
            <Icon Src="/Icon/Vue.png" Name="Vue" Delay="700" />
            <Icon Src="/Icon/MariaDB.png" Name="MariaDB" Delay="800" />
            <Icon Src="/Icon/Mongo.png" Name="Mongo" Delay="900" />
          </div>
          <div className="WelcomeBottomRow">
            <Icon Src="/Icon/EC2.png" Name="EC2" Delay="1000" />
            <Icon Src="/Icon/RDS.png" Name="RDS" Delay="1000" />
          </div>
          <div className="WelcomeBottomRow"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
