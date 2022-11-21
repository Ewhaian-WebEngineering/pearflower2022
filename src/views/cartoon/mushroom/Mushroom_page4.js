import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Mushroom_page4.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function mush4_animation() {
  // 마우스 지우기
  document.getElementById("mush4_cursor").style.visibility = "hidden";
  // 범퍼카2 애니메이션
  document.getElementById("mush4_bumpercar2").classList.add("bumpercar2_animation");
  // 부딪히는 효과
  document.getElementById("mush4_effect").classList.add("bump_animation");
  // 범퍼카3 애니메이션
  document.getElementById("mush4_bumpercar3").classList.add("bumpercar3_animation");
}

function Mushroom_page4() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="mushroom_page4">
          {/* 범퍼카 부분 */}
          <div id="mush4_playground" />
          <div id="mush4_bumpercar1" />
          {/* 범퍼카 상호작용 넣을 경우 - animation 부분 따로 클래스 분리한다음 swipe 이벤트 발생 시 클래스 추가되도록 */}
          {/* http://labs.rampinteractive.co.uk/touchSwipe/demos/Page_scrolling.html
          [자바스크립트] 스와이프 방향 알아내기 - Marshall K
           */}
          <div id="mush4_bumpercar2" onClick={ () => {mush4_animation()} }/>
          <div id="mush4_cursor" className="gardenermushroom_mouse"/>
          <div id="mush4_bumpercar3" />
          <div id="mush4_effect"/>
          <div id="mush4_bumpercar4" />

          {/* 포장마차 */}
          <div id="mush4_icecream">
            <div id="icecream" />
            <div id="icecreamwheel"/>
          </div>
          <div id="mush4_redcart">
            <div id="redcart" />
            <div id="redcartwheel" />
          </div>
          <div id="mush4_hotdog" />

          <div id="mush4_watchingcart" />
        </div>
      </div>
      <div className="cartoon_btns inlineBlock">
        <Link to="/mushroom3">
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
export default Mushroom_page4;