import React from "react";
import { Link } from "react-router-dom";
import "../bee/Bee_page1.css";
import "./Sprout_page1.css";
import "../CartoonBtns.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function Sprout_page1() {
  setScreenSize();
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
              className="inlineBlock"
            ></div>
            <div
              id="sprout_page1_cut1_clock_short"
              className="inlineBlock"
            ></div>
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
            className="inlineBlock"
          ></div>

          <div id="sprout_page1_cut3_cat" className="inlineBlock"></div>
          <div id="sprout_page1_cut3_downTree" className="inlineBlock"></div>
          <div
            id="sprout_page1_cut3_person_effect"
            className="inlineBlock"
          ></div>
          <div id="sprout_page1_cut3_persons" className="inlineBlock"></div>
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
