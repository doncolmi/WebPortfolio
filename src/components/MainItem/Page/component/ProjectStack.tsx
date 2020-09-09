import React, { FC } from "react";
import "../css/ProjectInfo.css";

export interface elementProps {
  title: string;
  contents: string;
}

interface Props {
  elements: Array<elementProps>;
}

const ProjectStack: FC<Props> = ({ elements }: Props) => {
  return (
    <div className="PrjName">
      <span>프로젝트 사용 기술 :</span>
      <br />
      {elements.map(({ title, contents }: elementProps) => (
        <div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp; - {title} </span> {contents}
        </div>
      ))}
    </div>
  );
};

export default ProjectStack;
