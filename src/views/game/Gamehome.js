import React from 'react'
import './Gamehome.css';
import { Link } from "react-router-dom";

export default function Gamehome() {
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
                <div className='escape'>
                    <img id='escape' src='/img/game/escape.png' alt='escape'></img>
                </div>
                <div className='howtoplay'>
                    <Link to='./gameinfo'>
                        <img id='howtoplay' src='/img/game/howtoplay.png' alt='howtoplay'></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}