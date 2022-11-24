import React from 'react';
import Header from '../Header'
import { BrowserView, MobileView } from "react-device-detect";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Timetable.css"
import UseGAEventsTracker from '../../useGAEventsTracker';

function Timetable() {

    /* GA 연동 */
    const GAEventsTracker = UseGAEventsTracker("행사일정");
    useEffect(() => {
        GAEventsTracker();
    }, []);

    return (
        <div>
            <MobileView>
                <div className="mobileHoneyJarBg">
                    <Header />
                    <div className='mobileTimeTableWrapper'>
                        <img alt="FormBtn" className="mobileFullEvent" src={process.env.PUBLIC_URL + '/img/timetable/mobileTimeTable.png'}></img>
                    </div>
                </div>
            </MobileView>
            <BrowserView>

                <Header />
                <div className='timeTableBg'>
                    <div className='timeTableWrapper'>
                        <img alt="FormBtn" className="fullEvent" src={process.env.PUBLIC_URL + '/img/timetable/fullEvent.png'}></img>
                        <img alt="FormBtn" className="timeIcons" src={process.env.PUBLIC_URL + '/img/timetable/timeTableIcons.png'}></img>
                    </div>
                </div>


            </BrowserView>
        </div>

    )
}

export default Timetable;