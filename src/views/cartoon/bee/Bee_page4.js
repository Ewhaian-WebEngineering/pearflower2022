import React from "react";
import "./Bee_page1.css";
import "./Bee_page4.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function Bee_page4() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="bee_page4">
          <div
            id="bee_page4_heart1"
            className="bee_page4_heart inlineBlock"
          ></div>
          <div
            id="bee_page4_heart2"
            className="bee_page4_heart inlineBlock"
          ></div>
          <div
            id="bee_page4_heart3"
            className="bee_page4_heart inlineBlock"
          ></div>
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Bee_page4;
