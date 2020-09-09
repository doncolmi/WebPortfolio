import * as iP from "../interfaces/iPage";
import { Props as btnProps } from "../components/Item/Button";

const btns: Array<btnProps> = [
  {
    text: "Github 코드",
    url: "https://github.com/doncolmi/Flol",
  },
];

const projectBtns: iP.iProjectBtn = {
  buttons: btns,
};

const page: iP.iPage = {
  pTop: {
    type: "개인 프로젝트",
    name: "FLOL",
  },
  pMiddle: {
    pInfo: {
      pYtb: {
        isDeveloping: true,
        title: "flol",
        src: "no",
      },
      prjInfo: {
        btns: projectBtns,
        prjName: {
          title: "프로젝트 이름 :",
          contents: "FLOL",
        },
        prjSub: {
          title: "프로젝트 설명 :",
          contents:
            "게임 '리그 오브 레전드' 유저 전적 검색 및, 유저 그룹을 생성하여 게임 유저들끼리 커뮤니케이션을 하기 위한 사이트입니다.",
        },
        elements: [
          {
            title: "Back-End :",
            contents: " Node.js, Express, Mongoose",
          },
          { title: "Front-End :", contents: " Node.js, Vue, Vuex" },
          { title: "DB :", contents: " MongoDB" },
        ],
      },
      prjMob: {
        prjName: {
          title: "프로젝트 이름",
          contents: "FLOL",
        },
        prjSub: {
          title: "프로젝트 설명",
          contents:
            "게임 '리그 오브 레전드' 유저 전적 검색 및, 유저 그룹을 생성하여 게임 유저들끼리 커뮤니케이션을 하기 위한 사이트입니다.",
        },
        prjBtnP: projectBtns,
        prjBtnT: projectBtns,
      },
    },
    pPic: {
      imgSrcArr: ["/flol/1.PNG", "/flol/2.PNG", "/flol/3.PNG"],
    },
  },
  pBottom: {
    iconSrcs: [
      "/Icon/JS.jpg",
      "/Icon/Nodejs.png",
      "/Icon/Vue.png",
      "/Icon/Mongo.png",
    ],
  },
};

class Flol implements iP.iPage {
  pTop: iP.iPageTop;
  pMiddle: iP.iPageMiddle;
  pBottom: iP.iBottomIcons;

  constructor() {
    this.pTop = page.pTop;
    this.pMiddle = page.pMiddle;
    this.pBottom = page.pBottom;
  }
}

export default Flol;
