import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import './HoneyJar.css';

function HoneyJar() {
    return (
        <div>
            <MobileView>

            </MobileView>
            <BrowserView>
                <div className="honeyJarBg">
                    <div className="eventHeader">
                        <Link to="/main"><img alt="logoSquare" className="logo"></img></Link>
                        <div className="menuBtnDiv">
                            <Link to="/main"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerToMain.png'}></img></Link>
                            <Link to="/timeTable"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerSchedule.png'}></img></Link>
                            <Link to="/event"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerEvent.png'}></img></Link>
                            <Link to="/goods"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerGoods.png'}></img></Link>
                        </div>
                    </div>
                    <div className="honeyJarWrapper">
                        <div className="backToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="backToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBackToEvent.png'}></img></Link>
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