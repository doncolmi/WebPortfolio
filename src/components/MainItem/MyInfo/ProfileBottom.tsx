import React, { FC } from "react";
import "./css/ProfileBottom.css";

import Icon from "../../Item/Icon";

const ProfileBottom: FC = () => {
  return (
    <div className="ProfileBottoms">
      <Icon Src="/Icon/JS.jpg" Name="JS" Delay="400" />
      <Icon Src="/Icon/TS.png" Name="TS" Delay="500" />
      <Icon Src="/Icon/React.png" Name="React" Delay="600" />
      <Icon Src="/Icon/Vue.png" Name="Vue" Delay="700" />
      <Icon Src="/Icon/MariaDB.png" Name="MariaDB" Delay="800" />
      <Icon Src="/Icon/Mongo.png" Name="Mongo" Delay="900" />
      <Icon Src="/Icon/EC2.png" Name="EC2" Delay="1000" />
      <Icon Src="/Icon/RDS.png" Name="RDS" Delay="1100" />
    </div>
  );
};

export default ProfileBottom;
