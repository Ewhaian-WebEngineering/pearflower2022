import React from 'react'
import './GameInfo.css';
import { Link } from "react-router-dom";

export default function GameInfo() {
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
                    <img id='startbtn' src='/img/game/startbtn.png' alt='startbtn'></img>
                </div>
            </div>
        </div>
    )
}
