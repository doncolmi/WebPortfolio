import React, { FC } from "react";
import "./css/LinkIcon.css";

import { useToasts } from "react-toast-notifications";

interface Props {
  href?: string;
  icon: string;
  isCopy?: boolean | false;
}

const LinkIcons: FC<Props> = ({ href, icon, isCopy }: Props) => {
  const { addToast } = useToasts();
  const copyEmail = () => {
    const tempElem = document.createElement("textarea");
    tempElem.value = "daeseong0226@gmail.com";
    document.body.appendChild(tempElem);
    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);
    addToast("이메일 주소가 복사 되었습니다.", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  if (isCopy) {
    return (
      <span onClick={copyEmail}>
        <i className="fas fa-at fa-2x"></i>
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={icon}></i>
    </a>
  );
};

export default LinkIcons;
