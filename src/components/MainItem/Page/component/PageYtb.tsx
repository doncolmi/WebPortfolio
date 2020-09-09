import React, { FC } from "react";
import "../css/PageYtb.css";

import { iPageYtb } from "../../../../interfaces/iPage";

// https://www.youtube.com/embed/68VzpefdSH4

const PageYtb: FC<iPageYtb> = ({ isDeveloping, title, src }: iPageYtb) => {
  if (isDeveloping) {
    return <div className="NoYtb">개발중인 프로젝트입니다.</div>;
  }
  return (
    <div className="ytb">
      <iframe
        title={title}
        className="PrjYtb"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default PageYtb;
