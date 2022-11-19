//게임 입력 페이지
import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import Modal from 'react-modal';
import './GameMain.css';
import { ReactComponent as Pocket } from '../img/pocket.svg';
import Header from './WebGameHeader';
// import KeyBoard from './Keyboard';

/*
    링크 달기

    글씨 넣기

    문제 + 답 배열 만들기
    문제 + 답 랜덤 출력 
    
    답 글자 수에 따라 밑줄 생성
    => 밑줄 한 프레임으로 만들고, 조건문 걸어서 조건에 따라 해당 컴포넌트 내보내기?
    => 밑줄 + 바탕을 한 프레임으로 만들고, 조건문 걸어서 해당 이미지 내보내기. 이게 더 나을 듯

    힌트 제공(팝업 형식)

    문제 맞힐 시 답 저장

    
*/
const questions = [
    {
        index: "1",
        question: "이화이언이 시작된 해는?",
        answer: "2001",
        hint: "우리나라가 월드컵과 붉은 악마로 가득했던 시기 - 1",
        item: "l"
    },
    {
        index: "2",
        question: "이화여자대학교 생협 메뉴 중 하나로, \n아이스티와 아메리카노를 섞은 인기 메뉴의 명칭은?",
        answer: "아이스티노",
        hint: "첫 번째 메뉴의 네 글자와 두 번째 메뉴의 한 글자를 적절히 섞어 보세요!",
        item: "e"
    }, {
        index: "3",
        question: "이화이언의 운영진 팀의 개수는?",
        answer: "3",
        hint: "21 나누기 7, 27 나누기 9의 공통점은?",
        item: "t"
    },
    {
        index: "4",
        question: "이번 11월, 이화이언에서 개최하는 행사의 명칭은?",
        answer: "배꽃정원",
        hint: "이화여자대학교를 대표하는 꽃 + 꽃을 주로 키우는 장소 중 하나의 명칭",
        item: "s"
    }, {
        index: "5",
        question: "이화이언에서 비밀단어를 입장하면 접속 가능한 곳은?",
        answer: "비밀의 화원",
        hint: "이화이언 사이트 우측 상단 메뉴의 '열쇠고리' 아이콘을 누르면 접속 가능한 곳은?",
        item: "e"
    },
    {
        index: "6",
        question: "이화여자대학교를 대표하는 숫자 4자리",
        answer: "1886",
        hint: "이화학당이 창설된 해",
        item: "s"
    },
    {
        index: "7",
        question: "이화여자대학교캠퍼스복합단지라고도 불리는\n 이화여자대학교의 대표 건축물 명칭은?",
        answer: "ECC",
        hint: "각 단어를 끊어 영어로 바꿔보고, 각 영단어의 첫 이니셜을 조합해보세요!"
    }, {
        index: "8",
        question: "이화여자대학교에서 뽀미와 뽀삐를 볼 수 있는 장소는?",
        answer: "학생문화관",
        hint: "연습실부터 생협, 라운지, 동방까지 없는 게 없는 이 곳은 어디?"
    }
]



function GameInfo() {

    // function quiz() {
    //     const [questions.index, setquestions.index] = useState(0);
    //     const question = questions[questions.index].question;
    //     const answer_sum = questions[questions.index].answer;
    //     const user_answer_sum = 0;
    //     const answer = questions[questions.index].answer;

    //     const answerTracker = (userAnswer) => {
    //         if (answer_sum === user_answer_sum) {
    //             questions.index => questions.index + 1

    //         } else {
    //             questions.index => questions.index
    //         }
    //     }
    // }

    // let [modal, setModal] = useState(false);

    function HintPopup() {

        // setModal(!modal);
        console.log("Click!")

        if (questions.index === 0) {
            return (
                <div>questions[0].hint </div>
            );
        } else if (questions.index === 1) {
            return <div>questions[0].hint </div>
        } else if (questions.index === 2) {
            return <div>questions[1].hint </div>
        } else if (questions.index === 3) {
            return <div>questions[2].hint </div>
        } else if (questions.index === 4) {
            return <div>questions[3].hint </div>
        } else if (questions.index === 5) {
            return <div>questions[4].hint </div>
        } else if (questions.index === 6) {
            return <div>questions[5].hint </div>
        } else if (questions.index === 7) {
            return <div>questions[6].hint </div>
        }
    }

    return (


        <div className="_background" >
            <Header />
            <div className="main">`

                <div className="question">
                    <img className="_question" alt="question" src={require("../img/Question.png")}>

                    </img>

                    <div className="h_text">힌트를 보려면 누르세요!</div>
                    <div className="hintKey">
                        <img alt="hintkey" className="_hintkey" src={require("../img/HintKey.png")} onClick={HintPopup()} />
                    </div>
                </div>


                <div className="res_rec">
                    <img id="result_rec" alt="result" src={require("../img/AnswerRec.png")}></img>
                    <div className="answerBtn">
                        <img alt="answer" id="_answerBtn" src={require("../img/answerBtn.png")} />
                    </div>
                </div>


                <div className="keyboard">
                    <div className="_keyboard">
                        <img className="kb" alt="Rectangle" src={require("../img/Rectangle.png")} />
                        <img className="kb t2" alt="Rectangle" src={require("../img/Rectangle.png")} />
                        <img className="kb t2" alt="Rectangle" src={require("../img/Rectangle.png")} />
                        <img className="kb t2 " alt="Rectangle" src={require("../img/Rectangle.png")} />
                    </div>
                    <div className="_keyboard">
                        <img className="kb" alt="Rectangle" src={require("../img/Rectangle.png")} />
                        <img className="kb t2" alt="Rectangle" src={require("../img/Rectangle.png")} />
                        <img className="kb t2" alt="Rectangle" src={require("../img/Rectangle.png")} />
                        <img className="kb t2 " alt="Rectangle" src={require("../img/Rectangle.png")} />
                    </div>
                    <div className="_keyboard">
                        <img className="kb" alt="Rectangle" src={require("../img/Rectangle.png")} />
                        <img className="kb t2" alt="Rectangle" src={require("../img/Rectangle.png")} />
                        <img className="kb t2" alt="Rectangle" src={require("../img/Rectangle.png")} />
                        <img className="kb t2 " alt="Rectangle" src={require("../img/Rectangle.png")} />
                    </div>
                </div>


                <div className="pocket" >
                    <Pocket className="_pocket"></Pocket>
                </div>


            </div>
        </div>


    );
}



export default GameInfo
