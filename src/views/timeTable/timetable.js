import React from 'react';
import Headers from '../main/mainHeader'
import "./timetable.css"

function timetable() {
    return (
        <div>
            <Headers />
            <div className='ttBackground'>
                <h1>전체 일정</h1>
                <p className='subdes'>*이벤트에 대한 자세한 사항은 이벤트 페이지에서 확인하실 수 있습니다*</p>
                <div className='topBox'>
                    <div className='btnBox_timetable'>
                        <button>사전 이벤트 일정</button>
                        <button>당일 이벤트 일정</button>
                    </div>
                    <div className="textbox">
                        <div>
                            <p>오프라인 홍보부스</p>
                            <img src="./img/timetable/section.png" alt="" />
                            <p>11/23 (수) ~ 11/24 (목)</p>
                        </div>

                        <div>
                            <p> 만렙 화연 이벤트</p>
                            <img src="./img/timetable/section.png" alt="" style={{marginLeft:"33px"}} />
                            <p>~ 17:00 </p>
                        </div>

                        </div>
                </div>

                <div className='timeTableArray'>
                    <div className='timeTableBoxOne'>
                        <img src="./img/timetable/1.png" alt="" />
                        <p>11:00 ~ 18:00</p>
                    </div>
                    <div className='timeTableBoxOne'>
                        <img src="./img/timetable/2.png" alt="" />
                        <p>11:00 ~ 18:15</p>
                    </div>
                    <div className='timeTableBoxOne'>
                        <img src="./img/timetable/3.png" alt="" />
                        <p> 11:00 ~ 14:00 / 15:30 ~ 18:00</p>
                    </div>
                    <div className='timeTableBoxOne'>
                        <img src="./img/timetable/4.png" alt="" />
                        <p>18:00 ~ 19:30</p>
                    </div>
                </div>

                <div className='timeTableArray'>
                    <div className='timeTableBoxOne'>
                        <img src="./img/timetable/5.png" alt="" />
                        <p> 11:00 ~ 14:00 / 15:30 ~ 18:00</p>
                    </div>
                    <div className='timeTableBoxOne'>
                        <img src="./img/timetable/6.png" alt="" />
                        <p>11:00 ~ 18:15</p>
                    </div>
                    <div className='timeTableBoxOne'>
                        <img src="./img/timetable/7.png" alt="" />
                        <p>11:30 ~ 18:20</p>
                    </div>
                    <div className='timeTableBoxOne'>
                        <img src="./img/timetable/8.png" alt="" />
                        <p>11:00 ~ 18:00</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default timetable;