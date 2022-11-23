import React, { useState, useEffect, useRef } from 'react'
import './GamePage.css'
import './Gamehome.css';
import { Link, Navigate, useNavigate } from "react-router-dom";




function GamePage(props) {



    const [correct, setCorrect] = useState(0);
    const [sentence, setSentence] = useState([]);
    const sentenceId = useRef(1);

    const navigate = useNavigate();
    useEffect(() => {
        //입력값이 정답과 일치하는지 확인
        if (sentence.length >= 8)
            inspect(sentence);
    }, [sentenceId.current]);

    //클릭 시 실행
    const addWord = (input) => {
        //입력값 배열 객체 생성
        const newInput = {
            input,
            id: sentenceId.current
        };

        //입력값 길이가 8이 될 때까지 배열에 입력값 추가
        if (sentenceId.current <= 8) {
            sentenceId.current += 1;
            setSentence([...sentence, newInput])
        }
    }

    const check = (sentence) => {
        const answer = ['', 'g', 'o', 'o', 'd', 'l', 'u', 'c', 'k']; //정답
        let count = 0;
        {
            sentence.map((word) => {
                if (word.input == answer[word.id]) {
                    count++; //입력값이 한 글자씩 맞을 때마다 count++
                }
            })
            if (count == 8)
                return 1;
            else
                return 0;
        }


    }

    const inspect = (sentence) => {
        if (check(sentence) == 1) { //"goodluck 입력 완료"
            setCorrect(1);
        }
        else { //입력 덜 됐거나 잘못 입력됐을 때
            setCorrect(0);
        }
    }

    const handleOnClick = () => {
        console.log(correct);
        if (correct === 0 && sentence.length >= 8)
            navigate('/finalgameover');
        else if (correct === 1) {
            setCorrect(0);
            navigate('/finish');
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
            <img src='img/game/background.png' className="background" alt="배경" />
            <img src='img/game/window.png' className="keyWindow" alt="글자입력칸" />


            <div>
                <img src='img/game/lockedDoor.png' className="door" alt="문" />
                <div>
                    <img src='img/game/key.png' className="webkey" onClick={handleOnClick} />
                    <img src='img/game/key.png' className="mobilekey" onClick={handleOnClick} />
                </div>
            </div>
            <div className="guideText">얻은 힌트를 조합해 정답을 입력하세요!</div>
            <img src='img/game/gameCharacter.png' className="character" alt="주머니" />

            <div className="word1" value="g" onClick={() => addWord('g')}>g</div>
            <div className="word2" value="o" onClick={() => addWord('o')}>o</div>
            <div className="word3" value="o" onClick={() => addWord('o')}>o</div>
            <div className="word4" value="d" onClick={() => addWord('d')}>d</div>
            <div className="word5" value="l" onClick={() => addWord('l')}>l</div>
            <div className="word6" value="u" onClick={() => addWord('u')}>u</div>
            <div className="word7" value="c" onClick={() => addWord('c')}>c</div>
            <div className="word8" value="k" onClick={() => addWord('k')}>k</div>

            <div className="array">
                {sentence.map((word) => {
                    return (
                        <span className="eachword" key={word.id}>{word.input}</span>
                    );
                })}
            </div>
        </div>
    )
}

export default GamePage;