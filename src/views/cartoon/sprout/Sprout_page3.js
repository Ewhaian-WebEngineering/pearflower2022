import React, { useEffect } from "react";
import "../bee/Bee_page1.css";
import "./Sprout_page3.css";
import "../SkipBtn.css";
import "../Visibility.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function sprout_page3_check1_ani() {
  //var target = document.getElementById("sprout_page3_toDoListCheck1");
  document.documentElement.style.setProperty("--check1", `100`);
}
function sprout_page3_check2_ani() {
  //var target = document.getElementById("sprout_page3_toDoListCheck2");
  document.documentElement.style.setProperty("--check2", `100`);
}
function sprout_page3_check3_ani() {
  //var target = document.getElementById("sprout_page3_toDoListCheck3");
  document.documentElement.style.setProperty("--check3", `100`);
}
function sprout_page3_check4_ani() {
  //var target = document.getElementById("sprout_page3_check4");
  document.documentElement.style.setProperty("--check4", `100`);
}
function Sprout_page3() {
  setScreenSize();
  useEffect(() => {
    document.documentElement.style.setProperty("--check1", `0`);
    document.documentElement.style.setProperty("--check2", `0`);
    document.documentElement.style.setProperty("--check3", `0`);
    document.documentElement.style.setProperty("--check4", `0`);
  }, []);
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
