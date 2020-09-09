import React, { FC } from "react";
import "../css/ProjectInfo.css";

import { iProjectInfo } from "../../../../interfaces/iPage";

import ProjectName from "./ProjectName";
import ProjectStack from "./ProjectStack";
import ProjectBtn from "./ProjectBtn";

const ProjectInfo: FC<iProjectInfo> = ({
  btns,
  prjName,
  prjSub,
  elements,
}: iProjectInfo) => {
  return (
    <div className="ProjectInfo">
      <ProjectName
        isMobile={false}
        title={prjName.title}
        contents={prjName.contents}
      />
      <ProjectName
        isMobile={false}
        title={prjSub.title}
        contents={prjSub.contents}
      />
      <ProjectStack elements={elements} />
      <ProjectBtn buttons={btns.buttons} />
    </div>
  );
};

export default ProjectInfo;
