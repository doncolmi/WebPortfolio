import React, { FC } from "react";
import "../Main.css";
import "./Flol.css";

import Icon from "../Item/Icon";
import Button from "../Item/Button";

const Flol: FC = () => {
  const GithubCode1 = "https://github.com/doncolmi/Flol";
  return (
    <div className="wrapper section">
      <div className="contents w100h100 flexColumn flexMiddle WheatBg">
        <div
          className="FlolTop flexColumn flexCenter"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <div className="FlolTitleSub">개인 프로젝트</div>
          <div className="FlolTitle">FLOL</div>
        </div>
        <div
          className="FlolMiddle"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <div className="FlolInfo">
            <div className="Flolytb">개발중인 프로젝트입니다.</div>
            <div className="ProjectInfo">
              <div className="PrjName">
                <span>프로젝트 이름 :</span> FLOL
              </div>
              <div className="PrjName">
                <span>프로젝트 설명 :</span> 게임 '리그 오브 레전드' 유저 전적
                검색 및, 유저 그룹을 생성하여 게임 유저들끼리 커뮤니케이션을
                하기 위한 사이트입니다.
              </div>
              <div className="PrjName">
                <span>프로젝트 사용 기술 :</span>
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - Back-End : </span> Node.js,
                Express, Mongoose
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - Front-End : </span> Node.js,
                Vue, Vuex
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - DB : </span> MongoDB
                <br />
              </div>
              <div className="PrjButton">
                <span>코드 및 문서 : </span>
                <Button text="GitHub" url={GithubCode1}></Button>
              </div>
            </div>
            <div
              className="ProjectMobileInfo"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <div className="PrjName">
                <span>프로젝트 이름</span>
                <br />
                <a href="#!">FLOL</a>
              </div>
              <div className="PrjName subPadding">
                <span>프로젝트 설명</span>
                <br />
                크롤링 기능을 사용하여 뉴스 컨텐츠를 가져와 원하는 언론사와
                원하는 주제를 설정해 원하는 기사만 볼 수 있게 만든 사이트입니다.
              </div>
              <div className="PrjName PrjButton">
                <span>코드 및 문서</span>
                <Button text="GitHub" url={GithubCode1}></Button>
              </div>
            </div>
          </div>
          <hr
            className="FlolHr"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
          />
          <div
            className="FlolPictureWrapper"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            <div className="SoscikPictureTitle">프로젝트 사진</div>
            <div className="FlolPictures">
              <img src="/flol/1.PNG" alt="Hello" className="FlolPicture" />
              <img src="/flol/2.PNG" alt="Hello" className="FlolPicture" />
              <img src="/flol/3.PNG" alt="Hello" className="FlolPicture" />
            </div>
          </div>
        </div>
        <div
          className="FlolBottom"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <div className="BottomTitle">
            <span>사용 기술</span>
          </div>
          <div className="BottomIcons">
            <Icon Src="/Icon/JS.jpg" Name="JS" Delay="800" />
            <Icon Src="/Icon/Nodejs.png" Name="Oracle" Delay="1100" />
            <Icon Src="/Icon/Vue.png" Name="Java" Delay="400" />
            <Icon Src="/Icon/Mongo.png" Name="Mongo" Delay="1100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flol;
