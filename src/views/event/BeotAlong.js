import { BrowserView, MobileView } from "react-device-detect";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './BeotAlong.css';
import Header from "../Header";
import UseGAEventsTracker from "../../useGAEventsTracker";

function BeotAlong() {
    const [dropDownView, setDropDownView] = useState(false);
    const clickDropDown = () => {
        setDropDownView(!dropDownView);
    }

    /* GA 연동 */
    const GAEventsTracker = UseGAEventsTracker("벗어롱이벤트페이지");

    return (
        <div>
            <MobileView>
                <div className="mobileBeotAlongBg">
                    <Header />
                    <div className="mobileBeotAlongWrapper">
                        <div className="mobileBackToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="mobileBackToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBacktoEvent.png'}></img></Link>
                        </div>
                        <div className="mobileBeotAlongContent">
                            <img alt="BeotAlongExplanation" className="mobileDetailBeotAlong" src={process.env.PUBLIC_URL + '/img/event/mobileDetailBeotAlong.png'}></img>
                            <img onClick={GAEventsTracker("벗어롱신청하기")} alt="FormBtn" className="mobileBeotAlongForm" src={process.env.PUBLIC_URL + '/img/event/mobileBeotAlongForm.png'}></img>
                        </div>
                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <div className="beotAlongBg">
                    <Header />
                    <div className="beotAlongWrapper">
                        <div className="backToEventWrapper">
                            <Link to="/event"><img alt="BackToEventPageBtn" className="backToEvent" src={process.env.PUBLIC_URL + '/img/event/detailBacktoEvent.png'}></img></Link>
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