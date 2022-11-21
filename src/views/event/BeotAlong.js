import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import './BeotAlong.css';

function BeotAlong() {
    return (
        <div>
            <MobileView>
                <div className="mobileBeotAlongBg">
                    <div className="eventHeader">
                        <Link to="/main"><img alt="logoSquare" className="Eventlogo"></img></Link>
                        <div className="menuBtnDiv">
                            <img alt="menuBtn" className="menuBtnMobile" src={process.env.PUBLIC_URL + '/img/event/hamburgerBtn.png'}></img>
                        </div>
                    </div>
                    <div className="mobileBeotAlongWrapper">
                        <div className="mobileBackToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="mobileBackToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBackToEvent.png'}></img></Link>
                        </div>
                        <div className="mobileBeotAlongContent">
                            <img alt="BeotAlongExplanation" className="mobileDetailBeotAlong" src={process.env.PUBLIC_URL + '/img/event/mobileDetailBeotAlong.png'}></img>
                            <img alt="FormBtn" className="mobileBeotAlongForm" src={process.env.PUBLIC_URL + '/img/event/mobileBeotAlongForm.png'}></img>
                        </div>
                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <div className="beotAlongBg">
                    <div className="eventHeader">
                        <Link to="/main"><img alt="logoSquare" className="Eventlogo"></img></Link>
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