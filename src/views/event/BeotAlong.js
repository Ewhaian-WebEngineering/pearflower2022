import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import './BeotAlong.css';

function BeotAlong() {
    return (
        <div>
            <MobileView>

            </MobileView>
            <BrowserView>
                <div className="beotAlongBg">
                    <div className="eventHeader">
                        <Link to="/main"><img alt="logoSquare" className="logo"></img></Link>
                        <div className="menuBtnDiv">
                            <Link to="/main"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerToMain.png'}></img></Link>
                            <Link to="/timeTable"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerSchedule.png'}></img></Link>
                            <Link to="/event"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerEvent.png'}></img></Link>
                            <Link to="/goods"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerGoods.png'}></img></Link>
                        </div>
                    </div>
                    <div className="beotAlongWrapper">
                        <div className="backToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="backToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBackToEvent.png'}></img></Link>
                        </div>
                        <div className="beotAlongContent">
                            <img alt="BeotAlongExplanation" className="detailBeotAlong" src={process.env.PUBLIC_URL + '/img/event/detailBeotAlong.png'}></img>
                            <img alt="FormBtn" className="BeotAlongForm" src={process.env.PUBLIC_URL + '/img/event/detailBeotAlongForm.png'}></img>
                        </div>
                    </div>
                </div>
            </BrowserView>
        </div>
    );
}
export default BeotAlong;