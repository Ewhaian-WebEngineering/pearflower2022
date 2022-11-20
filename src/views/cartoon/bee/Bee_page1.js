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
//progress bar 내용물 전부 Hidden 처리하는 함수
function beePage1Init() {
  //progress bar
  document.documentElement.style.setProperty("--progressbar-wrap", `0`);
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
  //trash
  document.documentElement.style.setProperty("--trash1", `hidden`);
  document.documentElement.style.setProperty("--trash2", `hidden`);
  document.documentElement.style.setProperty("--trahs3", `hidden`);
  //mouse
  document.documentElement.style.setProperty("--honeyBoxBtn-mouse", `visible`);
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
function honeyBox_plus_ani() {
  var honeyBoxPlus = document.getElementById(
    "bee_page1_person1_honeyBoxBtn_plus"
  );
  honeyBoxPlus.classList.add("fadeInUp");
  setTimeout(() => {
    honeyBoxPlus.classList.remove("fadeInUp");
  }, 500);
}
function Bee_page1() {
  const honeyBoxSrcs = [
    `/img/cartoon/bee/page1/poster/honey0.png`,
    `/img/cartoon/bee/page1/poster/honey1.png`,
    `/img/cartoon/bee/page1/poster/honey2.png`,
    `/img/cartoon/bee/page1/poster/honey3.png`,
    `/img/cartoon/bee/page1/poster/honey4.png`,
    `/img/cartoon/bee/page1/poster/honey5.png`,
    `/img/cartoon/bee/page1/poster/honey6.png`,
    `/img/cartoon/bee/page1/poster/honey7.png`,
    `/img/cartoon/bee/page1/poster/honey8.png`,
    `/img/cartoon/bee/page1/poster/honey9.png`,
    `/img/cartoon/bee/page1/poster/honey10.png`,
    `/img/cartoon/bee/page1/poster/honey11.png`,
    `/img/cartoon/bee/page1/poster/honey12.png`,
    `/img/cartoon/bee/page1/poster/honey13.png`,
    `/img/cartoon/bee/page1/poster/honey14.png`,
    `/img/cartoon/bee/page1/poster/honey15.png`,
    `/img/cartoon/bee/page1/poster/honey16.png`,
    `/img/cartoon/bee/page1/poster/honey17.png`,
    `/img/cartoon/bee/page1/poster/honey18.png`,
    `/img/cartoon/bee/page1/poster/honey19.png`,
    `/img/cartoon/bee/page1/poster/honey20.png`,
  ];
  var clickCnt = 0;
  useEffect(() => {
    setScreenSize();
    beePage1Init();
    bee_page1_person1_poster_entrance_ani();
    falling_trashs_ani();
    setTimeout(() => {
      bee_page1_progressBar_entrance_ani();
      //progressAni();
    }, 2000);
    bee_page1_person4_effect_ani();
    bee_page1_person3_sweat();
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
              src={honeyBoxSrcs[0]}
            ></img>
            <div
              id="bee_page1_person1_honeyBoxBtn_wrap"
              className="inlineBlock"
            >
              <div
                className="inlineBlock bee_page1_person1_honeyBoxBtn"
                onClick={() => {
                  clickCnt++;
                  console.log(clickCnt);
                  var honeyBox = document.getElementById(
                    "bee_page1_person1_poster_honeyBox"
                  );
                  if (clickCnt <= 20) {
                    if (clickCnt == 1) {
                      document.documentElement.style.setProperty(
                        "--honeyBoxBtn-mouse",
                        `hidden`
                      );
                      document
                        .getElementById("bee_page1_person1_honeyBoxBtn_mouse")
                        .classList.remove("mouseMove");
                    }
                    honeyBox.src = honeyBoxSrcs[clickCnt];
                    document.documentElement.style.setProperty(
                      `--progress${clickCnt}`,
                      `visible`
                    );
                  } else {
                    honeyBox.src = honeyBoxSrcs[20];
                  }
                }}
              ></div>
              <div
                id="bee_page1_person1_honeyBoxBtn_content"
                className="inlineBlock"
              ></div>
              <div
                id="bee_page1_person1_honeyBoxBtn_mouse"
                className="inlineBlock mouseMove"
              ></div>
            </div>
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
