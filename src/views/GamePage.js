import React, { useEffect } from 'react'
import Header from './WebGameHeader'
import './GamePage.css'
// import guideText from '/img/guideText.png'
// import window from '/img/window.png'
// import door from '/img/lockedDoor.png'
// import character from '/img/gameCharacter.png'
// import key from '/img/key.png'


function GamePage(props) {

    return (
        <div >
            <div className="background">
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