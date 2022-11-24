import React, { useEffect } from 'react'
import './GameInfo.css';
import { Link } from "react-router-dom";
import UseGAEventsTracker from '../../useGAEventsTracker';

function setScreenSize() {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    document.documentElement.style.setProperty("—gameHome-wrap-vw", `${vw}px`);
    document.documentElement.style.setProperty("—gameHome-wrap-vh", `${vh}px`);
}

export default function GameInfo() {
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
                    <Link to="/Gamehome">
                        <img src='img/game/backBtn.png' className="backBtn" alt="뒤로가기" />
                    </Link>
                </div>
            </div>
            <div className='gamemiddle'>
                <div className='circle'>
                    <img id='circle' src='img/game/circle.png' alt='circle'></img>
                </div>
                <div className='howtolabel'>
                    <img id='howtolabel' src='img/game/howtolabel.png' alt='howtolabel'></img>
                </div>
                <div className='gameboard'>
                    <img id='gameboard' src='img/game/gameboard.png' alt='gameboard'></img>
                    <span className='explain'>이화이언 이스케이프게임에 오신 벗들 환영합니다!<br></br><br></br>
                        문제는 총 8문제로 이루어져 있으며,<br></br> 한 문제를 맞힐때마다 가방안에
                        자물쇠를 열기 위한 글자 중 하나가 주어집니다.<br></br><br></br>
                        8개의 문제를 모두 맞춘 후, 가방안의 글자들을 조합해 키워드를 완성해보세요!<br></br>
                        문제가 어렵다면 힌트를 참고하실 수 있습니다.<br></br><br></br> 그럼 행운을 빌어요~~!
                    </span>
                </div>
                <div className='start'>
                    <Link to='/gamemain' onClick={GAEventsTracker("게임시작")}>
                        <img id='startbtn' src='img/game/startbtn.png' alt='startbtn'></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}
