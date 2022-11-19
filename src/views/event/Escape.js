import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import './Escape.css';

function Escape() {
    return (
        <div>
            <MobileView>

            </MobileView>
            <BrowserView>
                <div className="EscapeBg">
                    <div className="eventHeader">
                        <Link to="/main"><img alt="logoSquare" className="logo"></img></Link>
                        <div className="menuBtnDiv">
                            <Link to="/main"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerToMain.png'}></img></Link>
                            <Link to="/timeTable"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerSchedule.png'}></img></Link>
                            <Link to="/event"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerEvent.png'}></img></Link>
                            <Link to="/goods"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerGoods.png'}></img></Link>
                        </div>
                    </div>
                    <div className="escapeWrapper">
                        <div className="backToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="backToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBackToEvent.png'}></img></Link>
                        </div>
                        <div className="escapeContent">
                            <img alt="escapeGameExplanation" className="detailEscape" src={process.env.PUBLIC_URL + '/img/event/detailEscape.png'}></img>
                            <Link to="/gamehome"><img alt="FormBtn" className="escapeBtn" src={process.env.PUBLIC_URL + '/img/event/detailEscapeBtn.png'}></img></Link>
                        </div>
                    </div>
                </div>
            </BrowserView>
        </div>
    );
}
export default Escape;