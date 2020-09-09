import React, { FC } from "react";
import sosikr from "../../data/SosikReact";

import Page from "./Page/Page";

const SosikReact: FC = () => {
  const sosikrS = new sosikr();
  return (
    <Page
      pTop={sosikrS.pTop}
      pMiddle={sosikrS.pMiddle}
      pBottom={sosikrS.pBottom}
      bg={"sosikr"}
    />
  );
};

export default SosikReact;
