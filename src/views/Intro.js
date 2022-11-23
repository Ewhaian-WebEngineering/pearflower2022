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
    document.documentElement.style.setProperty("--intro-heart", `hidden`);
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
              <img
                id="intro_black_cat"
                src="/img/cartoon/intro/black_cat.png"
                onClick={() => {
                  if (clickCnt == 3) {
                    var cat = document.getElementById("intro_black_cat");
                    cat.src = `/img/cartoon/intro/surprisedCat.png`;
                    document.documentElement.style.setProperty(
                      "--cat-mouse",
                      `hidden`
                    );
                    cat.classList.add("bounceUp");
                    setTimeout(() => {
                      cat.src = `/img/cartoon/intro/black_cat.png`;
                    }, 700);
                  }
                }}
              ></img>
              <div id="intro_cat_heart" className="inlineBlock"></div>
              <div id="intro_cat_mouse" className="inlineBlock"></div>
            </div>
            <div id="intro_speech_bubble_wrap" className="bounceInDown">
              <div id="intro_speech_bubble"></div>
              <div
                id="intro_speech_bubble_btn"
                onClick={() => {
                  var cat = document.getElementById("intro_black_cat");
                  var catWrap = document.getElementById(
                    "intro_black_cat_shadow_wrap"
                  );
                  if (clickCnt == 0) {
                    cat.src = `/img/cartoon/intro/black_cat2.png`;
                  } else if (clickCnt == 1) {
                    cat.src = `/img/cartoon/intro/black_cat3.png`;
                  }
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
                  if (clickCnt == 4) {
                    var heart = document.getElementById("intro_cat_heart");
                    document.documentElement.style.setProperty(
                      "--intro-heart",
                      `visible`
                    );
                    heart.classList.add("swing");
                  }
                  if (clickCnt == 5) {
                    document.documentElement.style.setProperty(
                      "--intro-heart",
                      `hidden`
                    );
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
