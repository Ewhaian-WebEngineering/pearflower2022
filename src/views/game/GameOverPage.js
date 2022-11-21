import React, { useEffect } from 'react'
import Header from './WebGameHeader'
import './GamePage.css'


function GameOverPage(props) {

    return (
        <div >
            <Header />
            <img src='/img/game/background.png' className="background" alt="배경" />
            <img src='/img/game/withKeyDoor.png' className="locked" alt="실패" />
            <img src='/img/game/replay.png' className="replay" alt="다시하기" />

        </div>
    )
    //     < div >
    //         <Header />
    //         <img src='/img/game/background.png' className="background" alt="배경" />
    //         <img src='/img/game/window.png' className="keyWindow" />
    //         <img src='/img/game/withKeyDoor.png' className="door" />
    //         <img src='/img/game/gameCharacter.png' className="character" />

    //     </ >
    // )
}

export default GameOverPage;