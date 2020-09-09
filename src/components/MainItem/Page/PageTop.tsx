import React, { FC } from "react";
import "./css/Page.css";

import PageTitle from "./component/PageTitle";

interface Props {
  type: string;
  name: string;
}

const PageTop: FC<Props> = ({ type, name }: Props) => {
  return (
    <div
      className="PageTop flexColumn flexCenter"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      <PageTitle isTitle={false} text={type} />
      <PageTitle isTitle={true} text={name} />
    </div>
  );
};

export default PageTop;
