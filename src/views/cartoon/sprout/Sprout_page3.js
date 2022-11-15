import React from "react";
import "../bee/Bee_page1.css";
import "./Sprout_page3.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function Sprout_page3() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="sprout_page3">
          <div id="sprout_page3_toDoListWrap" className="inlineBlock">
            <div id="sprout_page3_toDoListBox1_wrap" className="inlineBlock">
              <div
                id="sprout_page3_toDoListCheck1"
                className="inlineBlock"
              ></div>
            </div>
            <div id="sprout_page3_toDoListBox2_wrap" className="inlineBlock">
              <div
                id="sprout_page3_toDoListCheck2"
                className="inlineBlock"
              ></div>
            </div>
            <div id="sprout_page3_toDoListBox3_wrap" className="inlineBlock">
              <div
                id="sprout_page3_toDoListCheck3"
                className="inlineBlock"
              ></div>
            </div>
          </div>
          <div id="sprout_page3_check4_wrap" className="inlineBlock">
            <div id="sprout_page3_check4" className="inlineBlock"></div>
          </div>
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Sprout_page3;
