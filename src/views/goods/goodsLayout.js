import React, { useState, useEffect } from 'react';
import Header from '../Header';
import './goodsLayout.css';
import './goodsDetailLayout.css';
import UseGAEventsTracker from '../../useGAEventsTracker';

function GoodsLayout() {

    const detailGoodsId = 0;



    const detailImg_1 = [
        "../img/goods/goods_detail/1-2.png",
        "../img/goods/goods_detail/1-3.png",
        "../img/goods/goods_detail/1-4.png",
        "../img/goods/goods_detail/1-5.png",
        "../img/goods/goods_detail/1-6.png",
        "../img/goods/goods_detail/1-7.png",
    ]

    const detailImg_2 = [
        "../img/goods/goods_detail/2-2.png",
        "../img/goods/goods_detail/2-3.png",
        "../img/goods/goods_detail/2-4.png",
        "../img/goods/goods_detail/2-5.png",
        "../img/goods/goods_detail/2-6.png",
        "../img/goods/goods_detail/2-7.png",
        "../img/goods/goods_detail/2-8.png",
    ]

    const detailImg_3 = [
        "../img/goods/goods_detail/3-2.png",
        "../img/goods/goods_detail/3-3.png",
        "../img/goods/goods_detail/3-4.png",
        "../img/goods/goods_detail/3-5.png",
        "../img/goods/goods_detail/3-6.png",
        "../img/goods/goods_detail/3-7.png",
        "../img/goods/goods_detail/3-8.png",
        "../img/goods/goods_detail/3-9.png",
    ]

    const detailImg_4 = [
        "../img/goods/goods_detail/4-2.png",
        "../img/goods/goods_detail/4-3.png",
        "../img/goods/goods_detail/4-4.png",
    ]

    const detailImg_5 = [
        "../img/goods/goods_detail/5-2.png",
    ]

    const detailImg_6 = [
        "../img/goods/goods_detail/6-1.png",
    ]


    const detailData = [
        {
            id: 1,
            title: '스티커팩',
            price: 3000,
            describe: '설명설명설명',
            img: "../img/goods/goods_detail/1-1.png",
            detailImg: detailImg_1
        },
        {
            id: 2,
            title: '유리컵',
            price: 6000,
            describe: '설명설명설명',
            img: "../img/goods/goods_detail/2-1.png",
            detailImg: detailImg_2

        },
        {
            id: 3,
            title: '말랑비즈인형',
            price: 5000,
            describe: '설명설명설명',
            img: "../img/goods/goods_detail/3-1.png",
            detailImg: detailImg_3
        }, {
            id: 4,
            title: '멀티클리너',
            price: 3000,
            describe: '설명설명설명',
            img: "../img/goods/goods_detail/4-1.png",
            detailImg: detailImg_4
        },
        {
            id: 5,
            title: '레고 피규어',
            price: 9000,
            describe: '설명설명설명',
            img: "../img/goods/goods_detail/5-1.png",
            detailImg: detailImg_5
        },
        {
            id: 6,
            title: '그립톡',
            price: 3000,
            describe: '설명설명설명',
            img: "../img/goods/goods_detail/6-1.png",
            detailImg: detailImg_6
        }
    ];



    // var index = 1

    let [goodsNum, setGoodsNum] = useState(0);


    const ActiveLink = (e) => {
        console.log(e);


        let goodsDetailBox = document.getElementById("goodsDetailBox");
        // console.log(goodsDetailBox);
        let goodsTitle = document.getElementById("goodsTitle");
        let goodsPrice = document.getElementById("goodsPrice");
        let goodsDesc = document.getElementById("goodsDesc");


        if (typeof (e) == "object") {
            return;
        } else {
            setGoodsNum(e);
            console.log(setGoodsNum);
            if (goodsDetailBox.style.display === "block") {
                goodsDetailBox.style.display = "none";
            } else {
                goodsDetailBox.style.display = "block";
                goodsTitle.innerText = detailData[e].title;
                goodsPrice.innerText = detailData[e].price;
                goodsDesc.innerText = detailData[e].describe;
                document.getElementById("goodsDetailTitleImg").src = detailData[e].img;
                // document.getElementById("detailImgBox").innerHTML = (detailData[e].detailImg).map(data => document.getElementById("detailImg").src = data  (<img id="detailImg" src='../img/goods/goods_detail/1-2.png' alt="" />))
            }
        }
    }



    const handleVoid = (e) => {

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
        { name: "유리컵", price: 3000 },
        { name: "말랑비즈인형", price: 6000 },
        { name: "멀티클리너", price: 3000 },
        { name: "레고피규어", price: 9000 },
        { name: "그립톡", price: 3000 },
    ]

    /* GA 연동 */
    const GAEventsTracker = UseGAEventsTracker("굿즈");
    useEffect(() => {
        GAEventsTracker();
    }, []);

    return (
        <div>
            <Header style={{ backgroundColor: "#F1A6A5 !important" }} />
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
                    <button className="goodsBtn2Buy" id="goodsBtn2Buy" >구매하기</button>
                </div>
            </div>
            <div className='goodsDetailBox' id="goodsDetailBox">
                <h1 className='closeBtn' onClick={() => ActiveLink(goodsNum)}>X</h1>
                <div className='goodsDetail'>
                    <img id="goodsDetailTitleImg" src={detailData[detailGoodsId].img} alt="" />
                    <div className='goodsDetailText'>
                        <h1 id='goodsTitle'>goodsTitle</h1>
                        <h1 id='goodsPrice'>goodsPrice</h1>
                        <h5 id='goodsDesc'>goodsDesc</h5>
                        <button className="goodsBtn2Buy">구매하기</button>
                    </div>
                </div>

                <div className="detailImgBox" id="detailImgBox">
                    {(detailData[goodsNum].detailImg).map(data => (
                        <img id="detailImg" src={data} alt="" />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default GoodsLayout;

