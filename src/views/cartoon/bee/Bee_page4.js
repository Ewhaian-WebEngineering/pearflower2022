import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Bee_page1.css";
import "./Bee_page4.css";
import "../AniZip.css";
import "./Clouds.css";
import "../Firecrackers.css";
import "../CartoonBtns.css";
import "../cartoonWeb.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function bee_page4_firecracker1_ani() {
  var inside = document.getElementById("bee_page4_firecracker1_inside");
  var outside = document.getElementById("bee_page4_firecracker1_outside");

  inside.classList.add("zoomIn");
  setTimeout(() => {
    outside.classList.add("zoomIn");
  }, 1000);
}
function bee_page4_firecracker2_ani() {
  var inside = document.getElementById("bee_page4_firecracker2_inside");
  var outside = document.getElementById("bee_page4_firecracker2_outside");

  inside.classList.add("zoomIn");
  setTimeout(() => {
    outside.classList.add("zoomIn");
  }, 1000);
}
function bee_page4_firecracker3_ani() {
  var inside = document.getElementById("bee_page4_firecracker3_inside");
  var outside = document.getElementById("bee_page4_firecracker3_outside");

  inside.classList.add("zoomIn");
  setTimeout(() => {
    outside.classList.add("zoomIn");
  }, 1000);
}
function firecracker_ani() {
  setTimeout(() => {
    bee_page4_firecracker1_ani();
    setTimeout(() => {
      bee_page4_firecracker2_ani();
      setTimeout(() => {
        bee_page4_firecracker3_ani();
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
}
var bee_page4_clickCnt;
function Bee_page4() {
  setScreenSize();
  useEffect(() => {
    bee_page4_clickCnt = 0;
    document.documentElement.style.setProperty("--white-cat", `hidden`);
    firecracker_init();
    firecracker_ani();
    document.documentElement.style.setProperty("--bee-page4-mouse", `visible`);
    var mouse = document.getElementById("bee_page4_mouse");
    mouse.classList.add("bee_page4_mouse_move");
  }, []);
  return (
    <div className="bee_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside">
            <div className="bee_background_wrap">
              <div id="bee_page4">
                <div className="clouds inlineBlock"></div>
                <div
                  id="bee_page4_firecracker1_wrap"
                  className="inlineBlock firecracker1_wrap"
                >
                  <div
                    id="bee_page4_firecracker1_inside"
                    className="inlineBlock firecracker1_inside"
                  ></div>
                  <div
                    id="bee_page4_firecracker1_outside"
                    className="inlineBlock firecracker1_outside"
                  ></div>
                </div>
                <div
                  id="bee_page4_firecracker2_wrap"
                  className="inlineBlock firecracker2_wrap"
                >
                  <div
                    id="bee_page4_firecracker2_inside"
                    className="inlineBlock firecracker2_inside"
                  ></div>
                  <div
                    id="bee_page4_firecracker2_outside"
                    className="inlineBlock firecracker2_outside"
                  ></div>
                </div>
                <div
                  id="bee_page4_firecracker3_wrap"
                  className="inlineBlock firecracker3_wrap"
                >
                  <div
                    id="bee_page4_firecracker3_inside"
                    className="inlineBlock firecracker3_inside"
                  ></div>
                  <div
                    id="bee_page4_firecracker3_outside"
                    className="inlineBlock firecracker3_outside"
                  ></div>
                </div>

                <div id="bee_page4_cat_person_wrap" className="inlineBlock">
                  <div id="bee_page4_white_cat" className="inlineBlock"></div>
                  <div id="bee_page4_persons" className="inlineBlock"></div>
                  <div
                    id="bee_page4_heart1"
                    className="bee_page4_heart inlineBlock swing"
                  ></div>
                  <div
                    id="bee_page4_heart2"
                    className="bee_page4_heart inlineBlock swing"
                  ></div>
                  <div
                    id="bee_page4_heart3"
                    className="bee_page4_heart inlineBlock swing"
                  ></div>
                  <div
                    id="bee_page4_persons_effect"
                    className="inlineBlock"
                  ></div>
                </div>
                <div
                  id="bee_page4_white_cat_footstep_wrap"
                  className="inlineBlock"
                  onClick={() => {
                    bee_page4_clickCnt++;
                    if (bee_page4_clickCnt == 1) {
                      //마우스 사라지게
                      document.documentElement.style.setProperty(
                        "--bee-page4-mouse",
                        "0"
                      );
                      //고양이 등장
                      document.documentElement.style.setProperty(
                        "--white-cat",
                        `visible`
                      );
                      var white_cat = document.getElementById(
                        "bee_page4_white_cat"
                      );
                      white_cat.classList.add("whiteCatEntrance");
                    }
                  }}
                >
                  <div
                    id="bee_page4_white_cat_footstep"
                    className="inlineBlock"
                  ></div>
                  <div id="bee_page4_mouse" className="inlineBlock"></div>
                </div>
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/bee3">
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
export default Bee_page4;
