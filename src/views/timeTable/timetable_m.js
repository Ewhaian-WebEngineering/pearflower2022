import React from 'react';
import "./timetable_m.css"
import Headers from '../Header'
// import Footer from '../main/mainFooter';

function timetable_m() {
    return (
        <>
            <Headers />
            <div className='timetable-mFullBox'>
                <div className="ttDataBox">
                    <h1 className="ttTitle">전체일정</h1>
                    <p className="ttSubTitle">*이벤트에 대한 자세한 사항은 이벤트 페이지에서 확인하실 수 있습니다*</p>

                    <div className='ttEvent'>
                        <div className="ttEventBox">사전 이벤트 일정</div>
                        <div className="ttEventDesc">
                            <p className='ttEventDesc-title'>오프라인 홍보 부스<br />만렙 화연 이벤트</p>
                            <p className='ttEventDesc-time' style={{ paddingRight: "141px" }}> 11/23 (수) ~ 11/24 (목)<br />~ 17:00</p>
                        </div>
                    </div>
                    <div className='ttEvent'>
                        <div className="ttEventBox">당일 이벤트 일정</div>
                        <div className="ttEventDesc">
                            <p className='ttEventDesc-title'>소원의 나무<br />꿀단지<br />정원지기 캐스트와 이구동성 밸런스 게임<br />이화이언 이스케이프<br /> 티콤화연함께해<br /> 벗어롱<br /><br /> [인증 이벤트]<br />인증샷 이벤트<br />꿈과 희망의 징표 빙고판 이벤트 </p>
                            <p className='ttEventDesc-time'>11:00 ~ 18:00<br />11:00 ~ 18:15<br />11:00 ~ 14:00 / 15:30 ~ 18:00<br />11:00 ~ 14:00 / 15:30 ~ 18:00<br />11:00 ~ 18:15<br />18:00 ~ 19:30<br /><br />11:00 ~ 18:00<br />11:30 ~ 18:20</p>
                        </div>
                    </div>
                </div>
                <div className="ttBox">
                    <h3>-꿀단지 시간표(time table)-</h3>
                    <img className='ttBoxImg' src="./img/timetable/timeTableImg.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default timetable_m;