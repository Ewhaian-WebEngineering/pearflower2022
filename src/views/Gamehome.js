import React from 'react'
import './Gamehome.css';

export default function Gamehome() {
    return (
        <div className='wrapper'>
            <div className='gameheader'>
                <div className='header-box'>
                    <img id='logo' src='/img/logo_main.png' alt='logo main'></img>
                </div>
            </div>
            <div className='gamemiddle'>
                <div className='circle'>
                    <img id='circle' src='/img/game/circle.png' alt='circle'></img>
                </div>
                <div className='escape'>
                    <img id='escape' src='/img/game/escape.png' alt='escape'></img>
                </div>
                <div className='howtoplay'>
                    <img id='howtoplay' src='/img/game/howtoplay.png' alt='howtoplay'></img>
                </div>
            </div>
        </div>
    )
}