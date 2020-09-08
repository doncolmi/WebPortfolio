import React, { FC } from "react";
import "./css/ProfileTop.css";

import ProfileImg from "./ProfileImg";
import LinkIcon from "./LinkIcon";
import ProfileText from "./ProfileText";

interface Props {}

const ProfileTop: FC<Props> = () => {
  return (
    <div
      className="ProfileTop flexCenter"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <ProfileImg />
      <div className="linkIcon">
        <LinkIcon
          href="https://github.com/doncolmi"
          icon="fab fa-github fa-2x"
        />
        <LinkIcon
          href="https://doncolmi.github.io/"
          icon="fab fa-blogger-b fa-2x"
        />
        <LinkIcon icon="fas fa-at fa-2x" isCopy={true} />
      </div>
      <hr className="ProfileHr" />
      <ProfileText isName={false} text="경력 없는 신입" />
      <ProfileText isName={true} text="임대성" />
      <ProfileText isName={false} text="1997 . 02 . 26" />
      <ProfileText isName={false} text="林 大 城 / Lim Dae Seong" />
    </div>
  );
};

export default ProfileTop;
