import React, { FC } from "react";
import "../Main.css";
import "./SosikReact.css";

import Icon from "../Item/Icon";
import Button from "../Item/Button";

const SosikReact: FC = () => {
  const GithubCode1 =
    "https://github.com/doncolmi/doncolmi-typescript-react-practice";
  const GithubCode2 =
    "https://github.com/doncolmi/doncolmi-typescript-express-practice";
  return (
    <div className="wrapper section">
      <div className="contents w100h100 flexColumn flexMiddle SosikrBg">
        <div
          className="SosikTop flexColumn flexCenter"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <div className="SosikTitleSub">개인 프로젝트</div>
          <div className="SosikrTitle">소 식(React)</div>
        </div>
        <div
          className="SosikMiddle"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <div className="SosikInfo">
            <div className="Sosikytb">개발중인 프로젝트입니다.</div>
            <div className="ProjectInfo">
              <div className="PrjName">
                <span>프로젝트 이름 :</span> 소 식(React)
              </div>
              <div className="PrjName">
                <span>프로젝트 설명 :</span> 미흡한 점이 많았던 기존 프로젝트
                '소 식'을 React 기반으로 다시 만드는 프로젝트입니다.
              </div>
              <div className="PrjName">
                <span>프로젝트 사용 기술 :</span>
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - Back-End : </span> Node.js,
                TypeScript, Express, Mongoose
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - Front-End : </span> Node.js,
                TypeScript, React
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - DB : </span> MongoDB
                <br />
              </div>
              <div className="PrjButton">
                <span>코드 및 문서 : </span>
                <Button text="React 코드" url={GithubCode1}></Button>
                <Button text="Express 코드" url={GithubCode2}></Button>
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
                <a href="#!">소 식(React)</a>
              </div>
              <div className="PrjName subPadding">
                <span>프로젝트 설명</span>
                <br />
                미흡한 점이 많았던 기존 프로젝트 '소 식'을 React 기반으로 다시
                만드는 프로젝트입니다.
              </div>
              <div className="PrjName PrjButton phone">
                <span>코드 및 문서</span>
                <Button text="React 코드" url={GithubCode1}></Button>
                <Button text="Express 코드" url={GithubCode2}></Button>
              </div>
              <div className="PrjButton tablet">
                <div>
                  <Button text="React 코드" url={GithubCode1}></Button>
                  <Button text="Express 코드" url={GithubCode2}></Button>
                </div>
              </div>
            </div>
          </div>
          <hr
            className="SosikHr"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
          />
          <div
            className="SosikPictureWrapper"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            <div className="SoscikPictureTitle">프로젝트 사진</div>
            <div className="SosikPictures">
              <img src="/sosikr/1.PNG" alt="Hello" className="SosikPicture" />
              <img src="/sosikr/2.PNG" alt="Hello" className="SosikPicture" />
              <img src="/sosikr/3.PNG" alt="Hello" className="SosikPicture" />
            </div>
          </div>
        </div>
        <div
          className="SosikBottom"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <div className="BottomTitle">
            <span>사용 기술</span>
          </div>
          <div className="BottomIcons">
            <Icon Src="/Icon/Nodejs.png" Name="JS" Delay="400" />
            <Icon Src="/Icon/TS.png" Name="TS" Delay="1100" />
            <Icon Src="/Icon/React.png" Name="React" Delay="1100" />
            <Icon Src="/Icon/Mongo.png" Name="Mongo" Delay="800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SosikReact;
