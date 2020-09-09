import React, { FC } from "react";
import sosik from "../../data/Sosik";

import Page from "./Page/Page";

const Sosik: FC = () => {
  const sosikS = new sosik();
  return (
    <Page
      pTop={sosikS.pTop}
      pMiddle={sosikS.pMiddle}
      pBottom={sosikS.pBottom}
      bg={"sosik"}
    />
  );
};

export default Sosik;
