import React, { FC } from "react";
import "./css/PageBottom.css";

import { iBottomIcons } from "../../../interfaces/iPage";

import BottomIcons from "./component/BottomIcons";

const PageBottom: FC<iBottomIcons> = ({ iconSrcs }: iBottomIcons) => {
  return (
    <div
      className="PageBottom"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="500"
    >
      <div className="BottomTitle">
        <span>사용 기술</span>
      </div>
      <BottomIcons iconSrcs={iconSrcs} />
    </div>
  );
};

export default PageBottom;
