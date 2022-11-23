import React from "react";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import { useState, useEffect } from "react";
import './Header.css';
import './logo.css';
import Dropdown from "./event/Dropdown";
function Header() {
    const [dropDownView, setDropDownView] = useState(false);
    const clickDropDown = () => {
        setDropDownView(!dropDownView);
    }
    return (

        <div>
            <MobileView>
                <div className="MeventHeader">
                    <Link to="/main"><img alt="logoSquare" className="Eventlogo"></img></Link>
                    <div className="menuBtnDiv">
                        <img alt="menuBtn" className="menuBtnMobile" src={process.env.PUBLIC_URL + '/img/event/hamburgerBtn.png'} onClick={clickDropDown}></img>
                        {dropDownView && <Dropdown />}
                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <div className="eventHeader">
                    <Link to="/main"><img alt="logoSquare" className="Eventlogo"></img></Link>
                    <div className="menuBtnDiv">
                        <Link to="/main"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerToMain.png'}></img></Link>
                        <Link to="/timeTable"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerSchedule.png'}></img></Link>
                        <Link to="/event"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerEvent.png'}></img></Link>
                        <Link to="/goods"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerGoods.png'}></img></Link>
                    </div>
                </div>
            </BrowserView>
        </div>
    );
}
export default Header;