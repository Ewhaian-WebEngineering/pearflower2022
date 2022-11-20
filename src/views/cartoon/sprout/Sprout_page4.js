import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Sprout_page4.css";
import "../CartoonBtns.css";
import "../AniZip.css";
import "../Firecrackers.css";
import "../bee/Clouds.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function sprout_page4_horse1_ani() {
  document
    .getElementById("sprout_page4_merryGoRound_horse1")
    .classList.add("horseAni1");
}
function sprout_page4_horse2_ani() {
  document
    .getElementById("sprout_page4_merryGoRound_horse2")
    .classList.add("horseAni2");
}
function sprout_page4_horse3_ani() {
  document
    .getElementById("sprout_page4_merryGoRound_horse3")
    .classList.add("horseAni1");
}
function sprout_page4_firecracker1_ani() {
  var inside = document.getElementById("sprout_page4_firecracker1_inside");
  var outside = document.getElementById("sprout_page4_firecracker1_outside");

  inside.classList.add("zoomIn");
  setTimeout(() => {
    outside.classList.add("zoomIn");
  }, 1000);
}
function sprout_page4_firecracker2_ani() {
  var inside = document.getElementById("sprout_page4_firecracker2_inside");
  var outside = document.getElementById("sprout_page4_firecracker2_outside");

  inside.classList.add("zoomIn");
  setTimeout(() => {
    outside.classList.add("zoomIn");
  }, 1000);
}
function sprout_page4_firecracker3_ani() {
  var inside = document.getElementById("sprout_page4_firecracker3_inside");
  var outside = document.getElementById("sprout_page4_firecracker3_outside");

  inside.classList.add("zoomIn");
  setTimeout(() => {
    outside.classList.add("zoomIn");
  }, 1000);
}
function sprout_page4_train1_wheel_ani() {
  document
    .getElementById("sprout_page4_train1_wheel1")
    .classList.add("wheel-rotate");
  document
    .getElementById("sprout_page4_train1_wheel2")
    .classList.add("wheel-rotate");
  document
    .getElementById("sprout_page4_train1_wheel3")
    .classList.add("wheel-rotate");
  document
    .getElementById("sprout_page4_train1_wheel4")
    .classList.add("wheel-rotate");
  document
    .getElementById("sprout_page4_train1_wheel5")
    .classList.add("wheel-rotate");
  document
    .getElementById("sprout_page4_train1_wheel6")
    .classList.add("wheel-rotate");
  document
    .getElementById("sprout_page4_train1_wheel7")
    .classList.add("wheel-rotate");
}
function sprout_page4_train1_move_ani() {
  document
    .getElementById("sprout_page4_train1_wrap")
    .classList.add("move-train");
}
function sprout_page4_persons_ani() {
  var persons = document.getElementById("sprout_page4_persons");
  var effect = document.getElementById("sprout_page4_persons_effect");
  persons.classList.add("fadeInUp");
  setTimeout(() => {
    effect.classList.add("fadeInUp");
    document.documentElement.style.setProperty("--persons-effect", `visible`);
  }, 700);
}
function firecracker_ani() {
  setTimeout(() => {
    sprout_page4_firecracker1_ani();
    setTimeout(() => {
      sprout_page4_firecracker2_ani();
      setTimeout(() => {
        sprout_page4_firecracker3_ani();
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
function Sprout_page4() {
  setScreenSize();
  useEffect(() => {
    sprout_page4_horse1_ani();
    sprout_page4_horse2_ani();
    sprout_page4_horse3_ani();
    firecracker_init();
    firecracker_ani();
    sprout_page4_train1_wheel_ani();
    sprout_page4_train1_move_ani();
    sprout_page4_persons_ani();
  }, []);
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="sprout_page4">
          <div className="clouds inlineBlock"></div>
          <div
            id="sprout_page4_firecracker1_wrap"
            className="inlineBlock firecracker1_wrap"
          >
            <div
              id="sprout_page4_firecracker1_inside"
              className="inlineBlock firecracker1_inside"
            ></div>
            <div
              id="sprout_page4_firecracker1_outside"
              className="inlineBlock firecracker1_outside"
            ></div>
          </div>
          <div
            id="sprout_page4_firecracker2_wrap"
            className="inlineBlock firecracker2_wrap"
          >
            <div
              id="sprout_page4_firecracker2_inside"
              className="inlineBlock firecracker2_inside"
            ></div>
            <div
              id="sprout_page4_firecracker2_outside"
              className="inlineBlock firecracker2_outside"
            ></div>
          </div>
          <div
            id="sprout_page4_firecracker3_wrap"
            className="inlineBlock firecracker3_wrap"
          >
            <div
              id="sprout_page4_firecracker3_inside"
              className="inlineBlock firecracker3_inside"
            ></div>
            <div
              id="sprout_page4_firecracker3_outside"
              className="inlineBlock firecracker3_outside"
            ></div>
          </div>
          <div id="sprout_page4_merryGoRound_wrap" className="inlineBlock">
            <div
              id="sprout_page4_merryGoRound_horse1"
              className="inlineBlock"
            ></div>
            <div
              id="sprout_page4_merryGoRound_horse2"
              className="inlineBlock"
            ></div>
            <div
              id="sprout_page4_merryGoRound_horse3"
              className="inlineBlock"
            ></div>
          </div>
          <div id="sprout_page4_train1_wrap" className="inlineBlock">
            <div id="sprout_page4_train1" className="inlineBlock"></div>
            <div
              id="sprout_page4_train1_wheel1"
              className="inlineBlock sprout_page4_train1_wheel"
            ></div>
            <div
              id="sprout_page4_train1_wheel2"
              className="inlineBlock sprout_page4_train1_wheel"
            ></div>
            <div
              id="sprout_page4_train1_wheel3"
              className="inlineBlock sprout_page4_train1_wheel"
            ></div>
            <div
              id="sprout_page4_train1_wheel4"
              className="inlineBlock sprout_page4_train1_wheel"
            ></div>
            <div
              id="sprout_page4_train1_wheel5"
              className="inlineBlock sprout_page4_train1_wheel"
            ></div>
            <div
              id="sprout_page4_train1_wheel6"
              className="inlineBlock sprout_page4_train1_wheel"
            ></div>
            <div
              id="sprout_page4_train1_wheel7"
              className="inlineBlock sprout_page4_train1_wheel"
            ></div>
          </div>
          <div id="sprout_page4_train2" className="inlineBlock"></div>
          <div id="sprout_page4_persons" className="inlineBlock"></div>
          <div id="sprout_page4_persons_effect" className="inlineBlock"></div>
        </div>
      </div>
      <div className="cartoon_btns inlineBlock">
        <Link to="/sprout3">
          <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/main">
          <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/">
          <div className="cartoonNextBtn inlineBlock cartoonBtn"></div>
        </Link>
      </div>
    </div>
  );
}
export default Sprout_page4;
