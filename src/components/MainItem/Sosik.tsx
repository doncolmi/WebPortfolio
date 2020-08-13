import React, { FC } from "react";
import "../Main.css";
import "./Sosik.css";


const Middle: FC = () => {

  return (
    <div className="wrapper section">
      <div className="contents w100h100 flexColumn flexMiddle bgColor">
        <div
          className="middleTop flexColumn flexCenter"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <div className="middleTitle">개발 요소</div>
          <div className="middleExp">소식은 아래와 같은 구성으로 만들어졌습니다.</div>
          <hr className="middleHr" />
        </div>
        <div className="middleBottom flexColumn flexCenter">
          <div className="middleBox flexCenter">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
