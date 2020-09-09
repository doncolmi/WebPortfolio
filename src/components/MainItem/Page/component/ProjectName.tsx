import React, { FC } from "react";
import "../css/ProjectInfo.css";

interface Props {
  isMobile: boolean;
  title: string;
  contents: string;
}

const ProjectName: FC<Props> = ({ isMobile, title, contents }: Props) => {
  if (isMobile) {
    return (
      <div className="PrjName">
        <span>{title}</span>
        <br />
        <a>{contents}</a>
      </div>
    );
  }
  return (
    <div className="PrjName">
      <span>{title}</span> {contents}
    </div>
  );
};

export default ProjectName;
