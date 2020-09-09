import * as iP from "../interfaces/iPage";
import { Props as btnProps } from "../components/Item/Button";

const btns: Array<btnProps> = [
  {
    text: "React 코드",
    url: "https://github.com/doncolmi/doncolmi-typescript-react-practice",
  },
  {
    text: "Express 코드",
    url: "https://github.com/doncolmi/doncolmi-typescript-express-practice",
  },
];

const projectBtns: iP.iProjectBtn = {
  buttons: btns,
};

const page: iP.iPage = {
  pTop: {
    type: "개인 프로젝트",
    name: "소식 (React)",
  },
  pMiddle: {
    pInfo: {
      pYtb: {
        isDeveloping: false,
        title: "SosikReact",
        src: "https://www.youtube.com/embed/68VzpefdSH4",
      },
      prjInfo: {
        btns: projectBtns,
        prjName: {
          title: "프로젝트 이름 :",
          contents: "소 식(React)",
        },
        prjSub: {
          title: "프로젝트 설명 :",
          contents:
            "미흡한 점이 많았던 기존 프로젝트 '소 식'을 React 기반으로 다시 만드는 프로젝트입니다.",
        },
        elements: [
          {
            title: "Back-End :",
            contents: " Node.js, TypeScript, Express, Mongoose",
          },
          { title: "Front-End :", contents: " Node.js, TypeScript, React" },
          { title: "DB :", contents: " MongoDB" },
        ],
      },
      prjMob: {
        prjName: {
          title: "프로젝트 이름",
          contents: "소 식 (React)",
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
      imgSrcArr: ["/sosikr/1.PNG", "/sosikr/2.PNG", "/sosikr/3.PNG"],
    },
  },
  pBottom: {
    iconSrcs: [
      "/Icon/Nodejs.png",
      "/Icon/TS.png",
      "/Icon/React.png",
      "/Icon/Mongo.png",
    ],
  },
};

class SosikReact implements iP.iPage {
  pTop: iP.iPageTop;
  pMiddle: iP.iPageMiddle;
  pBottom: iP.iBottomIcons;

  constructor() {
    this.pTop = page.pTop;
    this.pMiddle = page.pMiddle;
    this.pBottom = page.pBottom;
  }
}

export default SosikReact;
