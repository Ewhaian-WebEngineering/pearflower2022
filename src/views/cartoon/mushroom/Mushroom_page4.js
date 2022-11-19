import React from "react";
import "../bee/Bee_page1.css";
import "./Mushroom_page4.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Mushroom_page4() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="mushroom_page4">
          {/* 범퍼카 부분 */}
          <div id="mush4_playground" />
          <div id="mush4_bumpercar1" />
          {/* 범퍼카 상호작용 넣을 경우 - animation 부분 따로 클래스 분리한다음 swipe 이벤트 발생 시 클래스 추가되도록 */}
          {/* http://labs.rampinteractive.co.uk/touchSwipe/demos/Page_scrolling.html
          [자바스크립트] 스와이프 방향 알아내기 - Marshall K
           */}
          <div id="mush4_bumpercar2" />
          <div id="mush4_bumpercar3" />
          <div id="mush4_bumpercar4" />

          {/* 포장마차 */}
          <div id="mush4_icecream">
            <div id="icecream" />
            <div id="icecreamwheel"/>
          </div>
          <div id="mush4_redcart">
            <div id="redcart" />
            <div id="redcartwheel" />
          </div>
          <div id="mush4_hotdog" />

          <div id="mush4_watchingcart" />
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Mushroom_page4;