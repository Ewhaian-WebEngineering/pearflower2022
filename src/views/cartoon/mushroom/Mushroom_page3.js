import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Mushroom_page3.css";
import "../SkipBtn.css";
import "../cartoonWeb.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

// 불꽃놀이 함수
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

function Mushroom_page3() {
  setScreenSize();
  useEffect(() => {
    firecracker_init();
    firecracker_ani();
  }, []);
  return (
    <div className="bee_container">
      <div className="phoneFrame_wrap">
        <div className="phoneFrame">
          <div className="phoneFrameInside">
            <div className="bee_background_wrap">
              <div id="mushroom_page3">
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

                <div id="mush3_passer" />
                <div id="mush3_missedu" />
                <div id="mush3_effect" />
                <div id="mush3_highfive1" />
                <div id="mush3_heart" />
                <div id="mush3_highfive2" />
              </div>
            </div>
            <div className="cartoon_btns inlineBlock">
              <Link to="/mushroom2">
                <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/main">
                <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
              </Link>
              <Link to="/mushroom4">
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
export default Mushroom_page3;
