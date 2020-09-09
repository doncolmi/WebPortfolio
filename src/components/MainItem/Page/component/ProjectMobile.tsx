import React, { FC } from "react";
import "../css/ProjectInfo.css";

import { iProjectMobile } from "../../../../interfaces/iPage";

import ProjectName from "./ProjectName";
import ProjectSub from "./ProjectSub";
import ProjectBtn from "./ProjectBtn";

const ProjectMobile: FC<iProjectMobile> = ({
  prjName,
  prjSub,
  prjBtnP,
  prjBtnT,
}: iProjectMobile) => {
  return (
    <div
      className="ProjectMobileInfo"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="500"
    >
      <ProjectName
        isMobile={true}
        title={prjName.title}
        contents={prjName.contents}
      />
      <ProjectSub title={prjSub.title} contents={prjSub.contents} />
      <ProjectBtn isPhone={true} buttons={prjBtnP.buttons} />
      <ProjectBtn isTablet={true} buttons={prjBtnT.buttons} />
    </div>
  );
};

export default ProjectMobile;
