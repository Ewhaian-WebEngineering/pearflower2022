import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
import "./cartoon/bee/Bee_page1.css";
import "../views/cartoon/cartoonWeb.css";

var clickCnt;
function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

const textSrcs = [
  "/img/cartoon/intro/text1.png",
  "/img/cartoon/intro/text2.png",
  "/img/cartoon/intro/text3.png",
  "/img/cartoon/intro/text4.png",
  "/img/cartoon/intro/text5.png",
  "/img/cartoon/intro/text6.png",
  "/img/cartoon/intro/text7.png",
  "/img/cartoon/intro/text8.png",
  "/img/cartoon/intro/text9.png",
];
function Intro() {
  useEffect(() => {
    clickCnt = 1;
    setScreenSize();
    var target = document.getElementById("intro_speech_bubble_wrap");
    target.style.backgroundImage = `url(/img/cartoon/intro/text1.png)`;
  }, []);

  return (
    <div id="intro_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside_intro">
            {" "}
            <div id="intro_ground"></div>
            <div id="intro_black_cat_shadow_wrap">
              <div id="intro_black_cat_shadow"></div>
              <div id="intro_black_cat"></div>
            </div>
            <div id="intro_speech_bubble_wrap">
              <div id="intro_speech_bubble"></div>
              <div
                id="intro_speech_bubble_btn"
                onClick={() => {
                  if (clickCnt != 8) {
                    clickCnt++;
                    var target = document.getElementById(
                      "intro_speech_bubble_wrap"
                    );
                    target.style.backgroundImage = `url(${textSrcs[clickCnt]})`;
                  }
                }}
              ></div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="#">
                <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/main">
                <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/characterInfo">
                <div className="cartoonNextBtn inlineBlock cartoonBtn"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="webTitle"></div>
    </div>
  );
}

export default Intro;
