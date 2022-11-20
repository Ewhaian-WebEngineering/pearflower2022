import React from 'react'
import './GameInfo.css';
import { Link } from "react-router-dom";

function setScreenSize() {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    document.documentElement.style.setProperty("—gameHome-wrap-vw", `${vw}px`);
    document.documentElement.style.setProperty("—gameHome-wrap-vh", `${vh}px`);
}

export default function GameInfo() {
    setScreenSize();
    return (
        <div className='wrapper'>
            <div className='gameheader'>
                <div className='header-box'>
                    <Link to='/main'>
                        <img id='logo' src='/img/logo_main.png' alt='logo main'></img>
                    </Link>
                </div>
            </div>
            <div className='gamemiddle'>
                <div className='circle'>
                    <img id='circle' src='/img/game/circle.png' alt='circle'></img>
                </div>
                <div className='howtolabel'>
                    <img id='howtolabel' src='/img/game/howtolabel.png' alt='howtolabel'></img>
                </div>
                <div className='gameboard'>
                    <img id='gameboard' src='/img/game/gameboard.png' alt='gameboard'></img>
                </div>
                <div className='start'>
                    <Link to='/gamemain'>
                        <img id='startbtn' src='/img/game/startbtn.png' alt='startbtn'></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}
