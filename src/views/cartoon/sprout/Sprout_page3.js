import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Sprout_page3.css";
import "../CartoonBtns.css";
import "../cartoonWeb.css";
import UseGAEventsTracker from "../../../useGAEventsTracker";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
const checkBox1Srcs = [
  "/img/cartoon/sprout/page3/checkCircle2.png",
  "/img/cartoon/sprout/page3/checkCircle.png",
];
const checkBox2Srcs = [
  "/img/cartoon/sprout/page3/toDoBox1_.png",
  "/img/cartoon/sprout/page3/toDoBox1.png",
];
const checkBox3Srcs = [
  "/img/cartoon/sprout/page3/toDoBox2_.png",
  "/img/cartoon/sprout/page3/toDoBox2.png",
];
const checkBox4Srcs = [
  "/img/cartoon/sprout/page3/toDoBox3_.png",
  "/img/cartoon/sprout/page3/toDoBox3.png",
];
function sprout_page3_check1_ani() {
  var target = document.getElementById("sprout_page3_toDoListCheck1");
  target.classList.add("zoomIn2");
  document.documentElement.style.setProperty("--check1", `100`);
}
function sprout_page3_check2_ani() {
  var target = document.getElementById("sprout_page3_toDoListCheck2");
  target.classList.add("zoomIn2");
  document.documentElement.style.setProperty("--check2", `100`);
}
function sprout_page3_check3_ani() {
  var target = document.getElementById("sprout_page3_toDoListCheck3");
  target.classList.add("zoomIn2");
  document.documentElement.style.setProperty("--check3", `100`);
}
function sprout_page3_check4_ani() {
  var target = document.getElementById("sprout_page3_check4");
  target.classList.add("zoomIn2");
  document.documentElement.style.setProperty("--check4", `100`);
}
function check1() {
  var target = document.getElementById("sprout_page3_check4Bg");
  target.src = checkBox1Srcs[1];
  sprout_page3_check4_ani();
  document.documentElement.style.setProperty("--sprout-page3-mouse1", "hidden");
}
function check2() {
  var target = document.getElementById("sprout_page3_check1Bg");
  target.src = checkBox2Srcs[1];
  sprout_page3_check1_ani();
  document.documentElement.style.setProperty("--sprout-page3-mouse2", "hidden");
}
function check3() {
  var target = document.getElementById("sprout_page3_check2Bg");
  target.src = checkBox3Srcs[1];
  sprout_page3_check2_ani();
  document.documentElement.style.setProperty("--sprout-page3-mouse2", "hidden");
}
function check4() {
  var target = document.getElementById("sprout_page3_check3Bg");
  target.src = checkBox4Srcs[1];
  sprout_page3_check3_ani();
  document.documentElement.style.setProperty("--sprout-page3-mouse2", "hidden");
}
function mouseInit() {
  var mouse1 = document.getElementById("sprout_page3_mouse1");
  var mouse2 = document.getElementById("sprout_page3_mouse2");
  mouse1.classList.add("sprout_page3_mouse1_move");
  mouse2.classList.add("sprout_page3_mouse2_move");
}
function Sprout_page3() {
  setScreenSize();
  useEffect(() => {
    document.documentElement.style.setProperty("--check1", `0`);
    document.documentElement.style.setProperty("--check2", `0`);
    document.documentElement.style.setProperty("--check3", `0`);
    document.documentElement.style.setProperty("--check4", `0`);
    mouseInit();
  }, []);

  /* GA 연동 */
  const GAEventsTracker = UseGAEventsTracker("새싹");
  useEffect(() => {
    GAEventsTracker();
  }, []);
  
  return (
    <div className="bee_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside">
            <div className="bee_background_wrap">
              <div id="sprout_page3">
                <div id="sprout_page3_toDoListWrap" className="inlineBlock">
                  <div
                    id="sprout_page3_toDoListBox1_wrap"
                    className="inlineBlock"
                    onClick={() => {
                      check2();
                    }}
                  >
                    <img
                      id="sprout_page3_check1Bg"
                      className="inlineBlock"
                      alt="checkBox"
                      src={checkBox2Srcs[0]}
                    ></img>
                    <div
                      id="sprout_page3_toDoListCheck1"
                      className="inlineBlock"
                    ></div>
                  </div>
                  <div
                    id="sprout_page3_toDoListBox2_wrap"
                    className="inlineBlock"
                    onClick={() => {
                      check3();
                    }}
                  >
                    <img
                      id="sprout_page3_check2Bg"
                      className="inlineBlock"
                      alt="checkBox"
                      src={checkBox3Srcs[0]}
                    ></img>
                    <div
                      id="sprout_page3_toDoListCheck2"
                      className="inlineBlock"
                    ></div>
                  </div>
                  <div
                    id="sprout_page3_toDoListBox3_wrap"
                    className="inlineBlock"
                    onClick={() => {
                      check4();
                    }}
                  >
                    <img
                      id="sprout_page3_check3Bg"
                      className="inlineBlock"
                      alt="checkBox"
                      src={checkBox4Srcs[0]}
                    ></img>
                    <div
                      id="sprout_page3_toDoListCheck3"
                      className="inlineBlock"
                    ></div>
                  </div>
                </div>
                <div
                  id="sprout_page3_check4_wrap"
                  className="inlineBlock"
                  onClick={() => {
                    check1();
                  }}
                >
                  <img
                    id="sprout_page3_check4Bg"
                    className="inlineBlock"
                    alt="checkBox"
                    src={checkBox1Srcs[0]}
                  ></img>
                  <div id="sprout_page3_check4" className="inlineBlock"></div>
                </div>
                <div id="sprout_page3_mouse1" className="inlineBlock"></div>
                <div id="sprout_page3_mouse2" className="inlineBlock"></div>
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/sprout2">
                <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/main">
                <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/sprout4">
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
export default Sprout_page3;
