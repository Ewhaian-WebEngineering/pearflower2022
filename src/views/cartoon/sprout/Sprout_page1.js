import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "../AniZip.css";
import "./Sprout_page1.css";
import "../CartoonBtns.css";

var clickCnt = 0;
function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function sweat_ani() {
  var sweat = document.getElementById("sprout_page1_cut1_sweat");
  sweat.classList.add("sweat");
}
function sprout_page1_init() {
  //대화 이미지
  document.documentElement.style.setProperty("--sprout-page1-talk1", "hidden");
  document.documentElement.style.setProperty("--sprout-page1-talk2", "hidden");
  document.documentElement.style.setProperty("--sprout-page1-talk3", "hidden");
  //피크닉 상자와 고양이
  document.documentElement.style.setProperty("--basket-black-cat", "hidden");
  document.documentElement.style.setProperty(
    "--basket-black-cat-talk",
    "hidden"
  );
  document.documentElement.style.setProperty("--basket-effect", "visible");
  //마우스
  document.documentElement.style.setProperty("--sprout-page1-mouse", "visible");
  var mouse = document.getElementById("sprout_page1_mouse");
  mouse.classList.add("sprout_page1_mouse_move");
  document.documentElement.style.setProperty(
    "--basket-black-cat-wrap",
    "hidden"
  );
  //하트 말풍선
  document.documentElement.style.setProperty(
    "--sprout-page1-person-heart",
    "hidden"
  );
}
function basket_swing_ani() {
  var basket = document.getElementById("sprout_page1_cut2_basket");
  var basketEffect = document.getElementById("sprout_page1_cut2_basket_effect");
  basket.classList.add("swing");
  basketEffect.classList.add("swing");
}
function sprout_page1_talking_ani() {
  var talk1 = document.getElementById("sprout_page1_cut2_person1_check");
  var talk2 = document.getElementById("sprout_page1_cut2_person2_talk");
  var talk3 = document.getElementById("sprout_page1_cut2_person2_heart");
  document.documentElement.style.setProperty("--sprout-page1-talk1", "visible");
  talk1.classList.add("fadeInUp");
  setTimeout(() => {
    document.documentElement.style.setProperty(
      "--sprout-page1-talk2",
      "visible"
    );
    talk2.classList.add("fadeInUp");
    setTimeout(() => {
      document.documentElement.style.setProperty(
        "--sprout-page1-talk3",
        "visible"
      );
      talk3.classList.add("fadeInUp");
    }, 1000);
  }, 700);
}
function Sprout_page1() {
  setScreenSize();
  useEffect(() => {
    sprout_page1_init();
    sweat_ani();
    sprout_page1_talking_ani();
    basket_swing_ani();
    setTimeout(() => {
      var target = document.getElementById("sprout_page1_cut3_person_heart");
      target.classList.add("fadeInUp");
      document.documentElement.style.setProperty(
        "--sprout-page1-person-heart",
        "visible"
      );
    }, 8000);
  }, []);
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="sprout_page1">
          <div id="sprout_page1_cut1_sweat" className="inlineBlock"></div>
          <div
            id="sprout_page1_cut1_coffee_cloud1"
            className="inlineBlock"
          ></div>
          <div
            id="sprout_page1_cut1_coffee_cloud2"
            className="inlineBlock"
          ></div>
          <div
            id="sprout_page1_cut1_coffee_cloud3"
            className="inlineBlock"
          ></div>
          <div id="sprout_page1_cut1_clock_wrap" className="inlineBlock">
            <div id="sprout_page1_cut1_clock" className="inlineBlock"></div>
            <div
              id="sprout_page1_cut1_clock_long"
              className="inlineBlock clock_long"
            ></div>
            <div
              id="sprout_page1_cut1_clock_short"
              className="inlineBlock clock_short"
            ></div>
          </div>

          <div
            id="sprout_page1_cut2_basketWrap"
            className="inlineBlock"
            onClick={() => {
              clickCnt++;
              var basket = document.getElementById("sprout_page1_cut2_basket");
              var basketEffect = document.getElementById(
                "sprout_page1_cut2_basket_effect"
              );
              var mouse = document.getElementById("sprout_page1_mouse");
              var black_cat = document.getElementById(
                "sprout_page1_cut2_black_cat"
              );
              var black_cat_talk = document.getElementById(
                "sprout_page1_cut2_cat_talk"
              );
              if (clickCnt == 1) {
                basket.classList.remove("swing");
                basketEffect.classList.remove("swing");
                document.documentElement.style.setProperty(
                  "--basket-effect",
                  "hidden"
                );
                document.documentElement.style.setProperty(
                  "--sprout-page1-mouse",
                  "hidden"
                );
                mouse.classList.remove("sprout_page1_mouse_move");
                setTimeout(() => {
                  black_cat.classList.add("basket_cat_entrance");
                  document.documentElement.style.setProperty(
                    "--basket-black-cat",
                    "visible"
                  );
                  setTimeout(() => {
                    document.documentElement.style.setProperty(
                      "--basket-black-cat-wrap",
                      "visible"
                    );
                    black_cat_talk.classList.add("fadeInUp");
                    document.documentElement.style.setProperty(
                      "--basket-black-cat-talk",
                      "visible"
                    );
                  }, 1500);
                }, 500);
              }
            }}
          >
            <div id="sprout_page1_cut2_basket" className="inlineBlock"></div>
            <div id="sprout_page1_cut2_black_cat_wrap" className="inlineBlock">
              <div
                id="sprout_page1_cut2_black_cat"
                className="inlineBlock"
              ></div>
            </div>
            <div
              id="sprout_page1_cut2_basket_effect"
              className="inlineBlock"
            ></div>
            <div id="sprout_page1_mouse" className="inlineBlock"></div>
          </div>
          <div
            id="sprout_page1_cut2_person1_check"
            className="inlineBlock"
          ></div>
          <div id="sprout_page1_cut2_cat_talk" className="inlineBlock"></div>
          <div
            id="sprout_page1_cut2_person2_heart"
            className="inlineBlock"
          ></div>
          <div
            id="sprout_page1_cut2_person2_talk"
            className="inlineBlock"
          ></div>
          <div
            id="sprout_page1_cut2_person1_hair"
            className="inlineBlock hair_swing"
          ></div>

          <div id="sprout_page1_cut3_cat" className="inlineBlock"></div>
          <div id="sprout_page1_cut3_downTree" className="inlineBlock"></div>
          <div
            id="sprout_page1_cut3_person_effect"
            className="inlineBlock flash"
          ></div>
          <div
            id="sprout_page1_cut3_persons"
            className="inlineBlock persons_move"
          ></div>
          <div
            id="sprout_page1_cut3_person_heart"
            className="inlineBlock"
          ></div>
        </div>
      </div>
      <div className="cartoon_btns inlineBlock">
        <Link to="/">
          <div className="cartoonPrevBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/main">
          <div className="cartoonSkipBtn inlineBlock cartoonBtn"></div>
        </Link>
        <Link to="/sprout2">
          <div className="cartoonNextBtn inlineBlock cartoonBtn"></div>
        </Link>
      </div>
    </div>
  );
}
export default Sprout_page1;
