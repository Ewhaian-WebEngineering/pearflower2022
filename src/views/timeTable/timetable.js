import React from 'react';
import Header from '../Header'
import { BrowserView, MobileView } from "react-device-detect";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./timetable.css"

function timetable() {
    return (
        <div>
            <MobileView>
                <div className="mobileHoneyJarBg">
                    <Header />

                </div>
            </MobileView>
            <BrowserView>

                <Header />
                <div className='timeTableBg'>
                    <div className='timeTableWrapper'>
                        <img alt="FormBtn" className="fullEvent" src={process.env.PUBLIC_URL + '/img/timetable/fullEvent.png'}></img>
                    </div>
                </div>


            </BrowserView>
        </div>

    )
}

export default timetable;