import React, { FC } from "react";
import "../css/Page.css";

interface Props {
  isTitle: boolean;
  text: string;
}

const PageTitle: FC<Props> = ({ isTitle, text }: Props) => {
  if (isTitle) return <div className="PageTitle">{text}</div>;
  return <div className="PageTitleSub">{text}</div>;
};

export default PageTitle;
