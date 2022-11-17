import React, { useEffect } from "react";
import "../bee/Bee_page1.css";
import "./Sprout_page2.css";
import "../SkipBtn.css";
import "../AniZip.css";
import "../TouchArea.css";
import "../Visibility.css";

var aniNum = 0;
function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function sprout_page2_animation_entrance(aniNum) {
  var target;
  if (aniNum == 1) {
    target = document.getElementById("sprout_page2_honeyBox");
    document.documentElement.style.setProperty("--page2-honeyBox", `100`);
    target.classList.add("fadeInUp");
  } else if (aniNum == 2) {
    target = document.getElementById("sprout_page2_amusementPark");
    document.documentElement.style.setProperty("--page2-amusementPark", `100`);
    target.classList.add("fadeInUp");
  } else if (aniNum == 3) {
    target = document.getElementById("sprout_page2_what");
    document.documentElement.style.setProperty("--page2-what", `100`);
    target.classList.add("fadeInUp");
  } else if (aniNum == 4) {
    target = document.getElementById("sprout_page2_talk");
    document.documentElement.style.setProperty("--page2-talk", `100`);
    target.classList.add("fadeInUp");
  }
}
function sprout_page2_animation_exit(aniNum) {
  var target;
  if (aniNum == 1) {
    target = document.getElementById("sprout_page2_honeyBox");
    target.classList.add("fadeOutDown");
    document.documentElement.style.setProperty("--page2-honeyBox", `0`);
    setTimeout(() => {
      target = document.getElementById("sprout_page2_amusementPark");
      target.classList.add("fadeOutDown");
      document.documentElement.style.setProperty("--page2-amusementPark", `0`);
    }, 500);
  } else if (aniNum == 2) {
    target = document.getElementById("sprout_page2_what");
    target.classList.add("fadeOutDown");
    document.documentElement.style.setProperty("--page2-what", `0`);
    setTimeout(() => {
      target = document.getElementById("sprout_page2_talk");
      target.classList.add("fadeOutDown");
      document.documentElement.style.setProperty("--page2-talk", `0`);
    }, 500);
  }
}
function Sprout_page2() {
  setScreenSize();
  useEffect(() => {
    document.documentElement.style.setProperty("--page2-honeyBox", `0`);
    document.documentElement.style.setProperty("--page2-amusementPark", `0`);
    document.documentElement.style.setProperty("--page2-what", `0`);
    document.documentElement.style.setProperty("--page2-talk", `0`);
  }, []);
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
      <div className="touchArea inlineBlock">
        <div
          className="rightTouchArea inlineBlock"
          onClick={() => {
            sprout_page2_animation_entrance(++aniNum);
          }}
        ></div>
        <div
          className="leftTouchArea inlineBlock"
          onClick={() => {
            sprout_page2_animation_exit(aniNum--);
          }}
        ></div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Sprout_page2;
