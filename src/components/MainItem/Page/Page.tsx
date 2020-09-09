import React, { FC } from "react";
import "./css/Page.css";

import { iPage } from "../../../interfaces/iPage";

import PageTop from "./PageTop";
import PageMiddle from "./PageMiddle";
import PageBottom from "./PageBottom";

const Page: FC<iPage> = ({ pTop, pMiddle, pBottom, bg }: iPage) => {
  return (
    <div className="wrapper section">
      <div className={"contents w100h100 flexColumn flexMiddle " + bg}>
        <PageTop type={pTop.type} name={pTop.name} />
        <PageMiddle pInfo={pMiddle.pInfo} pPic={pMiddle.pPic} />
        <PageBottom iconSrcs={pBottom.iconSrcs} />
      </div>
    </div>
  );
};

export default Page;
