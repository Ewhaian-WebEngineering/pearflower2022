//게임 입력 페이지
import React, { useState } from 'react';
import './GameMain.css';
import './Gamehome.css';
import { Link, Navigate, useNavigate } from "react-router-dom";



const questions = [
    {
        question: "이화이언이 시작된 해는?",
        answer: "2001",
        hint: "우리나라가 월드컵과 붉은 악마로 가득했던 시기 - 1",
        length: 4
    },
    {
        question: "이화여자대학교 생협 메뉴 중 하나로, \n아이스티와 아메리카노를 섞은 인기 메뉴의 명칭은?",
        answer: "아이스티노",
        hint: "첫 번째 메뉴의 네 글자와 두 번째 메뉴의 한 글자를 적절히 섞어 보세요!",
        length: 5
    },
    {
        question: "이화이언의 운영진 팀의 개수는?",
        answer: "3",
        hint: "21 나누기 7, 27 나누기 9의 공통점은?",
        length: 1
    },
    {
        question: "이번 11월, 이화이언에서 개최하는 행사의 명칭은?",
        answer: "배꽃정원",
        hint: "이화여자대학교를 대표하는 꽃 + 꽃을 주로 키우는 장소 중 하나의 명칭",
    }, {
        question: "이화이언에서 비밀단어를 입장하면 접속 가능한 곳은?",
        answer: "비밀의화원",
        hint: "이화이언 사이트 우측 상단 메뉴의 '열쇠고리' 아이콘을 누르면 접속 가능한 곳은?",
        length: 5
    },
    {
        question: "이화여자대학교를 대표하는 숫자 4자리",
        answer: "1886",
        hint: "이화학당이 창설된 해",
        length: 4
    },
    {
        question: "이화여자대학교캠퍼스복합단지라고도 불리는\n 이화여자대학교의 대표 건축물 명칭은?",
        answer: "ECC",
        hint: "각 단어를 끊어 영어로 바꿔보고, 각 영단어의 첫 이니셜을 조합해보세요!",
        length: 3
    }, {
        question: "이화여자대학교에서 뽀미와 뽀삐를 볼 수 있는 장소는?",
        answer: "학생문화관",
        hint: "연습실부터 생협, 라운지, 동방까지 없는 게 없는 이 곳은 어디?",
        length: 5
    }
]


function GameMain() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const [_popUp, setPopUp] = useState(false);    //팝업
    const [index0, setindex0] = useState(false);
    const [index1, setindex1] = useState(false);
    const [index2, setindex2] = useState(false);
    const [index3, setindex3] = useState(false);
    const [index4, setindex4] = useState(false);
    const [index5, setindex5] = useState(false);
    const [index6, setindex6] = useState(false);
    const [index7, setindex7] = useState(false);

    const navigate = useNavigate();

    // const userAns = (e) => {

    //     setUserAnswer(inputText);
    // }
    //해당 인덱스답과 사용자 입력 답이 맞을 시 , currentIndex+1
    function checkAns() {
        if (currentIndex < 7 && userAnswer === questions[currentIndex].answer) {
            setVisible((visible) => false)
            if (currentIndex === 0) {
                setindex0((index0) => true)
            } else if (currentIndex === 1) {
                setindex1((index1) => true)
            } else if (currentIndex === 2) {
                setindex2((index2) => true)
            } else if (currentIndex === 3) {
                setindex3((index3) => true)
            } else if (currentIndex === 4) {
                setindex4((index4) => true)
            } else if (currentIndex === 5) {
                setindex5((index5) => true)
            } else if (currentIndex === 6) {
                setindex6((index6) => true)
            }
            setCurrentIndex(currentIndex + 1)
            setPopUp(false)
            setUserAnswer('')
        } else if (currentIndex === 7 && userAnswer === questions[currentIndex].answer) {
            setVisible((visible) => false)
            if (currentIndex === 7) {
                setindex7((index7) => true)
            }
            navigate('/finalgame');

        } else if (userAnswer !== questions[currentIndex].answer) { /*다시 생각해보세요*/
            setVisible((visible) => true);
        }

    }

    const Popup = () => {
        setPopUp(_popUp => !_popUp)
    }



    const handleOnClick = () => {
        checkAns();
    };
    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
            e.preventDefault(); //새로고침방지
        }
    };



    return (
        <div className="_background" >
            <div className='gameheader'>
                <div className='header-box'>
                    <Link to='/main'>
                        <img id='logo' src='img/logo_main.png' alt='logo main'></img>
                    </Link>
                </div>
            </div>
            <div className="gamemiddle">
                <div className="main1">
                    <img className="_question" alt="question" src="img/game/Question.png" />
                    <span>


                        {_popUp || <span className="h_text">'힌트를 보려면 누르세요!'</span>}
                        <span className="hintKey" onClick={Popup}>
                            <img alt="hintkey" className="_hintkey" src="img/game/HintKey.png" />
                        </span>
                        {_popUp && <span className="popupHint">{questions[currentIndex].hint}</span>}
                    </span>
                    <span className="question">{questions[currentIndex].question}</span>

                </div>
                <div className="main2">
                    <div id="p_result_rec">
                        <img id="result_rec" alt="result" src="img/game/AnswerRec.png" ></img>
                        {
                            visible && <img className="wrong" src="img/game/wrong.png"></img>
                        }
                        {/* 사용자가 답을 입력함 */}
                        <form>
                            <input className='inputbar' value={userAnswer} onChange={(e) => { setUserAnswer(e.target.value) }} onKeyPress={handleOnKeyPress} ></input>
                            <div className="ansBtn" >
                                <img alt="answer" id="_answerBtn" src="img/game/answerBtn.png" type="submit" onClick={handleOnClick}
                                />
                            </div>
                        </form>

                    </div>
                    <div className="pocket" >
                        <img className="_pocket" alt="pocket" src="img/game/mainPocket.png" />
                        {
                            index0 && <div className="word5">l</div>
                        }
                        {
                            index1 && <div className="word4">d</div>
                        }
                        {
                            index2 && <div className="wor2">o</div>
                        }
                        {
                            index3 && <div className="word8">k</div>
                        }
                        {
                            index4 && <div className="word1">g</div>
                        }
                        {
                            index5 && <div className="word6">u</div>
                        }
                        {
                            index6 && <div className="word7">c</div>
                        }{
                            index7 && <div className="word3">o</div>
                        }

                    </div>
                </div>

            </div>
        </div>


    );
}





export default GameMain