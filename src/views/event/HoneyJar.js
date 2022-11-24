import { BrowserView, MobileView } from "react-device-detect";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './HoneyJar.css';
import Header from "../Header";
import UseGAEventsTracker from "../../useGAEventsTracker";

function HoneyJar() {
    const [dropDownView, setDropDownView] = useState(false);
    const clickDropDown = () => {
        setDropDownView(!dropDownView);
    }

    /* GA 연동 */
    const GAEventsTracker = UseGAEventsTracker("꿀단지이벤트페이지");

    return (
        <div>
            <MobileView>
                <div className="mobileHoneyJarBg">
                    <Header />
                    <div className="mobileHoneyJarWrapper">
                        <div className="mobileBackToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="mobileBackToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBacktoEvent.png'}></img></Link>
                        </div>
                        <div className="mobileHoneyJarContent">
                            <img alt="HoneyJarExplanation" className="mobileDetailHoneyJar" src={process.env.PUBLIC_URL + '/img/event/mobileDetailHoneyJar.png'}></img>
                            <img onClick={GAEventsTracker("꿀단지신청하기")} alt="FormBtn" className="mobileHoneyJarForm" src={process.env.PUBLIC_URL + '/img/event/mobileHoneyJarForm.png'}></img>
                        </div>
                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <div className="honeyJarBg">
                    <Header />
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