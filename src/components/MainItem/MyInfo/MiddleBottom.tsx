import React, { FC } from "react";
import "./css/MiddleBottom.css";

import MiddleBlock from "./MiddleBlock";
import ProfileBottom from "./ProfileBottom";

const MiddleBottom: FC = () => {
  const edu = [
    "2019.03 ~ : 한국폴리텍대학 서울강서캠퍼스 재학",
    "2013.03 ~ 2016.02 : 광주 성덕고등학교 졸업",
  ];
  const act = [
    "2020.03 ~ : 한이음 ICT멘토링 프로젝트 참여",
    "2020.08 : 정보처리산업기사 취득",
  ];
  return (
    <div className="middleBottom flexColumn ProfileCenter">
      <div
        className="ProfileMiddle"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1200"
      >
        <MiddleBlock icon="fas fa-school" contents={edu} />
        <MiddleBlock icon="fas fa-award" contents={act} />
      </div>
      <ProfileBottom />
    </div>
  );
};

export default MiddleBottom;
