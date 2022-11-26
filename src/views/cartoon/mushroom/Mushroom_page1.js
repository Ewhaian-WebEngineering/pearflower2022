import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Mushroom_page1.css";
import "../SkipBtn.css";
import "../cartoonWeb.css";
import UseGAEventsTracker from "../../../useGAEventsTracker";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Mushroom_page1() {
  setScreenSize();

  // 두 번째 컷 margintop 설정
  useEffect(() => {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    let secondcut = document.getElementById("mush1_secondcut");
    if (vh / vw > 2.18) {
      secondcut.style.marginTop = "147%";
    } else if (vh / vw >= 2.15 && vh / vw <= 2.18) {
      secondcut.style.marginTop = "142%";
    } else if (vh / vw >= 2 && vh / vw < 2.15) {
      secondcut.style.marginTop = "135%";
    } else if (vh / vw >= 1.79 && vh / vw < 2) {
      secondcut.style.marginTop = "123%";
    } else if (vw === 375 && vh === 667) {
      // iphone SE 레이아웃 조정
      secondcut.style.marginTop = "116%";
    } else if (vh/ vw >= 1 && vh/ vw < 1.79){
      secondcut.style.marginTop = "116%";
    } else {
      // 웹 - vh가 vw보다 작은 경우
      secondcut.style.marginTop = "93%";
    }
  }, []);

  /* GA 연동 */
  const GAEventsTracker = UseGAEventsTracker("버섯");
  useEffect(() => {
    GAEventsTracker();
  }, []);

  return (
    <div className="bee_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside">
            <div className="bee_background_wrap">
              <div id="mushroom_page1">
                {/* 첫 번째 컷 - 느낌표 한번 깜빡이고 네모 꿀단지 */}
                <div id="mush1_exclamationmark" />
                <div id="mush1_squarehoney" />

                {/* 두 번째 컷 - 핸드폰 진동 후 말풍선 뜨기 */}
                <div id="mush1_secondcut">
                  <div id="mush1_phone" />
                  <div id="mush1_hi" />
                  <div id="mush1_honeybubble" />
                  <div id="mush1_message" />
                </div>

                {/* 세 번째 컷 */}
                <div id="mush1_bighoneybubble" />
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/characterInfo">
                <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/main">
                <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/mushroom2">
                <div className="cartoonNextBtn inlineBlock cartoonBtn"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="webTitle"></div>
    </div>
  );
}
export default Mushroom_page1;
