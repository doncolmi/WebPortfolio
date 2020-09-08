import React, { FC } from "react";
import "./css/MyInfoTop.css";

interface Props {
  title: string;
}

const MyInfoTop: FC<Props> = ({ title }: Props) => {
  return (
    <div
      className="MyInfoTop flexColumn flexCenter"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      <div className="MyInfoTitle">{title}</div>
    </div>
  );
};

export default MyInfoTop;
