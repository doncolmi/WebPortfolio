import * as iP from "../interfaces/iPage";
import { Props as btnProps } from "../components/Item/Button";

const btns: Array<btnProps> = [
  {
    text: "GitHub 코드",
    url: "https://github.com/doncolmi/WHeAT",
  },
  {
    text: "화면설계서",
    url:
      "https://github.com/doncolmi/doncolmi.github.io/raw/master/1920110028%20%EC%9E%84%EB%8C%80%EC%84%B1_%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84.pptx",
  },
  {
    text: "WBS",
    url:
      "https://github.com/doncolmi/doncolmi.github.io/raw/master/1920110028%20%EC%9E%84%EB%8C%80%EC%84%B1_ERD.xlsx",
  },
];

const projectBtns: iP.iProjectBtn = {
  buttons: btns,
};

const page: iP.iPage = {
  pTop: {
    type: "개인 프로젝트",
    name: "WHeAT?",
  },
  pMiddle: {
    pInfo: {
      pYtb: {
        isDeveloping: false,
        title: "Wheat",
        src: "https://www.youtube.com/embed/z36d5SsxGBU",
      },
      prjInfo: {
        btns: projectBtns,
        prjName: {
          title: "프로젝트 이름 :",
          contents: "WHeAT?",
        },
        prjSub: {
          title: "프로젝트 설명 :",
          contents:
            "JSON 형태의 음식 데이터를 통하여 먹을 식사를 추천해주거나 투표할 수 있는 사이트입니다.",
        },
        elements: [
          { title: "JAVA", contents: "" },
          { title: "Spring", contents: "" },
          { title: "MyBatis", contents: "" },
          { title: "OracleDB", contents: "" },
        ],
      },
      prjMob: {
        prjName: {
          title: "프로젝트 이름",
          contents: "WHeAT?",
        },
        prjSub: {
          title: "프로젝트 설명",
          contents:
            "JSON 형태의 음식 데이터를 통하여 먹을 식사를 추천해주거나 투표할 수 있는 사이트입니다.",
        },
        prjBtnP: projectBtns,
        prjBtnT: projectBtns,
      },
    },
    pPic: {
      imgSrcArr: ["/wheat/1.png", "/wheat/2.png", "/wheat/3.png"],
    },
  },
  pBottom: {
    iconSrcs: [
      "/Icon/JS.jpg",
      "/Icon/Java.png",
      "/Icon/Spring.png",
      "/Icon/Oracle.png",
    ],
  },
};

class Wheat implements iP.iPage {
  pTop: iP.iPageTop;
  pMiddle: iP.iPageMiddle;
  pBottom: iP.iBottomIcons;

  constructor() {
    this.pTop = page.pTop;
    this.pMiddle = page.pMiddle;
    this.pBottom = page.pBottom;
  }
}

export default Wheat;
