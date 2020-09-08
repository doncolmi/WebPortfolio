import React, { FC } from "react";
import "../Main.css";

import MyInfoTop from "./MyInfo/MyInfoTop";
import ProfileTop from "./MyInfo/ProfileTop";
import MiddleBottom from "./MyInfo/MiddleBottom";

const Middle: FC = () => {
  return (
    <div className="wrapper section">
      <div className="contents w100h100 flexColumn flexMiddle MyInfoBg">
        <MyInfoTop title="Profile" />
        <ProfileTop />
        <MiddleBottom />
      </div>
    </div>
  );
};

export default Middle;
