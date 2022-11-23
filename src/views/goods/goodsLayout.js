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

    const imgTitle = [
        { name: "스티커팩", price: 3000 },
        { name: "유리컵", price:3000},
        { name: "말랑비즈인형", price:6000},
        { name: "멀티클리너", price:3000},
        { name: "레고피규어", price:9000},
        { name: "그립톡", price:3000},
    ]

    return (
        <div>
            <Header style={{ backgroundColor: "#F1A6A5 !important"}} />
            <div className='goodsBox'>
                {/* test */}
                <div className='goodsArray'>
                    {new Array(6).fill(null).map((_, index) => (
                        <>
                            <div className='goodsArrayBox'>
                                <img src={imgSrc[index]} alt="" onClick={() => ActiveLink(index)} />
                                <div className='goodsData'>
                                    <p>{imgTitle[index].name}</p>
                                    <p>{imgTitle[index].price}</p>
                                </div>
                            </div>
                        </>
                    ))}
                    
                </div>
            </div>
            <ActiveLink/>
        </div>
    )
}

export default goodsLayout;

