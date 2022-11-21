import React from 'react';
import Header from './goodsHeader';
import './goodsLayout.css';
import styled from 'styled-components';


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
            <Header style={{ backgroundColor: "#F1A6A5 !important"}} />
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

// const HeaderGoods = styled(<Header/>)`
//     background-color:#F1A6A5
//     color : white
// `;