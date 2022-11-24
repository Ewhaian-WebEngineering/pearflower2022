import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Gardener_page2.css";
import "../SkipBtn.css";
import "../CartoonBtns.css";
import { set } from "lodash";
import "../cartoonWeb.css";
import UseGAEventsTracker from "../../../useGAEventsTracker";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function garden2_animation() {
  // calendar = document.getElementById("garden2_calendar");
  // 마우스 지우기
  document.getElementById("garden2_cursor").style.visibility = "hidden";
  // 바로 달력3으로 바꾸고 4종이 보인 다음에 애니메이션
  document.getElementById("garden2_cal4").classList.add("cal4_animation");
  document.getElementById("garden2_calendar").src =
    "../../../../../img/cartoon/gardener/page2/garden2calendar3.png";
  document.getElementById("garden2_cal4").style.visibility = "visible";
  document.getElementById("garden2_cal4").classList.add("cal4_animation");
  setTimeout(() => {
    document.getElementById("garden2_cal3").style.visibility = "visible";
    document.getElementById("garden2_cal3").classList.add("cal3_animation");
    document.getElementById("garden2_calendar").src =
      "../../../../../img/cartoon/gardener/page2/garden2calendar2.png";
  }, 1000);
  setTimeout(() => {
    document.getElementById("garden2_cal2").style.visibility = "visible";
    document.getElementById("garden2_cal2").classList.add("cal2_animation");
    document.getElementById("garden2_calendar").src =
      "../../../../../img/cartoon/gardener/page2/garden2calendar1.png";
  }, 2000);
  setTimeout(() => {
    document.getElementById("garden2_cal1").style.visibility = "visible";
    document.getElementById("garden2_cal1").classList.add("cal1_animation");
    document.getElementById("garden2_calendar").src =
      "../../../../../img/cartoon/gardener/page2/garden2calendar0.png";
  }, 3000);
  setTimeout(() => {
    document.getElementById("garden2_thumbup").style.visibility = "visible";
    document
      .getElementById("garden2_thumbup")
      .classList.add("thumbup_animation");
  }, 3500);
  setTimeout(() => {
    document.getElementById("garden2_effect").style.visibility = "visible";
  }, 4000);
  setTimeout(() => {
    document.getElementById("garden2_heartbubble").style.visibility = "visible";
  }, 4500);
}

function Gardener_page2() {
  setScreenSize();

  useEffect(() => {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    if (vh / vw < 1) {
      // 웹 - 높이가 넓이보다 작은 경우
      document.getElementById("garden2_heartbubble").style.marginBottom = "50%";
    }
  }, []);

  /* GA 연동 */
  const GAEventsTracker = UseGAEventsTracker("정원지기");
  useEffect(() => {
    GAEventsTracker();
  }, []);

  return (
    <div className="bee_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside">
            <div className="bee_background_wrap">
              <div id="gardener_page2">
                {/* <div id="garden2_calendar" onClick={ () => garden2_animation()}/> */}
                <img
                  onClick={() => {
                    garden2_animation();
                  }}
                  id="garden2_calendar"
                  src="../../../../../img/cartoon/gardener/page2/garden2calendar4.png"
                  alt="달력"
                />
                <div id="garden2_thumbup" />
                <div id="garden2_effect" />
                <div id="garden2_cursor" className="gardenermushroom_mouse" />

                {/* 클릭 시 애니메이션 실행 - 달력 날짜 바뀜 + 안보였던 다음 애니메이션 실행 */}
                <div id="garden2_cal1" />
                <div id="garden2_cal2" />
                <div id="garden2_cal3" />
                <div id="garden2_cal4" />

                <div id="garden2_heartbubble" />
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/gardener1">
                <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/main">
                <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/gardener3">
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
export default Gardener_page2;
