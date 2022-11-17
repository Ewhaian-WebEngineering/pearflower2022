import React, { useEffect } from 'react'
import Header from './WebGameHeader'
import './GamePage.css'


function GameOverPage(props) {

    return (
        <div >
            <div className="background">
                <Header />
                <img src='/img/game/window.png' className="keyWindow" />
                <img src='/img/game/withKeyDoor.png' className="door" />
                <img src='/img/game/gameCharacter.png' className="character" />
            </div>
        </div>
    )
}

export default GameOverPage;