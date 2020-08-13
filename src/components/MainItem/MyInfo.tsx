import React, { FC } from "react";
import "../Main.css";
import "./MyInfo.css";

import Icon from "../Item/Icon";


const Middle: FC = () => {

  return (
    <div className="wrapper section">
      <div className="contents w100h100 flexColumn flexMiddle bgColor">
        <div
          className="MyInfoTop flexColumn flexCenter"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <div className="MyInfoTitle">Profile</div>
        </div>
        <div className="middleBottom flexColumn ProfileCenter">
            <div className="ProfileTop flexCenter" data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200">
                <div className="ProfileImg"></div>
                <div className="linkIcon">
                    <a href="https://github.com/doncolmi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                    <a href="https://doncolmi.github.io/" target="_blank" rel="noopener noreferrer"><i className="fab fa-blogger-b fa-2x"></i></a>
                    <a href="https://www.instagram.com/l2i2m6c/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                </div>
                <hr className="ProfileHr"/>
                <div className="ProfileSubInfo">경력 없는 신입</div>
                <div className="ProfileName">임대성</div>
                <div className="ProfileSubInfo">1997 . 02 . 26</div>
                <div className="ProfileSubInfo">林 大 城 / Lim Dae Seong</div>
            </div>
            <div className="ProfileMiddle" data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200">
                <div className="MiddleBlock">
                    <div className="MiddleBlockTitle">
                        <span><i className="fas fa-school"></i></span>
                    </div>
                    <div className="MiddleBlockContents">
                        <ul>
                            <li>2019.03 ~ : 한국폴리텍대학 서울강서캠퍼스 재학</li>
                            <li>2013.03 ~ 2016.02 : 광주 성덕고등학교 졸업</li>
                        </ul>
                    </div>
                </div>
                <div className="MiddleBlock">
                    <div className="MiddleBlockTitle">
                        <span><i className="fas fa-award"></i></span>
                    </div>
                    <div className="MiddleBlockContents">
                        <ul>
                            <li>2020.03 ~ : 한이음 ICT멘토링 프로젝트 참여</li>
                            <li>2020.08 : 정보처리산업기사 취득</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ProfileBottom" >
                <Icon Src="/Icon/JS.jpg" Name="JS" Delay="400" />
                <Icon Src="/Icon/TS.png" Name="TS" Delay="500" />
                <Icon Src="/Icon/React.png" Name="React" Delay="600" />
                <Icon Src="/Icon/Vue.png" Name="Vue" Delay="700" />
                <Icon Src="/Icon/MariaDB.png" Name="MariaDB" Delay="800" />
                <Icon Src="/Icon/Mongo.png" Name="Mongo" Delay="900" />
                <Icon Src="/Icon/EC2.png" Name="EC2" Delay="1000" />
                <Icon Src="/Icon/RDS.png" Name="RDS" Delay="1100" />

            </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
