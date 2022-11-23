import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Mushroom_page4.css";
import "../SkipBtn.css";
import "../cartoonWeb.css";
import UseGAEventsTracker from "../../../useGAEventsTracker";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function mush4_animation() {
  // 마우스 지우기
  document.getElementById("mush4_cursor").style.visibility = "hidden";
  // 범퍼카2 애니메이션
  document
    .getElementById("mush4_bumpercar2")
    .classList.add("bumpercar2_animation");
  // 부딪히는 효과
  document.getElementById("mush4_effect").classList.add("bump_animation");
  // 범퍼카3 애니메이션
  document
    .getElementById("mush4_bumpercar3")
    .classList.add("bumpercar3_animation");
}

function Mushroom_page4() {
  setScreenSize();

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
              <div id="mushroom_page4">
                <div id="mush4_balloon" />
                <div id="mush4_opening" />
                {/* 포장마차 -> 그냥 이미지로 박아둠 */}
                {/* <div id="mush4_icecream">
                  <div id="icecream" />
                  <div id="icecreamwheel" />
                </div>
                <div id="mush4_redcart">
                  <div id="redcart" />
                  <div id="redcartwheel" />
                </div>
                <div id="mush4_hotdog" />

                <div id="mush4_watchingcart" /> */}

                {/* 범퍼카 존 */}
                <div id="mush4_bumpercarzone">
                  <div id="mush4_playground" />
                  <div id="mush4_bumpercar1" />
                  
                  <div
                    id="mush4_bumpercar2"
                    onClick={() => {
                      mush4_animation();
                    }}
                  />
                  <div id="mush4_cursor" className="gardenermushroom_mouse" />
                  <div id="mush4_bumpercar3" />
                  <div id="mush4_effect" />
                  <div id="mush4_bumpercar4" />
                </div>
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/mushroom3">
                <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/main">
                <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/characterInfo">
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
export default Mushroom_page4;
