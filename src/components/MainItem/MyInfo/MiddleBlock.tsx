import React, { FC } from "react";
import "./css/MiddleBlock.css";

interface Props {
  icon: string;
  contents: Array<string>;
}
// fas fa-school

const MiddleBlock: FC<Props> = ({ icon, contents }: Props) => {
  return (
    <div className="MiddleBlock">
      <div className="MiddleBlockTitle">
        <span>
          <i className={icon}></i>
        </span>
      </div>
      <div className="MiddleBlockContents">
        - {contents[0]}
        <br />- {contents[1]}
      </div>
    </div>
  );
};

export default MiddleBlock;
