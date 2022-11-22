import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Sprout_page2.css";
import "../AniZip.css";
import "../CartoonBtns.css";
import "../cartoonWeb.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function sprout_page2_animation_entrance() {
  var target1 = document.getElementById("sprout_page2_honeyBox");
  target1.classList.add("fadeInUp");
  document.documentElement.style.setProperty("--page2-honeyBox", `100`);
  setTimeout(() => {
    var target2 = document.getElementById("sprout_page2_amusementPark");
    target2.classList.add("fadeInUp");
    document.documentElement.style.setProperty("--page2-amusementPark", `100`);
    setTimeout(() => {
      var target4 = document.getElementById("sprout_page2_talk");
      target4.classList.add("fadeInUp");
      document.documentElement.style.setProperty("--page2-talk", `100`);
      setTimeout(() => {
        var content1 = document.getElementById("sprout_page2_talk_content");
        content1.classList.add("swing");
        document.documentElement.style.setProperty(
          "--sprout-page2-talk-content",
          `visible`
        );
      }, 600);
      setTimeout(() => {
        var target3 = document.getElementById("sprout_page2_what");
        target3.classList.add("fadeInUp");
        document.documentElement.style.setProperty("--page2-what", `100`);
        setTimeout(() => {
          var content2 = document.getElementById("sprout_page2_what_question");
          content2.classList.add("swing");
          document.documentElement.style.setProperty(
            "--sprout-page2-what-content",
            `visible`
          );
        }, 600);
      }, 1300);
    }, 1300);
  }, 700);
}

function Sprout_page2() {
  setScreenSize();
  useEffect(() => {
    document.documentElement.style.setProperty("--page2-honeyBox", `0`);
    document.documentElement.style.setProperty("--page2-amusementPark", `0`);
    document.documentElement.style.setProperty("--page2-what", `0`);
    document.documentElement.style.setProperty("--page2-talk", `0`);
    document.documentElement.style.setProperty(
      "--sprout-page2-what-content",
      `hidden`
    );
    document.documentElement.style.setProperty(
      "--sprout-page2-talk-content",
      `hidden`
    );
    sprout_page2_animation_entrance();
  }, []);
  return (
    <div className="bee_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside">
            <div className="bee_background_wrap">
              <div id="sprout_page2">
                <div id="sprout_page2_honeyBox" className="inlineBlock"></div>
                <div
                  id="sprout_page2_amusementPark"
                  className="inlineBlock"
                ></div>
                <div id="sprout_page2_what_wrap" className="inlineBlock">
                  <div id="sprout_page2_what" className="inlineBlock"></div>
                  <div
                    id="sprout_page2_what_question"
                    className="inlineBlock"
                  ></div>
                </div>
                <div id="sprout_page2_talk_wrap" className="inlineBlock">
                  <div id="sprout_page2_talk" className="inlineBlock"></div>
                  <div
                    id="sprout_page2_talk_content"
                    className="inlineBlock"
                  ></div>
                </div>
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/sprout1">
                <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/main">
                <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/sprout3">
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
export default Sprout_page2;
