import React from 'react';
import Header from '../main/mainHeader';
import './goodsLayout.css';

function goodsLayout() {
    return (
        <div>
            <Header />
            <div className='goodsBox'>
                test
                <div className='goodsArray'>
                    <img src="../img/goods/goods_cleaner2.png" alt="" />
                </div>
                test
            </div>
            {/* <goodsDetailModal/> */}
        </div>
    )
}

export default goodsLayout;