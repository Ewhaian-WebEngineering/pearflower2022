import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Bee_page1.css";
import "./Bee_page3.css";
import "../CartoonBtns.css";
import "../AniZip.css";
function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function bee_page3_init() {
  document.documentElement.style.setProperty("--cloud1", `hidden`);
  document.documentElement.style.setProperty("--cloud2", `hidden`);
  document.documentElement.style.setProperty("--cloud3", `hidden`);
  document.documentElement.style.setProperty("--cloud4", `hidden`);
  document.documentElement.style.setProperty("--cloud4-effect", `hidden`);
}
function bee_page3_ani() {
  var cloud1 = document.getElementById("cloud1");
  var cloud2 = document.getElementById("cloud2");
  var cloud3 = document.getElementById("cloud3");
  var cloud4 = document.getElementById("cloud4");
  var cloud4Effect = document.getElementById("cloud4_effect");
  cloud1.classList.add("fadeInUp");
  document.documentElement.style.setProperty("--cloud1", `visible`);
  setTimeout(() => {
    cloud2.classList.add("fadeInUp");
    document.documentElement.style.setProperty("--cloud2", `visible`);
    setTimeout(() => {
      cloud3.classList.add("fadeInUp");
      document.documentElement.style.setProperty("--cloud3", `visible`);
      setTimeout(() => {
        cloud4.classList.add("fadeInUp");
        document.documentElement.style.setProperty("--cloud4", `visible`);
        setTimeout(() => {
          cloud4Effect.classList.add("zoomIn2");
          document.documentElement.style.setProperty(
            "--cloud4-effect",
            `visible`
          );
          cloud4Effect.classList.add("shakeBody2s");
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}
function Bee_page3() {
  setScreenSize();
  useEffect(() => {
    bee_page3_init();
    bee_page3_ani();
  }, []);
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="bee_page3">
          <div id="cloud1" className="inlineBlock cloud"></div>
          <div id="cloud2" className="inlineBlock cloud"></div>
          <div id="cloud3" className="inlineBlock cloud"></div>
          <div id="cloud4" className="inlineBlock"></div>
          <div id="cloud4_effect" className="inlineBlock"></div>
        </div>
      </div>
      <div className="cartoon_btns inlineBlock">
        <Link to="/bee2">
          <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/main">
          <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/bee4">
          <div className="cartoonNextBtn inlineBlock cartoonBtn"></div>
        </Link>
      </div>
    </div>
  );
}
export default Bee_page3;
