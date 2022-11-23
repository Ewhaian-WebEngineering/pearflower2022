import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './WebGameHeader'
import './GamePage.css'
import './GameInfo.css'
import './Gamehome.css'

function GameOverPage(props) {

    return (
        <div >
            <div className='gameheader'>
                <div className='header-box'>
                    <Link to='/main'>
                        <img id='logo' src='img/logo_main.png' alt='logo main'></img>
                    </Link>
                    <Link to="/main">
                        <img src='img/game/exit.png' className="backBtn" alt="나가기" />
                    </Link>
                </div>
            </div>
            <img src='img/game/background.png' className="background" alt="배경" />
            <img src='img/game/withKeyDoor.png' className="locked" alt="실패" />
            <span className='howtolabel'>ㅠㅠ탈출실패</span>
            <Link to="/finalgame">
                <img src='img/game/replay.png' className="replay" alt="다시하기" />
            </Link>

        </div>
    )

}

export default GameOverPage;