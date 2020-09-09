import React, { FC } from "react";
import "./css/PageMiddle.css";

import { iPageMiddle } from "../../../interfaces/iPage";

import PageInfo from "./PageInfo";
import PagePicture from "./component/PagePicture";

const PageMiddle: FC<iPageMiddle> = ({ pInfo, pPic }: iPageMiddle) => {
  return (
    <div
      className="PageMiddle"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="500"
    >
      <PageInfo
        pYtb={pInfo.pYtb}
        prjInfo={pInfo.prjInfo}
        prjMob={pInfo.prjMob}
      />
      <hr
        className="PageHr"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="500"
      />
      <PagePicture imgSrcArr={pPic.imgSrcArr} />
    </div>
  );
};

export default PageMiddle;
