import * as iP from "../interfaces/iPage";
import { Props as btnProps } from "../components/Item/Button";

const btns: Array<btnProps> = [
  {
    text: "Express 코드",
    url: "https://github.com/doncolmi/SosikExpress",
  },
  {
    text: "SpringBoot 코드",
    url: "https://github.com/doncolmi/SosikSpringBoot",
  },
  {
    text: "화면설계서",
    url:
      "https://github.com/doncolmi/SosikExpress/raw/master/document/1920110028%20%EC%9E%84%EB%8C%80%EC%84%B1_%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84.pptx",
  },
  {
    text: "WBS",
    url:
      "https://github.com/doncolmi/SosikExpress/raw/master/document/1920110028_%EC%9E%84%EB%8C%80%EC%84%B1ERD.xlsx",
  },
];

const projectBtns: iP.iProjectBtn = {
  buttons: btns,
};

const page: iP.iPage = {
  pTop: {
    type: "개인 프로젝트",
    name: "소 식",
  },
  pMiddle: {
    pInfo: {
      pYtb: {
        isDeveloping: false,
        title: "Sosik",
        src: "https://www.youtube.com/embed/cIwsaEkE5x8",
      },
      prjInfo: {
        btns: projectBtns,
        prjName: {
          title: "프로젝트 이름 :",
          contents: "소 식",
        },
        prjSub: {
          title: "프로젝트 설명 :",
          contents:
            "크롤링 기능을 사용하여 뉴스 컨텐츠를 가져와 원하는 언론사와 원하는 주제를 설정해 원하는 기사만 볼 수 있게 만든 사이트입니다.",
        },
        elements: [
          {
            title: "Back-End :",
            contents: " JAVA, Spring Boot, JPA",
          },
          { title: "Front-End :", contents: " JavaScript, Node.js, Express" },
          { title: "DB :", contents: " MariaDB, Redis" },
        ],
      },
      prjMob: {
        prjName: {
          title: "프로젝트 이름",
          contents: "소 식",
        },
        prjSub: {
          title: "프로젝트 설명",
          contents:
            "크롤링 기능을 사용하여 뉴스 컨텐츠를 가져와 원하는 언론사와 원하는 주제를 설정해 원하는 기사만 볼 수 있게 만든 사이트입니다.",
        },
        prjBtnP: projectBtns,
        prjBtnT: projectBtns,
      },
    },
    pPic: {
      imgSrcArr: ["/sosik/1.png", "/sosik/2.png", "/sosik/3.png"],
    },
  },
  pBottom: {
    iconSrcs: [
      "/Icon/Nodejs.png",
      "/Icon/SpringBoot.png",
      "/Icon/MariaDB.png",
      "/Icon/Redis.png",
      "/Icon/EC2.png",
      "/Icon/RDS.png",
    ],
  },
};

class Sosik implements iP.iPage {
  pTop: iP.iPageTop;
  pMiddle: iP.iPageMiddle;
  pBottom: iP.iBottomIcons;

  constructor() {
    this.pTop = page.pTop;
    this.pMiddle = page.pMiddle;
    this.pBottom = page.pBottom;
  }
}

export default Sosik;
