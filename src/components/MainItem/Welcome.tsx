import React, { FC } from "react";
import "../Main.css";
import "./Welcome.css";

import AOS from "aos";
import "aos/dist/aos.css";


const Welcome: FC = () => {
  AOS.init();

  return (
    <div className="wrapper section wrapImg">
      <div className="wrapper">
        <div className="halfOpacity w100h100" />
        <div className="contents w100h100 flexColumn flexCenter">
          <div
            className="title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            임대성 포트폴리오
          </div>
          <div
            className="exp"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            한국폴리텍대학 데이터분석과
          </div>
          <div 
            className="login" 
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
