import React, { FC } from "react";
import "../Main.css";
import "./Wheat.css";

import Icon from "../Item/Icon";
import Button from "../Item/Button";

const Wheat: FC = () => {
  const GithubCode1 = "https://github.com/doncolmi/WHeAT";
  const ppt =
    "https://github.com/doncolmi/doncolmi.github.io/raw/master/1920110028%20%EC%9E%84%EB%8C%80%EC%84%B1_%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84.pptx";
  const excel =
    "https://github.com/doncolmi/doncolmi.github.io/raw/master/1920110028%20%EC%9E%84%EB%8C%80%EC%84%B1_ERD.xlsx";
  return (
    <div className="wrapper section">
      <div className="contents w100h100 flexColumn flexMiddle WheatBg">
        <div
          className="WheatTop flexColumn flexCenter"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <div className="WheatTitleSub">개인 프로젝트</div>
          <div className="WheatTitle">WHeAT?</div>
        </div>
        <div
          className="WheatMiddle"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <div className="WheatInfo">
            <div className="ytb">
              <iframe
                title="WheatYtb"
                className="PrjYtb"
                src="https://www.youtube.com/embed/z36d5SsxGBU"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="ProjectInfo">
              <div className="PrjName">
                <span>프로젝트 이름 :</span> WHeAT?
              </div>
              <div className="PrjName">
                <span>프로젝트 설명 :</span> JSON 형태의 음식 데이터를 통하여
                먹을 식사를 추천해주거나 투표할 수 있는 사이트입니다.
              </div>
              <div className="PrjName">
                <span>프로젝트 사용 기술</span>
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - JAVA</span>
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - Spring</span>
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - MyBatis</span>
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - OracleDB</span>
                <br />
              </div>
              <div className="PrjButton">
                <span>코드 및 문서 : </span>
                <Button text="GitHub" url={GithubCode1}></Button>
                <Button text="화면설계서" url={ppt}></Button>
                <Button text="WBS" url={excel}></Button>
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
                <a href="#!">소식</a>
              </div>
              <div className="PrjName subPadding">
                <span>프로젝트 설명</span>
                <br />
                크롤링 기능을 사용하여 뉴스 컨텐츠를 가져와 원하는 언론사와
                원하는 주제를 설정해 원하는 기사만 볼 수 있게 만든 사이트입니다.
              </div>
              <div className="PrjName PrjButton phone">
                <span>코드 및 문서</span>
                <Button text="GitHub" url={GithubCode1}></Button>
                <Button text="화면설계서" url={ppt}></Button>
                <Button text="WBS" url={excel}></Button>
              </div>
              <div className="PrjButton tablet">
                <div>
                  <Button text="GitHub" url={GithubCode1}></Button>
                  <Button text="화면설계서" url={ppt}></Button>
                  <Button text="WBS" url={excel}></Button>
                </div>
              </div>
            </div>
          </div>
          <hr
            className="WheatHr"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
          />
          <div
            className="WheatPictureWrapper"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            <div className="SoscikPictureTitle">프로젝트 사진</div>
            <div className="WheatPictures">
              <img src="/wheat/1.png" alt="Hello" className="WheatPicture" />
              <img src="/wheat/2.png" alt="Hello" className="WheatPicture" />
              <img src="/wheat/3.png" alt="Hello" className="WheatPicture" />
            </div>
          </div>
        </div>
        <div
          className="WheatBottom"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <div className="BottomTitle">
            <span>사용 기술</span>
          </div>
          <div className="BottomIcons">
            <Icon Src="/Icon/JS.jpg" Name="JS" Delay="800" />
            <Icon Src="/Icon/Java.png" Name="Java" Delay="400" />
            <Icon Src="/Icon/Spring.png" Name="Spring" Delay="1100" />
            <Icon Src="/Icon/Oracle.png" Name="Oracle" Delay="1100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheat;
