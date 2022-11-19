import React, { useState, useEffect } from 'react'
import Header from './WebGameHeader'
import './GamePage.css'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";




function GamePage(props) {

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
        console.log("check(sentence)" + check(sentence));
        if (check(sentence) == 1) {
            setCorrect(1);
        }
        else {
            setCorrect(0);
        }
    }

    let sentence = [];

    function addWord(w) {
        console.log("Before Correct:" + correct);
        if (sentence.length < 8)
            sentence.push(w);
        console.log(sentence);
        inspect(sentence);
        console.log("Correct:" + correct);
    }

    const onDragEnd = () => {
        console.log("드래그");
        console.log("correct:" + correct);
        console.log("sentence length:" + sentence.length);
        if (correct === 0 && sentence.length >= 8)
            window.location.href = 'http://localhost:3000/finalgameover';
        else if (correct === 1 && sentence.length == 8) {
            setCorrect(0);
            window.location.href = 'http://localhost:3000/finish';
        }

    }

    return (
        <div >
            <Header />
            <img src='/img/game/background.png' className="background" alt="배경" />
            <img src='/img/game/window.png' className="keyWindow" alt="글자입력칸" />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="OpenDoor">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <img src='/img/game/lockedDoor.png' className="door" alt="문" />
                            <Draggable draggableId="UseKey" index="1">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>
                                        <img src='/img/game/key.png' className="key" />
                                    </div>
                                )}
                            </Draggable>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
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