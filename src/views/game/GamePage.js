import React, { useState, useEffect } from 'react'
import Header from './WebGameHeader'
import './GamePage.css'



function GamePage(props) {
    // var img_L = 150;
    // var img_T = 282;
    // var targetObj;

    // function getLeft(o) {
    //     return parseInt(o.style.left.replace('px', ''));
    // }

    // function getTop(o) {
    //     return parseInt(o.style.top.replace('px', ''));
    // }

    // function moveDrag(e) {
    //     var e_obj = window.event ? window.event : e;
    //     var dmvx = parseInt(e_obj.clientX + img_L);
    //     var dmvy = parseInt(e_obj.clientY + img_T);
    //     targetObj.style.left = dmvx + "px";
    //     targetObj.style.top = dmvy + "px";
    //     return false;
    // }

    // function startDrag(e, obj) {
    //     targetObj = obj;
    //     var e_obj = window.event ? window.event : e;
    //     img_L = getLeft(obj) - e_obj.clientX;
    //     img_T = getTop(obj) - e_obj.clientY;

    //     document.onmousemove = moveDrag;
    //     document.onmouseup = stopDrag;
    //     if (e_obj.preventDefault) e_obj.preventDefault();

    // }

    // function stopDrag() {
    //     document.onmousemove = null;
    //     document.onmouseup = null;
    //     if (correct == 1) { //goodluck 정답
    //         window.location.href = 'http://localhost:3000/finish';
    //     }
    //     else { //goodluck 정답 실패
    //         window.location.href = 'http://localhost:3000/finalgameover';
    //     }
    // }

    const check = (sentence) => {
        const answer = ['g', 'o', 'o', 'd', 'l', 'u', 'c', 'k'];
        for (var i = 0; i < 8; i++) {
            if (sentence[i] != answer[i])
                return 0;
        }
        return 1;
    }

    const [correct, setCorrect] = useState(0);
    const inspect = () => {
        //정답을 맞추면
        if (check(sentence) == 1)
            setCorrect(1);
    }

    let sentence = [];
    function addWord(w) {
        sentence.push(w);
        inspect(sentence);
    }

    return (
        <div >
            <Header />
            <img src='/img/game/background.png' className="background" alt="배경" />
            <img src='/img/game/window.png' className="keyWindow" alt="글자입력칸" />
            <img src='/img/game/lockedDoor.png' className="door" alt="문" />
            <img src='/img/game/key.png' className="key" onmousedown="startDrag(event, this)" />
            <img src='/img/game/guideText.png' className="guideText" alt="설명" />
            <img src='/img/game/gameCharacter.png' className="character" alt="주머니" />
            <div className="word1" value="g" onClick={() => addWord('g')}>g</div>
            <div className="word2" value="o" onClick={() => addWord('o')}>o</div>
            <div className="word3" value="o" onClick={() => addWord('o')}>o</div>
            <div className="word4" value="d" onClick={() => addWord('d')}>d</div>
            <div className="word5" value="l" onClick={() => addWord('l')}>l</div>
            <div className="word6" value="u" onClick={() => addWord('u')}>u</div>
            <div className="word7" value="c" onClick={() => addWord('c')}>c</div>
            <div className="word8" value="k" onClick={() => addWord('k')}>k</div>
        </div>
    )
}

export default GamePage;