import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import classnames from "classnames";

import './Event.css';
import '../logo.css';

function Event() {
  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      //스크롤 구현
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; //스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        //스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, scroll down");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
        else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, scroll down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
        else {
          console.log("현재 3페이지, scroll down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      }
      else {
        //스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, scroll up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
        else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
        else {
          console.log("현재 3페이지, scroll up");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    }
  }, []);

  const [earlyHidden, setEarlyHidden] = useState(true);
  const [todayHidden, setTodayHidden] = useState(true);
  //balance photo bingo
  //honeyjar teacom newuser beotalong
  //wishtree maxlev escape
  const [balanceHidden, setBalanceHidden] = useState(true);
  const [photoHidden, setPhotoHidden] = useState(true);
  const [bingoHidden, setBingoHidden] = useState(true);
  //const [honeyJarHidden, setHoneyJarHidden] = useState(true);
  const [teacomHidden, setTeacomHidden] = useState(true);
  const [newUserHidden, setNewUserHidden] = useState(true);
  //const [beotAlongHidden, setBeotAlongHidden] = useState(true);
  const [wishTreeHidden, setWishTreeHidden] = useState(true);
  const [maxLevHidden, setMaxLevHidden] = useState(true);
  //const [escapeHidden, setEscapeHidden] = useState(true);
  const earlyClick = () => {
    setEarlyHidden(!earlyHidden);
    console.log("사전이벤트클릭");
    console.log(earlyHidden);
  };
  const todayClick = () => {
    setTodayHidden(!todayHidden);
    console.log("당일이벤트클릭");
  };
  const balanceClick = () => {
    setBalanceHidden(!balanceHidden);
  }
  const photoClick = () => {
    setPhotoHidden(!photoHidden);
  }
  const bingoClick = () => {
    setBingoHidden(!bingoHidden);
  }
  const teacomClick = () => {
    setTeacomHidden(!teacomHidden);
  }
  const newUserClick = () => {
    setNewUserHidden(!newUserHidden);
  }

  const wishTreeClick = () => {
    setWishTreeHidden(!wishTreeHidden);
  }
  const maxLevClick = () => {
    setMaxLevHidden(!maxLevHidden);
  }

  return (
    <div>
      <MobileView>
        <div>
          <div className="eventHeader">
            <Link to="/main"><img alt="logoSquare" className="logo"></img></Link>
            <div className="menuBtnDiv">
              <img alt="menuBtn" className="menuBtnMobile" src={process.env.PUBLIC_URL + '/img/event/hamburgerBtn.png'}></img>
            </div>
          </div>
          <div ref={outerDivRef} className="outer">
            <div className="mobileEventWrapper">
              <img alt="earlyEvent" className="MeventBtn early" src={process.env.PUBLIC_URL + '/img/event/earlyEventBtn.png'} onClick={earlyClick}></img>
              <img alt="todayEvent" className="MeventBtn today" src={process.env.PUBLIC_URL + '/img/event/todayEventBtn.png'} onClick={todayClick}></img>
              <img alt="brownEarlyEvent" className={classnames('BeventBtn', 'Bearly', (earlyHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/brownEarlyEventBtn.png'} onClick={earlyClick}></img>
              <img alt="brownTodayEvent" className={classnames('BeventBtn', 'Btoday', (todayHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/brownTodayEventBtn.png'} onClick={todayClick}></img>
              <div className="mobilePopups">
                <img alt="mobileEarlyEventPopup" className={classnames('mobileEventPopUp', (earlyHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileEarlyPopup.png'}></img>
                <img alt="mobilePopupCloseBtn" className={classnames('mobileClosePopUp', (earlyHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileYellowCloseBtn.png'} onClick={earlyClick}></img>
                <img alt="mobileEarlyEventPopup" className={classnames('mobileEventPopUp', (todayHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileTodayPopup.png'}></img>
                <img alt="mobilePopupCloseBtn" className={classnames('mobileClosePopUp', (todayHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileYellowCloseBtn.png'} onClick={todayClick}></img>
              </div>
            </div>
            <div className="inner scrollPage1">
              <div className="eventstorycircles">
                <img alt="WishTreeStory" id="story" className="story wishTree" src={process.env.PUBLIC_URL + '/img/event/eventStory.png'}></img>
                <img alt="WishTreeStory" id="story" className="story balGame" src={process.env.PUBLIC_URL + '/img/event/eventStory.png'}></img>
                <img alt="WishTreeStory" id="story" className="story 3" src={process.env.PUBLIC_URL + '/img/event/eventStory.png'}></img>
                <img alt="WishTreeStory" id="story" className="story 4" src={process.env.PUBLIC_URL + '/img/event/eventStory.png'}></img>
                <img alt="WishTreeStory" id="story" className="story 5" src={process.env.PUBLIC_URL + '/img/event/eventStory.png'}></img>
                <img alt="WishTreeStory" id="story" className="story 4" src={process.env.PUBLIC_URL + '/img/event/eventStory.png'}></img>
                <img alt="WishTreeStory" id="story" className="story 5" src={process.env.PUBLIC_URL + '/img/event/eventStory.png'}></img>
                <img alt="WishTreeStory" id="story" className="story 4" src={process.env.PUBLIC_URL + '/img/event/eventStory.png'}></img>
                <img alt="WishTreeStory" id="story" className="story 5" src={process.env.PUBLIC_URL + '/img/event/eventStory.png'}></img>
              </div>
              <div className="eventIcons1">
                <div className="mHONEYJAR">
                  <img alt="HoneyJarEvent" className="icon honeyjar" src={process.env.PUBLIC_URL + '/img/event/iconHoneyJar.png'}></img>
                  <img alt="nameHoneyJarEvent" id="name" className="honeyjarname" src={process.env.PUBLIC_URL + '/img/event/iconNameHoneyJar.png'}></img>
                </div>
                <div className="mPHOTO">
                  <img alt="PhotoEvent" className="icon photoevent" src={process.env.PUBLIC_URL + '/img/event/iconPhoto.png'}></img>
                  <img alt="nameHoneyJarEvent" id="name" className="photoeventname" src={process.env.PUBLIC_URL + '/img/event/iconNamePhoto.png'}></img>
                </div>
                <div className="mBALANCE">
                  <img alt="BalanceGame" className="icon balancegame" src={process.env.PUBLIC_URL + '/img/event/iconBalanceGame.png'}></img>
                  <img alt="nameHoneyJarEvent" id="name" className="balancegamename" src={process.env.PUBLIC_URL + '/img/event/iconNameBalanceGame.png'}></img>
                </div>
              </div>
            </div>
            <div className="inner scrollPage2">
              <div className="eventIcons2">
                <div className="mBEOTALONG">
                  <img alt="SingAlongEvent" className="beotalong" src={process.env.PUBLIC_URL + '/img/event/iconBeotAlong.png'}></img>
                  <img alt="nameSingAlongEvent" id="name2" className="beotalongname" src={process.env.PUBLIC_URL + '/img/event/iconNameBeotAlong.png'}></img>
                </div>
                <div className="mESCAPE">
                  <img alt="EscapeGame" className="eventEscape" src={process.env.PUBLIC_URL + '/img/event/iconEscape.png'}></img>
                  <img alt="nameEscapeGame" id="name2" className="escapename" src={process.env.PUBLIC_URL + '/img/event/iconNameEscape.png'}></img>
                </div>
                <div className="mTEACOM">
                  <img alt="TeaComEvent" className="teacom" src={process.env.PUBLIC_URL + '/img/event/iconTeaCom.png'}></img>
                  <img alt="nameTeaComEvent" id="name2" className="teacomname" src={process.env.PUBLIC_URL + '/img/event/iconNameTeaCom.png'}></img>
                </div>
                <div className="mNEWUSER">
                  <img alt="NewUserEvent" className="newuser" src={process.env.PUBLIC_URL + '/img/event/iconNewUser.png'}></img>
                  <img alt="nameNewUserEvent" id="name2" className="newusername" src={process.env.PUBLIC_URL + '/img/event/iconNameNewUser.png'}></img>
                </div>
              </div>
            </div>
            <div className="inner scrollPage3">
              <div className="eventIcons3">
                <div className="mMAXLEV">
                  <img alt="MaxLevelUserEvent" className=" icon3 maxlev" src={process.env.PUBLIC_URL + '/img/event/iconMaxLev.png'}></img>
                  <img alt="nameMaxLevelUserEvent" id="name3" className="maxlevname" src={process.env.PUBLIC_URL + '/img/event/iconNameMaxLev.png'}></img>
                </div>
                <div>
                  <img alt="BingoGame" className="icon3 bingo" src={process.env.PUBLIC_URL + '/img/event/iconBingo.png'}></img>
                  <img alt="nameBingoGame" id="name3" className="bingoname" src={process.env.PUBLIC_URL + '/img/event/iconNameBingo.png'}></img>
                </div>
                <div className="mWISHTREE">
                  <img alt="WishTree" className="icon3 wishtree" src={process.env.PUBLIC_URL + '/img/event/iconWishTree.png'}></img>
                  <img alt="nameWishTree" id="name3" className="wishtreename" src={process.env.PUBLIC_URL + '/img/event/iconNameWishTree.png'}></img>
                </div>
                <img alt="eventFooter" className="eventFooter" src={process.env.PUBLIC_URL + '/img/event/eventFooter.png'}></img>
              </div>
            </div>
          </div >
        </div>
      </MobileView >
      <BrowserView>
        <div className="WebBg">
          <div className="eventHeader">
            <Link to="/main"><img alt="logoSquare" className="logo"></img></Link>
            <div className="menuBtnDiv">
              <Link to="/main"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerToMain.png'}></img></Link>
              <Link to="/timeTable"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerSchedule.png'}></img></Link>
              <Link to="/event"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerEvent.png'}></img></Link>
              <Link to="/goods"><img alt="menuBtn" className="headerMenuBtn" src={process.env.PUBLIC_URL + '/img/event/headerGoods.png'}></img></Link>
            </div>
          </div>
          <div className="eventWrapper">
            <img alt="earlyEvent" className="eventBtn early" src={process.env.PUBLIC_URL + '/img/event/earlyEventBtn.png'} onClick={earlyClick}></img>
            <img alt="todayEvent" className="eventBtn today" src={process.env.PUBLIC_URL + '/img/event/todayEventBtn.png'} onClick={todayClick}></img>
            <img alt="brownEarlyEvent" className={classnames('BeventBtn', 'Bearly', (earlyHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/brownEarlyEventBtn.png'} onClick={earlyClick}></img>
            <img alt="brownTodayEvent" className={classnames('BeventBtn', 'Btoday', (todayHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/brownTodayEventBtn.png'} onClick={todayClick}></img>
            <div className="popupWrapper">
              <img alt="EarlyEventPopup" className={classnames('webEventPopUp', (earlyHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/webEarlyPopup.png'} ></img>
              <img alt="TodayEventPopup" className={classnames('webEventPopUp', (todayHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/webTodayPopup.png'} ></img>
            </div>
          </div>
          <div className="webPopups">
            <img alt="BalancePopup" className={classnames('webPopUp', (balanceHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/webBalanceGamePopup.png'} ></img>
            <img alt="BalancePopup" className={classnames('webClosePopUp', (balanceHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={balanceClick}></img>
            <img alt="PhotoPopup" className={classnames('webPopUp', (photoHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/webPhotoEventPopup.png'} ></img>
            <img alt="PhotoPopup" className={classnames('webClosePopUp', (photoHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={photoClick}></img>
            <img alt="BingoPopup" className={classnames('webPopUp', (bingoHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/webBingoPopup.png'} ></img>
            <img alt="BingoPopup" className={classnames('webClosePopUp', (bingoHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={bingoClick}></img>
            <img alt="TeaComPopup" className={classnames('webPopUp', (teacomHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/webTeacomPopup.png'} ></img>
            <img alt="TeaComPopup" className={classnames('webClosePopUp', (teacomHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={teacomClick}></img>
            <img alt="NewUserPopup" className={classnames('webPopUp', (newUserHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/webNewUserPopup.png'} ></img>
            <img alt="NewUserPopup" className={classnames('webClosePopUp', (newUserHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={newUserClick}></img>
            <img alt="WishTreePopup" className={classnames('webPopUp', (wishTreeHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/webWishTreePopup.png'} ></img>
            <img alt="WishTreePopup" className={classnames('webClosePopUp', (wishTreeHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={wishTreeClick}></img>
            <img alt="MaxLevPopup" className={classnames('webPopUp', (maxLevHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/webMaxLevPopup.png'} ></img>
            <img alt="MaxLevPopup" className={classnames('webClosePopUp', (maxLevHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={maxLevClick}></img>
          </div>
          <div ref={outerDivRef} className="outer">
            <div className="inner">
              <div className="eventIcons1">
                <div className="BALANCEGAME">
                  <img alt="BalanceGame" className="icon balancegame" src={process.env.PUBLIC_URL + '/img/event/iconBalanceGame.png'} onClick={balanceClick}></img>
                  <img alt="nameHoneyJarEvent" id="name" className="balancegamename" src={process.env.PUBLIC_URL + '/img/event/iconNameBalanceGame.png'}></img>
                </div>
                <div className="PHOTOEVENT">
                  <img alt="PhotoEvent" className="icon photoevent" src={process.env.PUBLIC_URL + '/img/event/iconPhoto.png'} onClick={photoClick}></img>
                  <img alt="nameHoneyJarEvent" id="name" className="photoeventname" src={process.env.PUBLIC_URL + '/img/event/iconNamePhoto.png'}></img>
                </div>
                <div className="BINGO">
                  <img alt="BingoGame" className="icon bingo" src={process.env.PUBLIC_URL + '/img/event/iconBingo.png'} onClick={bingoClick}></img>
                  <img alt="nameBingoGame" id="name" className="bingoname" src={process.env.PUBLIC_URL + '/img/event/iconNameBingo.png'}></img>
                </div>
              </div>
            </div>
            <div className="inner">
              <div className="eventIcons2">
                <div className="HONEYJAR">
                  <Link to="/honeyjar"><img alt="HoneyJarEvent" className="icon honeyjar" src={process.env.PUBLIC_URL + '/img/event/iconHoneyJar.png'}></img></Link>
                  <img alt="nameHoneyJarEvent" id="name" className="honeyjarname" src={process.env.PUBLIC_URL + '/img/event/iconNameHoneyJar.png'}></img>
                </div>
                <div className="TEACOM">
                  <img alt="TeaComEvent" className="icon teacom" src={process.env.PUBLIC_URL + '/img/event/iconTeaCom.png'} onClick={teacomClick}></img>
                  <img alt="nameTeaComEvent" id="name" className="teacomname" src={process.env.PUBLIC_URL + '/img/event/iconNameTeaCom.png'}></img>
                </div>
                <div className="NEWUSER">
                  <img alt="NewUserEvent" className="icon newuser" src={process.env.PUBLIC_URL + '/img/event/iconNewUser.png'} onClick={newUserClick}></img>
                  <img alt="nameNewUserEvent" id="name" className="newusername" src={process.env.PUBLIC_URL + '/img/event/iconNameNewUser.png'}></img>
                </div>
                <div className="BEOTALONG">
                  <Link to="/beotalong"><img alt="SingAlongEvent" className="icon beotalong" src={process.env.PUBLIC_URL + '/img/event/iconBeotAlong.png'} ></img></Link>
                  <img alt="nameSingAlongEvent" id="name" className="beotalongname" src={process.env.PUBLIC_URL + '/img/event/iconNameBeotAlong.png'}></img>
                </div>

              </div>
            </div>
            <div className="inner">
              <div className="eventIcons3">
                <div className="WISHTREE">
                  <img alt="WishTree" className="icon wishtree" src={process.env.PUBLIC_URL + '/img/event/iconWishTree.png'} onClick={wishTreeClick}></img>
                  <img alt="nameWishTree" id="name" className="wishtreename" src={process.env.PUBLIC_URL + '/img/event/iconNameWishTree.png'}></img>
                </div>
                <div className="MAXLEV">
                  <img alt="MaxLevelUserEvent" className=" icon maxlev" src={process.env.PUBLIC_URL + '/img/event/iconMaxLev.png'} onClick={maxLevClick}></img>
                  <img alt="nameMaxLevelUserEvent" id="name" className="maxlevname" src={process.env.PUBLIC_URL + '/img/event/iconNameMaxLev.png'}></img>
                </div>
                <div className="ESCAPE">
                  <Link to="/escape"><img alt="EscapeGame" className="icon eventEscape" src={process.env.PUBLIC_URL + '/img/event/iconEscape.png'}></img></Link>
                  <img alt="nameEscapeGame" id="name" className="escapename" src={process.env.PUBLIC_URL + '/img/event/iconNameEscape.png'}></img>
                </div>
              </div>
            </div>

          </div>
        </div>
      </BrowserView >
    </div >
  )
}

export default Event;