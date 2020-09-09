import React, { FC } from "react";
import flol from "../../data/Flol";

import Page from "./Page/Page";

const Flol: FC = () => {
  const flolS = new flol();
  return (
    <Page
      pTop={flolS.pTop}
      pMiddle={flolS.pMiddle}
      pBottom={flolS.pBottom}
      bg={"flol"}
    />
  );
};

export default Flol;
