import React, { FC } from "react";
import "../css/PageMiddle.css";

import { iPagePicture } from "../../../../interfaces/iPage";

const PagePicture: FC<iPagePicture> = ({ imgSrcArr }: iPagePicture) => {
  return (
    <div
      className="PictureWrapper"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="500"
    >
      <div className="PictureTitle">프로젝트 사진</div>
      <div className="Pictures">
        {imgSrcArr.map((src: string) => (
          <img src={src} alt="Hello" className="Picture" />
        ))}
      </div>
    </div>
  );
};

export default PagePicture;
