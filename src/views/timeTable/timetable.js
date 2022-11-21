import React from 'react';
import Headers from '../main/mainHeader'
import "./timetable.css"

function timetable() {
    return (
        <div>
            <Headers />
            <div className='background'>
                <h1>전체 일정</h1>
                <p>*이벤트에 대한 자세한 사항은 이벤트 페이지에서 확인하실 수 있습니다*</p>
                <div className='btnBox'>
                    <button>사전 이벤트 일정</button>
                    <button>당일 이벤트 일정</button>
                </div>
            </div>
        </div>
    )
}

export default timetable;