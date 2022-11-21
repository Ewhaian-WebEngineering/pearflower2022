import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Gardener_page3.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Gardener_page3() {
  setScreenSize();
  return (
    <div className="bee_container">
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
  );
}
export default Gardener_page3;