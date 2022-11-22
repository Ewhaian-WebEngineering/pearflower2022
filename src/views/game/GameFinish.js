import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './WebGameHeader'
import './GamePage.css'



function GameFinish(props) {


    return (
        <div >
            <Header />
            <img src='img/game/background.png' className="background" alt="배경" />
            <img src='img/game/openDoor.png' className="open" alt="성공" />
            <Link to="/gamehome">
                <img src='img/game/replay.png' className="replay" alt="다시하기" />
            </Link>
        </div>
    )
}

export default GameFinish;