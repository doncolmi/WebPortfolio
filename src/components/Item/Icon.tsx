import React, { FC } from "react";
import "./Icon.css";

interface Props {
  Src: string;
  Name: string;
  Delay: string;
}

const NodeIcon: FC<Props> = ({ Src, Name, Delay }: Props) => {
  return (
    <div className="icon iconFont flexCenter">
      <img src={Src} alt={Name} />
    </div>
  );
};

export default NodeIcon;
