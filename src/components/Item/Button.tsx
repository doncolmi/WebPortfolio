import React, { FC } from "react";
import "./Button.css";

export interface Props {
  text: string;
  url: string;
}

const Button: FC<Props> = ({ text, url }: Props) => {
  function go() {
    console.log(url);
    window.open(url);
  }
  return (
    <button className="button" onClick={go}>
      {text}
    </button>
  );
};

export default Button;
