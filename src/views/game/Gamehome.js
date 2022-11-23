import React, {useEffect} from 'react'
import './Gamehome.css';
import { Link } from "react-router-dom";
import UseGAEventsTracker from '../../useGAEventsTracker';

function setScreenSize() {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    document.documentElement.style.setProperty("—gameHome-wrap-vw", `${vw}px`);
    document.documentElement.style.setProperty("—gameHome-wrap-vh", `${vh}px`);
}
export default function Gamehome() {
    setScreenSize();

    /* GA 연동 */
    const GAEventsTracker = UseGAEventsTracker("이스케이프게임");
    useEffect(() => {
        GAEventsTracker();
    }, []);
    
    return (
        <div className='wrapper'>
            <div className='gameheader'>
                <div className='header-box'>
                    <Link to='/main'>
                        <img id='logo' src='img/logo_main.png' alt='logo main'></img>
                    </Link>
                </div>
            </div>
            <div className='gamemiddle'>
                <div className='circle'>
                    <img id='circle' src='img/game/circle.png' alt='circle'></img>
                </div>
                <div className='escape'>
                    <img id='escape' src='img/game/escape.png' alt='escape'></img>
                </div>
                <div className='howtoplay'>
                    <Link to='/gameinfo'>
                        <img id='howtoplay' src='img/game/howtoplay.png' alt='howtoplay'></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}