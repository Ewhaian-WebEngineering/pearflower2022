import React, { useEffect } from "react";
import "./main.css";
import "./mainFirecracker.css";
import "../cartoon/AniZip.css";
import { Link } from "react-router-dom";
import UseGAEventsTracker from "../../useGAEventsTracker";

function main_firecracker1_ani() {
  var inside = document.getElementById("main_firecracker1_inside");
  var outside = document.getElementById("main_firecracker1_outside");

  inside.classList.add("zoomIn");
  setTimeout(() => {
    outside.classList.add("zoomIn");
  }, 1000);
}
function main_firecracker2_ani() {
  var inside = document.getElementById("main_firecracker2_inside");
  var outside = document.getElementById("main_firecracker2_outside");

  inside.classList.add("zoomIn");
  setTimeout(() => {
    outside.classList.add("zoomIn");
  }, 1000);
}
function main_firecracker3_ani() {
  var inside = document.getElementById("main_firecracker3_inside");
  var outside = document.getElementById("main_firecracker3_outside");

  inside.classList.add("zoomIn");
  setTimeout(() => {
    outside.classList.add("zoomIn");
  }, 1000);
}
function firecracker_ani() {
  setTimeout(() => {
    main_firecracker1_ani();
    setTimeout(() => {
      main_firecracker2_ani();
      setTimeout(() => {
        main_firecracker3_ani();
      }, 1500);
    }, 1000);
  }, 500);
}
function firecracker_init() {
  document.documentElement.style.setProperty("--firecracker1-inside", `0`);
  document.documentElement.style.setProperty("--firecracker1-outside", `0`);
  document.documentElement.style.setProperty("--firecracker2-inside", `0`);
  document.documentElement.style.setProperty("--firecracker2-outside", `0`);
  document.documentElement.style.setProperty("--firecracker3-inside", `0`);
  document.documentElement.style.setProperty("--firecracker3-outside", `0`);
  document.documentElement.style.setProperty("--persons-effect", `hidden`);
}
function Main() {
  /* GA 연동 */
  const GAEventsTracker = UseGAEventsTracker("메인");
  useEffect(() => {
    firecracker_init();
    firecracker_ani();
  }, []);
  return (
    <div className="mainFullBox">
      <div className="mainFirecrackers">
        <img src="../img/mainBackground.png" alt="" />
        <div id="main_firecracker1_wrap" className="inlineBlock">
          <div
            id="main_firecracker1_inside"
            className="inlineBlock firecracker1_inside"
          ></div>
          <div
            id="main_firecracker1_outside"
            className="inlineBlock firecracker1_outside"
          ></div>
        </div>
        <div id="main_firecracker2_wrap" className="inlineBlock">
          <div
            id="main_firecracker2_inside"
            className="inlineBlock firecracker2_inside"
          ></div>
          <div
            id="main_firecracker2_outside"
            className="inlineBlock firecracker2_outside"
          ></div>
        </div>
        <div id="main_firecracker3_wrap" className="inlineBlock">
          <div
            id="main_firecracker3_inside"
            className="inlineBlock firecracker3_inside"
          ></div>
          <div
            id="main_firecracker3_outside"
            className="inlineBlock firecracker3_outside"
          ></div>
        </div>
      </div>
      <div className="textBox"></div>
      <img className="mainLine" src="/img/mainLine.png"></img>
      <div className="eventBoxFull">
        <div className="eventGrayBox">
          <a href="https://instagram.com/ewhaian_2001?igshid=YmMyMTA2M2Y=">
            <img
              alt="mainSNS"
              id="mainGrayBox"
              src={process.env.PUBLIC_URL + "/img/mainSNS.png"}
            ></img>
          </a>
          <div className="btnBox">
            <div
              className="mainBtn"
              onClick={GAEventsTracker("이벤트바로가기")}
            >
              <Link to="/event">이벤트 바로가기</Link>{" "}
            </div>
            <div
              className="mainBtn"
              onClick={GAEventsTracker("행사일정확인하기")}
            >
              <Link to="/timeTable">행사일정 확인하기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
