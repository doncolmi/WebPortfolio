import React, { FC } from "react";
import "../css/ProjectInfo.css";

interface Props {
  title: string;
  contents: string;
}

const ProjectSub: FC<Props> = ({ title, contents }: Props) => {
  return (
    <div className="PrjName subPadding">
      <span>{title}</span>
      <br />
      {contents}
    </div>
  );
};

export default ProjectSub;
