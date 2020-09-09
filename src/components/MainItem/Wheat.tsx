import React, { FC } from "react";
import wheat from "../../data/Wheat";

import Page from "./Page/Page";

const Wheat: FC = () => {
  const wheatS = new wheat();
  return (
    <Page
      pTop={wheatS.pTop}
      pMiddle={wheatS.pMiddle}
      pBottom={wheatS.pBottom}
      bg={"wheat"}
    />
  );
};

export default Wheat;
