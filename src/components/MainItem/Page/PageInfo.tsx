import React, { FC } from "react";
import "./css/PageInfo.css";

import { iPageInfo } from "../../../interfaces/iPage";

import PageYtb from "./component/PageYtb";
import ProjectInfo from "./component/ProjectInfo";
import ProjectMobile from "./component/ProjectMobile";

const PageInfo: FC<iPageInfo> = ({ pYtb, prjInfo, prjMob }: iPageInfo) => {
  return (
    <div className="PageInfo">
      <PageYtb
        isDeveloping={pYtb.isDeveloping}
        title={pYtb.title}
        src={pYtb.src}
      />
      <ProjectInfo
        btns={prjInfo.btns}
        prjName={prjInfo.prjName}
        prjSub={prjInfo.prjSub}
        elements={prjInfo.elements}
      />
      <ProjectMobile
        prjName={prjMob.prjName}
        prjSub={prjMob.prjSub}
        prjBtnP={prjMob.prjBtnP}
        prjBtnT={prjMob.prjBtnT}
      />
    </div>
  );
};

export default PageInfo;
