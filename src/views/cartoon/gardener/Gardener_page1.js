import React, {useState} from "react";
import "../bee/Bee_page1.css";
// import "./Mushroom_page2.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Gardener_page1() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="gardener_page1">
            정원지기1
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Gardener_page1;