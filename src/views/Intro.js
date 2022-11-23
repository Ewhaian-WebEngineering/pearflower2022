import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
import "./cartoon/bee/Bee_page1.css";
import "../views/cartoon/cartoonWeb.css";
import "./cartoon/AniZip.css";

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
];
function Intro() {
  useEffect(() => {
    clickCnt = 0;
    setScreenSize();
    var target = document.getElementById("intro_speech_bubble_wrap");
    target.style.backgroundImage = `url(/img/cartoon/intro/text1.png)`;
    document.documentElement.style.setProperty("--cat-mouse", `hidden`);
  }, []);

  return (
    <div id="intro_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside_intro">
            {" "}
            <div id="intro_ground"></div>
            <div id="intro_black_cat_shadow_wrap" className="bounceInDown">
              <div id="intro_black_cat_shadow"></div>
              <div
                id="intro_black_cat"
                onClick={() => {
                  if (clickCnt == 3) {
                    var cat = document.getElementById("intro_black_cat");
                    cat.style.content = `url(/public/img/cartoon/intro/surprisedCat.png)`;

                    setTimeout(() => {
                      cat.style.content = `url(/public/img/cartoon/intro/black_cat.png)`;
                    }, 700);
                  }
                }}
              ></div>
              <div id="intro_cat_mouse" className="inlineBlock"></div>
            </div>
            <div id="intro_speech_bubble_wrap" className="bounceInDown">
              <div id="intro_speech_bubble"></div>
              <div
                id="intro_speech_bubble_btn"
                onClick={() => {
                  if (clickCnt != 5) {
                    clickCnt++;
                    var target = document.getElementById(
                      "intro_speech_bubble_wrap"
                    );
                    target.style.backgroundImage = `url(${textSrcs[clickCnt]})`;
                  }
                  if (clickCnt == 3) {
                    var mouse = document.getElementById("intro_cat_mouse");
                    document.documentElement.style.setProperty(
                      "--cat-mouse",
                      `visible`
                    );
                    mouse.classList.add("intro_cat_mouse_move");
                  } else {
                    document.documentElement.style.setProperty(
                      "--cat-mouse",
                      `hidden`
                    );
                  }
                  if (clickCnt == 5) {
                    document.documentElement.style.setProperty(
                      "--next-btn",
                      `hidden`
                    );
                    setTimeout(() => {
                      var cat = document.getElementById(
                        "intro_black_cat_shadow_wrap"
                      );
                      var bubble = document.getElementById(
                        "intro_speech_bubble_wrap"
                      );
                      cat.classList.add("bounceOutUp");
                      bubble.classList.add("bounceOutUp");
                    }, 2000);
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
