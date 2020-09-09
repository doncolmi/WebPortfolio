import React, { FC } from "react";
import "../css/PageBottom.css";

import { iBottomIcons } from "../../../../interfaces/iPage";

import Icon from "../../../Item/Icon";

const BottomIcons: FC<iBottomIcons> = ({ iconSrcs }: iBottomIcons) => {
  return (
    <div className="BottomIcons">
      {iconSrcs.map((src: string) => (
        <Icon Src={src} Name="Icon" Delay="400" />
      ))}
    </div>
  );
};

export default BottomIcons;
