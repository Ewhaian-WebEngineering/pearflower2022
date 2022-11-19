import React from "react";
import "./Bee_page1.css";
import "./Bee_page2.css";
import "./Progress.css";
import "../SkipBtn.css";
//import { Link } from "react-router-dom";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function Bee_page1() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="bee_page1">
          <div id="bee_page1_person1_poster" className="inlineBlock"></div>
          <div
            id="bee_page1_person1_progressBar_name"
            className="inlineBlock"
          ></div>
          <div id="bee_page1_person1_progressBar">
            <div
              id="bee_page1_person1_progressBar_wrap"
              className="inlineBlock"
            >
              <div id="progress1" className="progress inlineBlock"></div>
              <div id="progress2" className="progress inlineBlock"></div>
              <div id="progress3" className="progress inlineBlock"></div>
              <div id="progress4" className="progress inlineBlock"></div>
              <div id="progress5" className="progress inlineBlock"></div>
              <div id="progress6" className="progress inlineBlock"></div>
              <div id="progress7" className="progress_ inlineBlock"></div>
              <div id="progress8" className="progress_ inlineBlock"></div>
              <div id="progress9" className="progress_ inlineBlock"></div>
              <div id="progress10" className="progress_ inlineBlock"></div>
              <div id="progress11" className="progress_ inlineBlock"></div>
              <div id="progress12" className="progress_ inlineBlock"></div>
              <div id="progress13" className="progress__ inlineBlock"></div>
              <div id="progress14" className="progress__ inlineBlock"></div>
            </div>
          </div>
          <div
            id="bee_page1_person1_progressBar_line"
            className="inlineBlock"
          ></div>
          <div id="bee_page1_person1" className="inlineBlock"></div>
          <div id="bee_page1_person2" className="inlineBlock"></div>
          <div
            id="bee_page1_person2_trash1"
            className="bee_page1_person2_trash inlineBlock"
          ></div>
          <div
            id="bee_page1_person2_trash2"
            className="bee_page1_person2_trash inlineBlock"
          ></div>
          <div
            id="bee_page1_person2_trash3"
            className="bee_page1_person2_trash inlineBlock"
          ></div>
          <div id="bee_page1_person2_effect" className="inlineBlock"></div>
          <div id="bee_page1_person3" className="inlineBlock"></div>
          <div id="bee_page1_person3_sweat" className="inlineBlock"></div>
          <div id="bee_page1_person4" className="inlineBlock"></div>
          <div id="bee_page1_person4_effect" className="inlineBlock"></div>
          <div id="bee_page1_person4_work1" className="inlineBlock"></div>
          <div id="bee_page1_person4_work2" className="inlineBlock"></div>
        </div>
        <div id="bee_page2"></div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Bee_page1;
