import React, { FC } from "react";
import "./css/ProfileTop.css";

interface Props {
  isName: boolean;
  text: string;
}

const ProfileText: FC<Props> = ({ isName, text }) => {
  if (isName) {
    return <div className="ProfileName">{text}</div>;
  }
  return <div className="ProfileSubInfo">{text}</div>;
};

export default ProfileText;
