//게임 입력 페이지
import React, { useState } from 'react';
import './GameMain.css';
import './Gamehome.css';
import Header from './WebGameHeader'
import { Link } from "react-router-dom";


const questions = [
    {
        index: 1,
        question: "이화이언이 시작된 해는?",
        answer: [2, 0, 0, 1],
        len: 4,
        hint: "우리나라가 월드컵과 붉은 악마로 가득했던 시기 - 1",
        item: "g"
    },
    {
        index: 2,
        question: "이화여자대학교 생협 메뉴 중 하나로, \n아이스티와 아메리카노를 섞은 인기 메뉴의 명칭은?",
        answer: ["아", "이", "스", "티", "노"],
        len: 5,
        hint: "첫 번째 메뉴의 네 글자와 두 번째 메뉴의 한 글자를 적절히 섞어 보세요!",
        item: "o"
    }, {
        index: 3,
        question: "이화이언의 운영진 팀의 개수는?",
        answer: [3],
        len: 3,
        hint: "21 나누기 7, 27 나누기 9의 공통점은?",
        item: "o"
    },
    {
        index: 4,
        question: "이번 11월, 이화이언에서 개최하는 행사의 명칭은?",
        answer: ["배", "꽃", "정", "원"],
        len: 4,
        hint: "이화여자대학교를 대표하는 꽃 + 꽃을 주로 키우는 장소 중 하나의 명칭",
        item: "d"
    }, {
        index: 5,
        question: "이화이언에서 비밀단어를 입장하면 접속 가능한 곳은?",
        answer: ["비", "밀", "의", "화", "원"],
        len: 5,
        hint: "이화이언 사이트 우측 상단 메뉴의 '열쇠고리' 아이콘을 누르면 접속 가능한 곳은?",
        item: "l"
    },
    {
        index: 6,
        question: "이화여자대학교를 대표하는 숫자 4자리",
        answer: [1, 8, 8, 6],
        len: 4,
        hint: "이화학당이 창설된 해",
        item: "u"
    },
    {
        index: 7,
        question: "이화여자대학교캠퍼스복합단지라고도 불리는\n 이화여자대학교의 대표 건축물 명칭은?",
        answer: ["E", "C", "C"],
        len: 3,
        hint: "각 단어를 끊어 영어로 바꿔보고, 각 영단어의 첫 이니셜을 조합해보세요!",
        item: "c"
    }, {
        index: 8,
        question: "이화여자대학교에서 뽀미와 뽀삐를 볼 수 있는 장소는?",
        answer: ["학", "생", "문", "화", "관"],
        len: 5,
        hint: "연습실부터 생협, 라운지, 동방까지 없는 게 없는 이 곳은 어디?",
        item: "k"
    }
]




function GameMain() {

    return (
        <div className="_background" >
            <div className='gameheader'>
                <div className='header-box'>
                    <Link to='/main'>
                        <img id='logo' src='/img/logo_main.png' alt='logo main'></img>
                    </Link>
                </div>
            </div>
            <div className="gamemiddle">
                <div className="main1">
                    <img className="_question" alt="question" src="/img/game/Question.png">

                    </img>

                    <span className="h_text">힌트를 보려면 누르세요!</span>
                    <span className="hintKey">
                        <img alt="hintkey" className="_hintkey" src="/img/game/HintKey.png" />
                    </span>
                </div>
                <div className="main2">
                    <div id="p_result_rec">
                        <img id="result_rec" alt="result" src="/img/game/AnswerRec.png" ></img>
                        <div className="answerBtn">
                            <img alt="answer" id="_answerBtn" src="/img/game/answerBtn.png" />
                        </div>
                    </div>
                    <div className="pocket" >
                        <img className="_pocket" alt="pocket" src="/img/game/mainPocket.png" />
                    </div>
                </div>

            </div>
        </div>


    );
}



export default GameMain
