import React, { FC } from "react";
import "../css/ProjectInfo.css";

import Button from "../../../Item/Button";
import { iProjectBtn } from "../../../../interfaces/iPage";

const ProjectBtn: FC<iProjectBtn> = ({
  isPhone,
  isTablet,
  buttons,
}: iProjectBtn) => {
  if (isPhone)
    return (
      <div className="PrjName PrjButton phone">
        <span>코드 및 문서</span>
        {buttons.map(({ text, url }) => (
          <Button text={text} url={url}></Button>
        ))}
      </div>
    );
  if (isTablet)
    return (
      <div className="PrjButton tablet">
        <div>
          {buttons.map(({ text, url }) => (
            <Button text={text} url={url}></Button>
          ))}
        </div>
      </div>
    );
  return (
    <div className="PrjButton">
      <span>코드 및 문서 : </span>
      {buttons.map(({ text, url }) => (
        <Button text={text} url={url}></Button>
      ))}
    </div>
  );
};

export default ProjectBtn;
