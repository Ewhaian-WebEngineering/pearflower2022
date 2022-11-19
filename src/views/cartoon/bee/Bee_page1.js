import React, { useEffect, useState } from "react";
import "./Bee_page1.css";
import "./Bee_page2.css";
import "./Progress.css";
import "../AniZip.css";
import "../CartoonBtns.css";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
//honeyBox src 배열
const honeyBoxSrcs = ["/img/cartoon/bee/page1/poster/honey0.png"];
//progress bar 내용물 전부 Hidden 처리하는 함수
function beePage1Init() {
  //progress bar
  document.documentElement.style.setProperty("--progress1", `hidden`);
  document.documentElement.style.setProperty("--progress2", `hidden`);
  document.documentElement.style.setProperty("--progress3", `hidden`);
  document.documentElement.style.setProperty("--progress4", `hidden`);
  document.documentElement.style.setProperty("--progress5", `hidden`);
  document.documentElement.style.setProperty("--progress6", `hidden`);
  document.documentElement.style.setProperty("--progress7", `hidden`);
  document.documentElement.style.setProperty("--progress8", `hidden`);
  document.documentElement.style.setProperty("--progress9", `hidden`);
  document.documentElement.style.setProperty("--progress10", `hidden`);
  document.documentElement.style.setProperty("--progress11", `hidden`);
  document.documentElement.style.setProperty("--progress12", `hidden`);
  document.documentElement.style.setProperty("--progress13", `hidden`);
  document.documentElement.style.setProperty("--progress14", `hidden`);
  document.documentElement.style.setProperty("--progress15", `hidden`);
  document.documentElement.style.setProperty("--progress16", `hidden`);
  document.documentElement.style.setProperty("--progress17", `hidden`);
  document.documentElement.style.setProperty("--progress18", `hidden`);
  document.documentElement.style.setProperty("--progress19", `hidden`);
  document.documentElement.style.setProperty("--progress20", `hidden`);
  document.documentElement.style.setProperty("--progressbar", `hidden`);
  //trash
  document.documentElement.style.setProperty("--trash1", `hidden`);
  document.documentElement.style.setProperty("--trash2", `hidden`);
  document.documentElement.style.setProperty("--trahs3", `hidden`);
}
//progress bar 내용물 채워지는 애니메이션 함수
function progressAni() {
  document.documentElement.style.setProperty("--progress1", `visible`);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress2", `visible`);
  }, 100);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress3", `visible`);
  }, 200);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress4", `visible`);
  }, 300);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress5", `visible`);
  }, 400);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress6", `visible`);
  }, 500);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress7", `visible`);
  }, 600);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress8", `visible`);
  }, 700);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress9", `visible`);
  }, 800);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress10", `visible`);
  }, 900);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress11", `visible`);
  }, 1000);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress12", `visible`);
  }, 1100);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress13", `visible`);
  }, 1200);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress14", `visible`);
  }, 1300);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress15", `visible`);
  }, 1400);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress16", `visible`);
  }, 1500);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress17", `visible`);
  }, 1600);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress18", `visible`);
  }, 1700);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress19", `visible`);
  }, 1800);
  setTimeout(() => {
    document.documentElement.style.setProperty("--progress20", `visible`);
  }, 1900);
}
function bee_page1_person4_effect_ani() {
  var target = document.getElementById("bee_page1_person4_effect");
  target.classList.add("flash");
}
function bee_page1_person3_sweat() {
  var target = document.getElementById("bee_page1_person3_sweat");
  target.classList.add("sweat");
}
function bee_page1_progressBar_entrance_ani() {
  document.documentElement.style.setProperty("--progressbar", `visible`);
  var target = document.getElementById("bee_page1_person1_progressBar");
  target.classList.add("lightSpeedInLeft");
}
function bee_page1_person1_poster_entrance_ani() {
  var target1 = document.getElementById("bee_page1_person1_poster");
  var target2 = document.getElementById("bee_page1_person1_poster_honeyBox");
  target1.classList.add("twisterInDown");
  target2.classList.add("twisterInDown");
}
function falling_trashs_ani() {
  var trash1 = document.getElementById("bee_page1_person2_trash1");
  var trash2 = document.getElementById("bee_page1_person2_trash2");
  var trash3 = document.getElementById("bee_page1_person2_trash3");
  document.documentElement.style.setProperty("--trash3", `visible`);
  trash3.classList.add("falling_trash");
  setTimeout(() => {
    document.documentElement.style.setProperty("--trash2", `visible`);
    trash2.classList.add("falling_trash");
    setTimeout(() => {
      document.documentElement.style.setProperty("--trash1", `visible`);
      trash1.classList.add("falling_trash");
    }, 1000);
  }, 1000);
}
function Bee_page1() {
  const [honeyBoxSrc, setHoneyBoxSrc] = useState(honeyBoxSrcs[0]);
  useEffect(() => {
    setScreenSize();
    beePage1Init();
    bee_page1_person1_poster_entrance_ani();
    falling_trashs_ani();
    setTimeout(() => {
      bee_page1_progressBar_entrance_ani();
      progressAni();
    }, 2000);
    bee_page1_person4_effect_ani();
    bee_page1_person3_sweat();
    document.documentElement.style.setProperty("--honeyBox-src", honeyBoxSrc);
  }, []);
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="bee_page1">
          <div id="bee_page1_person1_poster" className="inlineBlock">
            <img
              id="bee_page1_person1_poster_honeyBox"
              className="inlineBlock"
              alt="honeyBox"
              src={honeyBoxSrc}
            ></img>
          </div>
          <div id="bee_page1_person1_progressBar">
            <div
              id="bee_page1_person1_progressBar_name"
              className="inlineBlock"
            ></div>
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
              <div id="progress15" className="progress__ inlineBlock"></div>
              <div id="progress16" className="progress__ inlineBlock"></div>
              <div id="progress17" className="progress__ inlineBlock"></div>
              <div id="progress18" className="progress__ inlineBlock"></div>
              <div id="progress19" className="progress__ inlineBlock"></div>
              <div id="progress20" className="progress__ inlineBlock"></div>
            </div>
            <div
              id="bee_page1_person1_progressBar_line"
              className="inlineBlock"
            ></div>
          </div>
          <div id="bee_page1_person1_effect1" className="inlineBlock"></div>
          <div id="bee_page1_person1_effect2" className="inlineBlock"></div>
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
      </div>
      <div className="cartoon_btns inlineBlock">
        <Link to="/">
          <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/main">
          <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/bee2">
          <div className="cartoonNextBtn inlineBlock cartoonBtn"></div>
        </Link>
      </div>
    </div>
  );
}
export default Bee_page1;
