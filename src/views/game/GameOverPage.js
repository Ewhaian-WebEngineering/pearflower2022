import React, { useEffect } from 'react'
import Header from './WebGameHeader'
import './GamePage.css'


function GameOverPage(props) {

    return (
        <div >
            <Header />
            <img src='/img/game/background.png' className="background" alt="배경" />
            <img src='/img/game/window.png' className="keyWindow" />
            <img src='/img/game/withKeyDoor.png' className="door" />
            <img src='/img/game/gameCharacter.png' className="character" />

        </div>
    )
}

export default GameOverPage;