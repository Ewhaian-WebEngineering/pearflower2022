import React, {useEffect} from "react";
import "../bee/Bee_page1.css";
import "./Gardener_page1.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Gardener_page1() {
  setScreenSize();

  useEffect( () => {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    if (vh/vw <= 2) {
      document.getElementById("garden1_first").style.marginTop = "50%";
      document.getElementById("garden1_second").style.marginTop= "88%";
    } 
  }, []);

  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="gardener_page1">
            <div id="garden1_cursor" />
            <div id="garden1_first" />
            <div id="garden1_second" />
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Gardener_page1;