import React from 'react';
import {Link } from "react-router-dom";

import './mainHeader.css'

function header() {
    const GetClick = (e) => {
        // setCurrentClick(e.target.id);
    
        if (document.body.clientWidth <= 768) {
          let toggleUL = document.getElementById("headerUl");
          let headerBox = document.getElementById("headerBox");
    
          if (toggleUL.style.display === "block") {
            toggleUL.style.display = "none";
            headerBox.style.boxShadow = "0px 5px 20px rgba(0, 0, 0, 0)";
          } else {
            toggleUL.style.display = "block";
            headerBox.style.boxShadow = "0px 5px 20px rgba(0, 0, 0, 0.1)";
          }
        }
    };
    
    return (
        <div className='headerFlame' id="headerBox">
            <div className='headerLogo'>
               <img src="../img/logo_main.png" alt="" />
            </div>
            
            <div className='headerLink' id='headerUl'>
                <p> <Link to="/main" id='toGoMainBtn'>메인으로</Link> </p>
                <p> <Link to="/timeTable">행사일정</Link> </p>
                <p> <Link to="/event">이벤트</Link> </p>
                <p> <Link to="/goods">굿즈</Link> </p>
            </div>

            <a className="toggleBtn" onClick={GetClick}>
                <div className="toggleBar" style={{ marginBottom: "5px" }} div />
                <div className="toggleBar" style={{ marginBottom: "5px" }} div />
                <div className="toggleBar" div />
            </a>
        </div>
    )
}

export default header;