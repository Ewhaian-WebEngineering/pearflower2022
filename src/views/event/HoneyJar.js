import { BrowserView, MobileView } from "react-device-detect";
import { useState } from "react";
import { Link } from "react-router-dom";
import './HoneyJar.css';
import Dropdown from "./Dropdown";

function HoneyJar() {
    const [dropDownView, setDropDownView] = useState(false);
    const clickDropDown = () => {
        setDropDownView(!dropDownView);
    }
    return (
        <div>
            <MobileView>
                <div className="mobileHoneyJarBg">
                    <div className="eventHeader">
                        <Link to="/main"><img alt="logoSquare" className="Eventlogo"></img></Link>
                        <div className="menuBtnDiv">
                            <img alt="menuBtn" className="menuBtnMobile" src={process.env.PUBLIC_URL + '/img/event/hamburgerBtn.png'} onClick={clickDropDown}></img>
                            {dropDownView && <Dropdown />}
                        </div>
                    </div>
                    <div className="mobileHoneyJarWrapper">
                        <div className="mobileBackToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="mobileBackToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBacktoEvent.png'}></img></Link>
                        </div>
                        <div className="mobileHoneyJarContent">
                            <img alt="HoneyJarExplanation" className="mobileDetailHoneyJar" src={process.env.PUBLIC_URL + '/img/event/mobileDetailHoneyJar.png'}></img>
                            <img alt="FormBtn" className="mobileHoneyJarForm" src={process.env.PUBLIC_URL + '/img/event/mobileHoneyJarForm.png'}></img>
                        </div>
                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <div className="honeyJarBg">
                    <div className="eventHeader">
                        <Link to="/main"><img alt="logoSquare" className="Eventlogo"></img></Link>
                        <div className="menuBtnDiv">
                            <Link to="/main"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerToMain.png'}></img></Link>
                            <Link to="/timeTable"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerSchedule.png'}></img></Link>
                            <Link to="/event"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerEvent.png'}></img></Link>
                            <Link to="/goods"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerGoods.png'}></img></Link>
                        </div>
                    </div>
                    <div className="honeyJarWrapper">
                        <div className="backToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="backToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBacktoEvent.png'}></img></Link>
                        </div>
                        <div className="honeyJarContent">
                            <img alt="HoneyJarExplanation" className="detailHoneyJar" src={process.env.PUBLIC_URL + '/img/event/detailHoneyJar.png'}></img>
                            <img alt="FormBtn" className="HoneyJarForm" src={process.env.PUBLIC_URL + '/img/event/detailHoneyJarForm.png'}></img>
                        </div>
                    </div>
                </div>
            </BrowserView>
        </div>
    );
}
export default HoneyJar;