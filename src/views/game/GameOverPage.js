import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './WebGameHeader'
import './GamePage.css'


function GameOverPage(props) {

    return (
        <div >
            <Header />
            <img src='img/game/background.png' className="background" alt="배경" />
            <img src='img/game/withKeyDoor.png' className="locked" alt="실패" />
            <Link to="/finalgame">
                <img src='img/game/replay.png' className="replay" alt="다시하기" />
            </Link>

        </div>
    )

}

export default GameOverPage;