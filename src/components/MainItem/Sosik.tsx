import React, { FC } from "react";
import "../Main.css";
import "./Sosik.css";

import Icon from "../Item/Icon";
import Button from "../Item/Button";

const Middle: FC = () => {
  const GithubCode1 = "https://github.com/doncolmi/SosikExpress";
  const GithubCode2 = "https://github.com/doncolmi/SosikSpringBoot";
  const ppt =
    "https://github.com/doncolmi/SosikExpress/raw/master/document/1920110028%20%EC%9E%84%EB%8C%80%EC%84%B1_%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84.pptx";
  const excel =
    "https://github.com/doncolmi/SosikExpress/raw/master/document/1920110028_%EC%9E%84%EB%8C%80%EC%84%B1ERD.xlsx";
  return (
    <div className="wrapper section">
      <div className="contents w100h100 flexColumn flexMiddle SosikBg">
        <div
          className="SosikTop flexColumn flexCenter"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <div className="SosikTitleSub">개인 프로젝트</div>
          <div className="SosikTitle">소 식</div>
        </div>
        <div className="SosikMiddle">
          <div className="SosikInfo">
            <div className="ytb">
              <iframe
                title="SosikYtb"
                className="PrjYtb"
                src="https://www.youtube.com/embed/cIwsaEkE5x8"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="ProjectInfo">
              <div className="PrjName">
                <span>프로젝트 이름 :</span> 소식
              </div>
              <div className="PrjName">
                <span>프로젝트 설명 :</span> 크롤링 기능을 사용하여 뉴스
                컨텐츠를 가져와 원하는 언론사와 원하는 주제를 설정해 원하는
                기사만 볼 수 있게 만든 사이트입니다.
              </div>
              <div className="PrjName">
                <span>프로젝트 사용 기술 :</span>
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - Back-End : </span> JAVA, Spring
                Boot, JPA
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - Front-End : </span> JavaScript,
                Node.js, Express
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp; - DB : </span> MariaDB, Redis
                <br />
              </div>
              <div className="PrjButton">
                <span>코드 및 문서 : </span>
                <Button text="Express 코드" url={GithubCode1}></Button>
                <Button text="SpringBoot 코드" url={GithubCode2}></Button>
                <Button text="화면설계서" url={ppt}></Button>
                <Button text="WBS" url={excel}></Button>
              </div>
            </div>
            <div className="ProjectMobileInfo">
              <div className="PrjName">
                <span>프로젝트 이름</span>
                <br />
                <a>소식</a>
              </div>
              <div className="PrjName subPadding">
                <span>프로젝트 설명</span>
                <br />
                크롤링 기능을 사용하여 뉴스 컨텐츠를 가져와 원하는 언론사와
                원하는 주제를 설정해 원하는 기사만 볼 수 있게 만든 사이트입니다.
              </div>
              <div className="PrjName PrjButton">
                <span>코드 및 문서</span>
                <Button text="Express 코드" url={GithubCode1}></Button>
                <Button text="SpringBoot 코드" url={GithubCode2}></Button>
                <Button text="화면설계서" url={ppt}></Button>
                <Button text="WBS" url={excel}></Button>
              </div>
            </div>
          </div>
          <hr className="SosikHr" />
          <div className="SosikPictureWrapper">
            <div className="SoscikPictureTitle">프로젝트 사진</div>
            <div className="SosikPictures">
              <img src="/sosik/1.png" alt="Hello" className="SosikPicture" />
              <img src="/sosik/2.png" alt="Hello" className="SosikPicture" />
              <img src="/sosik/3.png" alt="Hello" className="SosikPicture" />
            </div>
          </div>
        </div>
        <div className="SosikBottom">
          <div className="BottomTitle">
            <span>사용 기술</span>
          </div>
          <div className="BottomIcons">
            <Icon Src="/Icon/Nodejs.png" Name="JS" Delay="400" />
            <Icon Src="/Icon/SpringBoot.png" Name="SpringBoot" Delay="1100" />
            <Icon Src="/Icon/MariaDB.png" Name="MariaDB" Delay="800" />
            <Icon Src="/Icon/Redis.png" Name="Redis" Delay="1100" />
            <Icon Src="/Icon/EC2.png" Name="EC2" Delay="1000" />
            <Icon Src="/Icon/RDS.png" Name="RDS" Delay="1100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
