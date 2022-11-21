import React from 'react';
import Header from './goodsHeader';
import Detail from "./goodsDetailLayout";
import './goodsLayout.css';

function goodsLayout() {
    // var index = 1
    
    function ActiveLink(e) {
        const index = 1; 
        const displayHandle = 0;
        // 
        if (typeof(e) == "object") {
            console.log("test")
            return <Detail detailGoodsId={index} displayHandle={displayHandle} />
        } else {
            console.log(e);
            return <Detail detailGoodsId={e} displayHandle={displayHandle} />
        }  
        
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
                        <img src={imgSrc[index]} alt="" onClick={()=>ActiveLink(index)}/>
                    ))}
                    
                </div>
            </div>
            <ActiveLink/>
        </div>
    )
}

export default goodsLayout;

