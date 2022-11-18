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