import React from "react";
import './Dropdown.css';

function Dropdown() {
    return (
        <ul className="menuList">
            <li><a href="/gamehome">게임하기</a></li>
            <li><a href="/timeTable">행사일정</a></li>
            <li><a href="/event">이벤트</a></li>
            <li><a href="/goods">굿즈</a></li>
        </ul>
    );
}
export default Dropdown;