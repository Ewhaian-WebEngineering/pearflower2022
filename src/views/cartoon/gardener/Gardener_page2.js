import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Gardener_page2.css";
import "../SkipBtn.css";
import "../CartoonBtns.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Gardener_page2() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="gardener_page2">
            <div id="garden2_calendar" />

            {/* 클릭 시 애니메이션 실행 - 애니메이션 부분 별도 클래스네임으로 분리한 다음에 클릭 시 차례로 클래스 추가? */}
            <div id="garden2_cal1" />
            <div id="garden2_cal2" />
            <div id="garden2_cal3" />
            <div id="garden2_cal4" />
        </div>
      </div>
      <div className="cartoon_btns inlineBlock">
        <Link to="/gardener1">
          <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/main">
          <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/gardener3">
          <div className="cartoonNextBtn inlineBlock cartoonBtn"></div>
        </Link>
      </div>
    </div>
  );
}
export default Gardener_page2;