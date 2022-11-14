import React from "react";
import "./Bee_page1.css";
import "./Bee_page2.css";
import "../SkipBtn.css";
function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function Bee_page2() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="bee_page2">
          <div id="bee_page2_person1_honeyBox" className="inlineBlock"></div>
          <div id="bee_page2_person1_honeyEffect" className="inlineBlock"></div>
          <div id="bee_page2_person3" className="inlineBlock"></div>
          <div id="bee_page2_person3_effect" className="inlineBlock"></div>
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Bee_page2;
