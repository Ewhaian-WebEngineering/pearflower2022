import React from 'react';
import {Link } from "react-router-dom";

import './goodsHeader.css'

function header() {
    const GetClick = (e) => {
        // setCurrentClick(e.target.id);
    
        if (document.body.clientWidth <= 768) {
          let toggleUL = document.getElementById("gdsheaderUl");
          let headerBox = document.getElementById("gdsheaderBox");
    
          if (toggleUL.style.display === "block") {
            toggleUL.style.display = "none";
            toggleUL.style.boxShadow = "0px 20px 20px rgba(0, 0, 0, 0)";
          } else {
            toggleUL.style.display = "block";
            toggleUL.style.boxShadow = "0px 20px 20px rgba(0, 0, 0, 0.1)";
          }
        }
    };
    
    return (
        <div className='gdsHeaderFlame' id="gdsheaderBox">
            <div className='headerLogo'>
                <Link to="/main">
                    <img src="../img/logo_main.png" alt="" />
                </Link>
            </div>
            
            <div className='headerLink' id='gdsheaderUl'>
                <p> <Link to="/main" >메인으로</Link> </p>
                <p> <Link to="/timeTable">행사일정</Link> </p>
                <p> <Link to="/event">이벤트</Link> </p>
                <p> <Link to="/goods"  id='gdsToGoGoods'>굿즈</Link> </p>
            </div>

            <a className="toggleBtn" onClick={GetClick}>
                <div className="gdstoggleBar" style={{ marginBottom: "5px" }} div />
                <div className="gdstoggleBar" style={{ marginBottom: "5px" }} div />
                <div className="gdstoggleBar" div />
            </a>
        </div>
    )
}

export default header;