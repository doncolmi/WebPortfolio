import { Props as BtnProps } from "../components/Item/Button";

export interface iPage {
  pTop: iPageTop;
  pMiddle: iPageMiddle;
  pBottom: iBottomIcons;
  bg?: string;
}

export interface iPageTop {
  type: string;
  name: string;
}

export interface iPageMiddle {
  pInfo: iPageInfo;
  pPic: iPagePicture;
}

export interface iPageInfo {
  pYtb: iPageYtb;
  prjInfo: iProjectInfo;
  prjMob: iProjectMobile;
}

export interface iPageYtb {
  isDeveloping: boolean;
  title: string;
  src: string;
}

export interface iProjectInfo {
  btns: iProjectBtn;
  prjName: {
    title: string;
    contents: string;
  };
  prjSub: {
    title: string;
    contents: string;
  };
  elements: Array<iElement>;
}

export interface iProjectMobile {
  prjName: iProjectName;
  prjSub: iProjectSub;
  prjBtnP: iProjectBtn;
  prjBtnT: iProjectBtn;
}

export interface iProjectName {
  isMobile?: boolean;
  title: string;
  contents: string;
}

export interface iProjectSub {
  title: string;
  contents: string;
}

export interface iProjectBtn {
  isPhone?: boolean | false;
  isTablet?: boolean | false;
  buttons: Array<BtnProps>;
}

export interface iPagePicture {
  imgSrcArr: Array<string>;
}

export interface iBottomIcons {
  iconSrcs: Array<string>;
}

export interface iElement {
  title: string;
  contents: string;
}
