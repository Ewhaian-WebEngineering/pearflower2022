import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Bee_page1.css";
import "./Bee_page2.css";
import "../CartoonBtns.css";
import "../AniZip.css";
import "../cartoonWeb.css";
import UseGAEventsTracker from "../../../useGAEventsTracker";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function window_day_change_ani() {
  setTimeout(() => {
    document.documentElement.style.setProperty("--window-night", `visible`);
    document.documentElement.style.setProperty(
      "--window-night-star",
      `visible`
    );
  }, 800);
  var windowNightBg = document.getElementById("bee_page2_window_night");
  windowNightBg.classList.add("openDownLeftReturn");
  var windowNightStar = document.getElementById("bee_page2_window_night_star");
  windowNightStar.classList.add("openDownLeftReturn");
  var windowDayStar = document.getElementById("bee_page2_window_day_star");
  windowDayStar.classList.add("openDownRight");
  setTimeout(() => {
    document.documentElement.style.setProperty("--window-day-star", `hidden`);
  }, 4000);
}
function beePage2Init() {
  document.documentElement.style.setProperty("--window-night", `hidden`);
  document.documentElement.style.setProperty("--window-night-star", `hidden`);
  document.documentElement.style.setProperty("--honey-effect1", `hidden`);
  document.documentElement.style.setProperty("--honey-effect2", `hidden`);
  document.documentElement.style.setProperty(
    "--bee_page2_honeyBox_mouse",
    `visible`
  );
  var mouse = document.getElementById("bee_page2_honeyBox_mouse");
  mouse.classList.add("bee_page2_honeyBox_mouse");
}
function throw_honey_ani() {
  var honey = document.getElementById("bee_page2_person1_honeyBox");
  honey.classList.add("throwHoneyBox");
  setTimeout(() => {
    document.documentElement.style.setProperty("--honey-effect2", `visible`);
    var honey_effect = document.getElementById("bee_page2_person1_honeyEffect");
    honey_effect.classList.add("fadeInUp");
  }, 700);
  setTimeout(() => {
    document.documentElement.style.setProperty("--honey-effect1", `visible`);
  }, 3000);
}

function Bee_page2() {
  setScreenSize();
  useEffect(() => {
    beePage2Init();
    setTimeout(() => {
      window_day_change_ani();
    }, 2000);
  }, []);

  /* GA 연동 */
  const GAEventsTracker = UseGAEventsTracker("꿀벌");
  useEffect(() => {
    GAEventsTracker();
  }, []);

  return (
    <div className="bee_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside">
            <div className="bee_background_wrap">
              <div id="bee_page2">
                <div id="bee_page2_window_wrap" className="inlineBlock">
                  <div
                    id="bee_page2_window_content_wrap"
                    className="inlineBlock"
                  >
                    <div
                      id="bee_page2_window_day"
                      className="inlineBlock"
                    ></div>
                    <div
                      id="bee_page2_window_night"
                      className="inlineBlock"
                    ></div>
                    <div
                      id="bee_page2_window_day_star"
                      className="inlineBlock"
                    ></div>
                    <div
                      id="bee_page2_window_night_star"
                      className="inlineBlock"
                    ></div>
                  </div>
                  <div id="bee_page2_window_line" className="inlineBlock"></div>
                </div>
                <div
                  id="bee_page2_person1_honeyBox"
                  className="inlineBlock"
                  onClick={() => {
                    document.documentElement.style.setProperty(
                      "--bee_page2_honeyBox_mouse",
                      `hidden`
                    );
                    var mouse = document.getElementById(
                      "bee_page2_honeyBox_mouse"
                    );
                    mouse.classList.remove("bee_page2_honeyBox_mouse");
                    throw_honey_ani();
                  }}
                ></div>
                <div
                  id="bee_page2_honeyBox_mouse"
                  className="inlineBlock"
                ></div>
                <div
                  id="bee_page2_person1_honeyEffect"
                  className="inlineBlock"
                ></div>
                <div
                  id="bee_page2_person1_honeyEffect2"
                  className="inlineBlock"
                ></div>
                <div id="bee_page2_person2" className="inlineBlock"></div>
                <div
                  id="bee_page2_person3"
                  className="inlineBlock shakeBody"
                ></div>
                <div
                  id="bee_page2_person3_effect"
                  className="inlineBlock"
                ></div>
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/bee1">
                <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/main">
                <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/bee3">
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
export default Bee_page2;
