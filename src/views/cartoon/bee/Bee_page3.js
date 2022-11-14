import React from "react";
import "./Bee_page1.css";
import "./Bee_page3.css";
import "../SkipBtn.css";
function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Bee_page3() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="bee_page3">
          <div id="cloud1" className="inlineBlock cloud"></div>
          <div id="cloud2" className="inlineBlock cloud"></div>
          <div id="cloud3" className="inlineBlock cloud"></div>
          <div id="cloud4" className="inlineBlock cloud"></div>
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Bee_page3;
