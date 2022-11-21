import React from 'react'
import { Link } from 'react-router-dom'
import "./WebGameHeader.css"

function WebGameHeader() {
    return (
        <div>
            <div className="header">
                <img className="logo" alt="logo" src="/img/logo_main.png" />
                <Link to="/main">
                    <img src='/img/game/exit.png' className="exit" alt="나가기" />
                </Link>
            </div>
        </div>
    )
}

export default WebGameHeader