import { render } from '@testing-library/react';
import React from 'react';
import './goodsDetailLayout.css'


function goodsDetailLayout(props) {
    const detailGoodsId = props;
    console.log(detailGoodsId);
    // const detailGoodsId = 0;

    function handleVoid (e){

    }

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



    // console.log(detailData.len);
    const detailData = [
        {
            id: 1,
            title: '스티커팩',
            price: 3000,
            describe: '설명설명설명',
            img : "../img/goods/goods_detail/1-1.png",
            detailImg : detailImg_1
        },
        {
            id: 2,
            title: '유리컵',
            price: 6000,
            describe: '설명설명설명',
            img : "../img/goods/goods_detail/2-1.png",
            detailImg : detailImg_2

        },
        {
            id: 3,
            title: '말랑비즈인형',
            price: 5000,
            describe: '설명설명설명',
            img : "../img/goods/goods_detail/3-1.png",
            detailImg : detailImg_3
        }, {
            id: 4,
            title: '멀티클리너',
            price: 3000,
            describe: '설명설명설명',
            img : "../img/goods/goods_detail/4-1.png",
            detailImg : detailImg_4
        },
        {
            id: 5,
            title: '레고 피규어',
            price: 9000,
            describe: '설명설명설명',
            img : "../img/goods/goods_detail/5-1.png",
            detailImg : detailImg_5
        },
        {
            id: 6,
            title: '그립톡',
            price: 3000,
            describe: '설명설명설명',
            img : "../img/goods/goods_detail/6-1.png",
            detailImg : detailImg_6
        }
    ];
    
       // const srcEdit = `../img/goods/goods_detail/` + { detailGoodsId } + `-` + { detailData[detailGoodsId].num } + `.png`;
    // console.log(srcEdit);
    // document.getElementById("detailImg").src = srcEdit;
    

    return (
        <div className='goodsDetailBox'>
            <h1 className='closeBtn' onClick={handleVoid}>X</h1>
            <div className='goodsDetail'>
                <img src={detailData[detailGoodsId].img} alt=""/>
                <div className='goodsDetailText'>
                    <h1 id='goodsTitle'>{detailData[detailGoodsId].title}</h1>
                    <h1 id='goodsPrice'>{detailData[detailGoodsId].price}</h1>
                    <h5 id='goodsDesc'>{detailData[detailGoodsId].describe}</h5>
                    <button className="goodsBtn2Buy">구매하기</button>
                </div>
            </div>

            <div className="detailImgBox">
                {(detailData[detailGoodsId].detailImg).map(data => (
                <img id="detailImg" src={data} alt="" />
                ))}
            </div>
        </div>
       
    )
}

export default goodsDetailLayout;

// {detailData[detailGoodsId].map((data, index) => (
//     <>
//         {/* <h1>{data.title}</h1> */}
//         {/* <img src="../img/goods/goods_detail/1-2.png" alt="" /> */}
//         <img id="detailImg" src="../img/goods/goods_detail/1-2.png" alt="" />
//         <script type="text/javascript">
            
//             document.getElementById("detailImg").src = `../img/goods/goods_detail/{$detailGoodsId}-{$detailData[index].num}.png`;
//         </script>
//     </>
// ))}


// {new Array(6).fill(null).map((_, index) => (
//                         <img src="../img/goods/goods1.png" alt="" onClick={activeLink(index + 1)}/>
//                     ))}