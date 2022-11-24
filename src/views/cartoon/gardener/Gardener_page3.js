import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Gardener_page3.css";
import "../SkipBtn.css";
import "../cartoonWeb.css";
import UseGAEventsTracker from "../../../useGAEventsTracker";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Gardener_page3() {
  setScreenSize();

  useEffect(() => {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    if (vh / vw < 1) {
      // 웹 - 높이가 넓이보다 작은 경우
      document.getElementById("garden3_catchheart").style.marginTop = "55%";
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
              <div id="gardener_page3">
                <div id="garden3_catchheart" />
                <div id="garden3_welcome"></div>
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/gardener2">
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
export default Gardener_page3;
