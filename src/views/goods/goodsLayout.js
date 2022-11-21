import React from 'react';
import Header from './goodsHeader';
import Detail from "./goodsDetailLayout";
import './goodsLayout.css';

function goodsLayout() {
    
    function activeLink(e) {
        const index = e;
        // console.log(index);
        return <Detail detailGoodsId={index}/>
    }
    
    const imgSrc = [
        "../img/goods/goods1.png",
        "../img/goods/goods2.png",
        "../img/goods/goods3.png",
        "../img/goods/goods4.png",
        "../img/goods/goods5.png",
        "../img/goods/goods6.png",
        
    ]


    return (
        <div>
            <Header style={{ backgroundColor: "#F1A6A5 !important"}} />
            <div className='goodsBox'>
                {/* test */}
                <div className='goodsArray'>
                    {new Array(6).fill(null).map((_, index) => (
                        <img src={imgSrc[index]} alt="" onClick={()=>activeLink(index)}/>
                    ))}
                    
                </div>
            </div>
            <activeLink/>
        </div>
    )
}

export default goodsLayout;

