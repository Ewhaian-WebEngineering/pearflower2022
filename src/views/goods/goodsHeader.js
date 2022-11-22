import React from 'react';
import {Link } from "react-router-dom";

import './goodsHeader.css'

function header() {
    return (
        <div className='goodsHeaderFlame'>
            <div className='headerLogo'>
               <img src="../img/logo_main.png" alt="" />
            </div>
            
            <div className='goodsHeaderLink'>
                <p> <Link to="/main">메인으로</Link> </p>
                <p> <Link to="/timeTable">행사일정</Link> </p>
                <p> <Link to="/event">이벤트</Link> </p>
                <p> <Link to="/goods">굿즈</Link> </p>
            </div>
        </div>
    )
}

export default header;