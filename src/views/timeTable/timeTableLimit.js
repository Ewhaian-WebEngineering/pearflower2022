import React from 'react';
import "./timeTableLimit.css"
import Headers from '../main/mainHeader'


function timeTableLimit() {
    return (
        <>
            <Headers />
            <div className='ttl_back'>
                <div className='ttl_back_title'>사전 이벤트 신청 마감되었습니다.</div>
            </div>
        </>
    )
}

export default timeTableLimit;