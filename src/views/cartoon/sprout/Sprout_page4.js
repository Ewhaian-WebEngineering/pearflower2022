import React from "react";
import "../bee/Bee_page1.css";
import "./Sprout_page4.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function Sprout_page4() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="sprout_page4">
          <div id="sprout_page4_cloud1" className="inlineBlock"></div>
          <div id="sprout_page4_cloud2" className="inlineBlock"></div>
          <div id="sprout_page4_cloud3" className="inlineBlock"></div>
          <div id="sprout_page4_firecracker1_wrap" className="inlineBlock">
            <div
              id="sprout_page4_firecracker1_inside"
              className="inlineBlock"
            ></div>
            <div
              id="sprout_page4_firecracker1_outside"
              className="inlineBlock"
            ></div>
          </div>
          <div id="sprout_page4_firecracker2_wrap" className="inlineBlock">
            <div
              id="sprout_page4_firecracker2_inside"
              className="inlineBlock"
            ></div>
            <div
              id="sprout_page4_firecracker2_outside"
              className="inlineBlock"
            ></div>
          </div>
          <div id="sprout_page4_firecracker3_wrap" className="inlineBlock">
            <div
              id="sprout_page4_firecracker3_inside"
              className="inlineBlock"
            ></div>
            <div
              id="sprout_page4_firecracker3_outside"
              className="inlineBlock"
            ></div>
          </div>
          <div id="sprout_page4_merryGoRound_wrap" className="inlineBlock">
            <div
              id="sprout_page4_merryGoRound_horse1"
              className="inlineBlock"
            ></div>
            <div
              id="sprout_page4_merryGoRound_horse2"
              className="inlineBlock"
            ></div>
            <div
              id="sprout_page4_merryGoRound_horse3"
              className="inlineBlock"
            ></div>
          </div>
          <div id="sprout_page4_train1" className="inlineBlock"></div>
          <div id="sprout_page4_train2" className="inlineBlock"></div>
          <div id="sprout_page4_persons" className="inlineBlock"></div>
          <div id="sprout_page4_persons_effect" className="inlineBlock"></div>
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Sprout_page4;
