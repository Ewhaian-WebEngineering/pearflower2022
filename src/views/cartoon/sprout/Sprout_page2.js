import React from "react";
import "../bee/Bee_page1.css";
import "./Sprout_page2.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function Sprout_page2() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="sprout_page2">
          <div id="sprout_page2_honeyBox" className="inlineBlock"></div>
          <div id="sprout_page2_amusementPark" className="inlineBlock"></div>
          <div id="sprout_page2_what" className="inlineBlock"></div>
          <div id="sprout_page2_talk" className="inlineBlock"></div>
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Sprout_page2;
