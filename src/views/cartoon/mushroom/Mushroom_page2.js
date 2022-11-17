import React, {useState} from "react";
import "../bee/Bee_page1.css";
import "./Mushroom_page2.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Mushroom_page2() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="mushroom_page2">
            {/* 달리는 사람 */}
            <div id="mush2_running" className="inlineBlock"></div>
            {/* 자전거 사람 */}
            <div id="mush2_bicycle">
              <div id="bicycle" />
              <div id="bicyclepedal" />
              <div id="bicyclewheel" className="wheel-rotate"/>
              <div id="bicyclewheel" className="backwheel wheel-rotate"/>
            </div>
            {/* 웃음 효과 */}
            <div id="mush2_effect"></div>
            {/* 웃고 있는 사람 */}
            <div id="mush2_happy"></div>
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Mushroom_page2;