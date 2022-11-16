import React, { useEffect } from 'react'
import Header from './WebGameHeader'
import './GamePage.css'


function GamePage(props) {

    return (
        <div >
            <div>
                <img src='/img/game/background.png' className="background" alt="배경" />
                <Header />
                <img src='/img/game/guideText.png' className="guideText" alt="설명" />
                <img src='/img/game/window.png' className="keyWindow" />
                <img src='/img/game/lockedDoor.png' className="door" />
                <img src='/img/game/gameCharacter.png' className="character" />
                <img src='/img/game/key.png' className="key" />
            </div>
        </div>
    )
}

export default GamePage;