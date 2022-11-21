import React from 'react';
import Header from '../main/mainHeader';
import './goodsLayout.css';

function goodsLayout() {
    
    function activeLink(e) {
        const index = e;
        console.log(index);
        return () => {
        console.log(index);

        //   window.location.href = "/goods/" + index;
        };
    }
    
    return (
        <div>
            <Header />
            <div className='goodsBox'>
                {/* test */}
                <div className='goodsArray'>
                    {new Array(6).fill(null).map((_, index) => (
                        <img src="../img/goods/goods3.png" alt="" onClick={activeLink(index + 1)}/>
                    ))}
                    
                </div>
            </div>
            {/* <goodsDetailModal/> */}
        </div>
    )
}

export default goodsLayout;