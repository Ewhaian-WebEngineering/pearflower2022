import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CharacterInfo.css";
import "../Font.css";
import "./bee/Bee_page1.css";
import "./CartoonBtns.css";
import "./cartoonWeb.css";
function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function CharacterInfo() {
  useEffect(() => {
    setScreenSize();
  }, []);
  return (
    <div id="characterInfo_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside">
            <div id="characterInfo_container_wrap">
              <div id="characterInfo_header">
                <div id="characterInfo_title"></div>
                <div id="characterInfo_description"></div>
              </div>
              <div id="characterInfo_wrap_">
                <div className="characterInfo_wrap">
                  <div
                    id="characterInfo_mushroom_name"
                    className="dungeunmo_font characterInfo_name"
                  >
                    버섯
                  </div>
                  <div
                    id="characterInfo_mushroom_img"
                    className="characterInfo_img"
                  ></div>
                  <div
                    id="characterInfo_mushroom_subName"
                    className="dungeunmo_font characterInfo_subName"
                  >
                    '재학생'
                  </div>
                  <div className="characterInfo_description_wrap">
                    <div
                      id="characterInfo_mushroom_description_content"
                      className="dungeunmo_font characterInfo_description_content"
                    >
                      대면학기를 그리워하며<br></br>비대면학기를 보내던<br></br>
                      와중...<br></br>누군가로부터 온<br></br>초대 메세지!?
                    </div>
                    <Link to="/mushroom1">
                      <div className="characterInfo_description_btn"></div>
                    </Link>
                  </div>
                </div>

                <div className="characterInfo_wrap">
                  <div
                    id="characterInfo_bee_name"
                    className="dungeunmo_font characterInfo_name"
                  >
                    꿀벌
                  </div>
                  <div
                    id="characterInfo_bee_img"
                    className="characterInfo_img"
                  ></div>
                  <div
                    id="characterInfo_bee_subName"
                    className="dungeunmo_font characterInfo_subName"
                  >
                    '졸업생'
                  </div>
                  <div className="characterInfo_description_wrap">
                    <div
                      id="characterInfo_bee_description_content"
                      className="dungeunmo_font characterInfo_description_content"
                    >
                      후배들을 위해<br></br>열심히 농축한<br></br>꿀벌 표
                      <br></br>
                      경험만땅 '꿀단지'
                      <br></br>
                      드디어 나눔합니다!
                    </div>
                    <Link to="/bee1">
                      <div className="characterInfo_description_btn"></div>
                    </Link>
                  </div>
                </div>

                <div className="characterInfo_wrap">
                  <div
                    id="characterInfo_sprout_name"
                    className="dungeunmo_font characterInfo_name"
                  >
                    새싹
                  </div>
                  <div
                    id="characterInfo_sprout_img"
                    className="characterInfo_img"
                  ></div>
                  <div
                    id="characterInfo_sprout_subName"
                    className="dungeunmo_font characterInfo_subName"
                  >
                    '신입생'
                  </div>
                  <div className="characterInfo_description_wrap">
                    <div
                      id="characterInfo_sprout_description_content"
                      className="dungeunmo_font characterInfo_description_content"
                    >
                      여기저기 '배꽃정원'<br></br>도대체<br></br>'배꽃정원'이
                      뭔데?
                      <br></br>그렇게 좋은거면<br></br>내가 빠질 수 없지
                    </div>
                    <Link to="/sprout1">
                      <div className="characterInfo_description_btn"></div>
                    </Link>
                  </div>
                </div>

                <div className="characterInfo_wrap">
                  <div
                    id="characterInfo_gardener_name"
                    className="dungeunmo_font characterInfo_name"
                  >
                    정원지기
                  </div>
                  <div
                    id="characterInfo_gardener_img"
                    className="characterInfo_img"
                  ></div>
                  <div
                    id="characterInfo_gardener_subName"
                    className="dungeunmo_font characterInfo_subName"
                  >
                    '운영진'
                  </div>
                  <div className="characterInfo_description_wrap">
                    <div
                      id="characterInfo_gardener_description_content"
                      className="dungeunmo_font characterInfo_description_content"
                    >
                      뭐?<br></br>이제 대면학기라고?<br></br>이건 못 참지
                      <br></br>
                      '배꽃정원'<br></br>당장 진행시켜
                    </div>
                    <Link to="/gardener1">
                      <div className="characterInfo_description_btn"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/">
                <div
                  id="characterInfo_prevBtn"
                  className="cartoonPrevBtn inlineBlock cartoonBtn"
                ></div>
              </Link>
              <Link to="/main">
                <div
                  id="characterInfo_skipBtn"
                  className="inlineBlock cartoonBtn"
                ></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="webTitle"></div>
    </div>
  );
}
export default CharacterInfo;
