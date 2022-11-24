import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Gardener_page1.css";
// import "../SkipBtn.css";
import "../CartoonBtns.css";
import "../cartoonWeb.css";
import UseGAEventsTracker from "../../../useGAEventsTracker";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function garden1_animation() {
  document
    .getElementById("garden1_cursor")
    .classList.remove("gardenermushroom_mouse");
  document.getElementById("garden1_first").style.visibility = "visible";
  document.getElementById("garden1_first").classList.add("garden1_jump");
  document.getElementById("garden1_second").classList.add("garden1_talk");
}

function Gardener_page1() {
  setScreenSize();

  useEffect(() => {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    if (vh / vw <= 2) {
      document.getElementById("garden1_first").style.marginTop = "50%";
      document.getElementById("garden1_second").style.marginTop = "88%";
    }
    if (vh / vw < 1) {
      // 웹 - 높이가 넓이보다 작은 경우
      document.getElementById("garden1_second").style.marginTop = "80%";
      document.getElementById("garden1_first").style.width = "45%";
      document.getElementById("garden1_second").style.width = "45%";
    }
  }, []);

  /* GA 연동 */
  const GAEventsTracker = UseGAEventsTracker("정원지기");
  useEffect(() => {
    GAEventsTracker();
  }, []);

  return (
    <div className="bee_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside">
            <div className="bee_background_wrap">
              <div id="gardener_page1">
                <div
                  id="garden1_window"
                  onClick={() => {
                    garden1_animation();
                  }}
                />
                <div id="garden1_cursor" className="gardenermushroom_mouse" />
                <div id="garden1_first" />
                <div id="garden1_second" />
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/characterInfo">
                <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/main">
                <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/gardener2">
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
export default Gardener_page1;
