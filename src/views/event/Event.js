import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import classnames from "classnames";
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import Dropdown from "./Dropdown";
import './Event.css';
import '../logo.css';
import Header from '../Header';

let options = {
  anchors: ['page1', 'page2', 'page3'],
  arrowNavigation: true,
  autoScrolling: false,
  touchSensitivity: 10,
  css: true,

};
function Event() {
  const [dropDownView, setDropDownView] = useState(false);
  const [floatHidden, setFloatHidden] = useState(false);
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
  const clickDropDown = () => {
    setDropDownView(!dropDownView);
  }
  const closeFloat = () => {
    setFloatHidden(!floatHidden);
  }
  const earlyClick = () => {
    setEarlyHidden(!earlyHidden);
  };
  const todayClick = () => {
    setTodayHidden(!todayHidden);
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
          <Link to="/beotalong"><img alt="floatingBeotAlongAd" className={classnames('floatingBeotAlong', (floatHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileFloatingBeotAlong.png'}></img></Link>
          <img alt="killingFloatBtn" className={classnames('killFloatingBeotAlong', (floatHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileFloatingKill.png'} onClick={closeFloat}></img>
          <Header />
          <div className="outer">
            <ScrollToTopOnMount />
            <SectionsContainer {...options}>

              <Section>

                <div className="inner scrollPage1">
                  <div className="mobileEventWrapper">
                    <img alt="earlyEvent" className="MeventBtn Mearly" src={process.env.PUBLIC_URL + '/img/event/earlyEventBtn.png'} onClick={earlyClick}></img>
                    <img alt="todayEvent" className="MeventBtn Mtoday" src={process.env.PUBLIC_URL + '/img/event/todayEventBtn.png'} onClick={todayClick}></img>
                    <img alt="brownEarlyEvent" className={classnames('mBeventBtn', 'mBearly', (earlyHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/brownEarlyEventBtn.png'} onClick={earlyClick}></img>
                    <img alt="brownTodayEvent" className={classnames('mBeventBtn', 'mBtoday', (todayHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/brownTodayEventBtn.png'} onClick={todayClick}></img>
                  </div>
                  <div className="mobilePopups">
                    <img alt="mobileEarlyEventPopup" className={classnames('mobileEventPopUp', 'mobileEarlyPopUp', (earlyHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileEarlyPopup.png'}></img>
                    <img alt="mobilePopupCloseBtn" className={classnames('mobileClosePopUp', (earlyHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileYellowCloseBtn.png'} onClick={earlyClick}></img>
                    <img alt="mobileTodayEventPopup" className={classnames('mobileEventPopUp', 'mobileTodayPopUp', (todayHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileTodayPopup.png'}></img>
                    <img alt="mobilePopupCloseBtn" className={classnames('mobileClosePopUp', (todayHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileYellowCloseBtn.png'} onClick={todayClick}></img>
                  </div>

                  <div className="eventIcons1">
                    <div className="mHONEYJAR">
                      <Link to="/honeyjar"><img alt="HoneyJarEvent" className="honeyjar" src={process.env.PUBLIC_URL + '/img/event/iconHoneyJar.png'}></img></Link>
                      <img alt="nameHoneyJarEvent" id="name" className="honeyjarname" src={process.env.PUBLIC_URL + '/img/event/iconNameHoneyJar.png'}></img>
                    </div>
                    <div className="mPHOTO">
                      <img alt="PhotoEvent" className="photoevent" src={process.env.PUBLIC_URL + '/img/event/iconPhoto.png'} onClick={photoClick}></img>
                      <img alt="nameHoneyJarEvent" id="name" className="photoeventname" src={process.env.PUBLIC_URL + '/img/event/iconNamePhoto.png'}></img>
                    </div>
                    <div className="mBALANCE">
                      <img alt="BalanceGame" className="balancegame" src={process.env.PUBLIC_URL + '/img/event/iconBalanceGame.png'} onClick={balanceClick}></img>
                      <img alt="nameHoneyJarEvent" id="name" className="balancegamename" src={process.env.PUBLIC_URL + '/img/event/iconNameBalanceGame.png'}></img>
                    </div>
                    <img alt="BalancePopup" className={classnames('mobilePopUp', (balanceHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileBalancePopup.png'} ></img>
                    <img alt="BalancePopup" className={classnames('mobileClosePopUp2', (balanceHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={balanceClick}></img>
                    <img alt="PhotoPopup" className={classnames('mobilePopUp', (photoHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobilePhotoPopup.png'} ></img>
                    <img alt="PhotoPopup" className={classnames('mobileClosePopUp2', (photoHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={photoClick}></img>
                  </div>
                </div>
              </Section>
              <Section>
                <div className="inner scrollPage2">
                  <div className="eventIcons2">
                    <div className="mBEOTALONG">
                      <Link to="/beotalong"><img alt="SingAlongEvent" className="beotalong" src={process.env.PUBLIC_URL + '/img/event/iconBeotAlong.png'}></img></Link>
                      <img alt="nameSingAlongEvent" id="name2" className="beotalongname" src={process.env.PUBLIC_URL + '/img/event/iconNameBeotAlong.png'}></img>
                    </div>
                    <div className="mESCAPE">
                      <Link to="/escape"><img alt="EscapeGame" className="eventEscape" src={process.env.PUBLIC_URL + '/img/event/iconEscape.png'}></img></Link>
                      <img alt="nameEscapeGame" id="name2" className="escapename" src={process.env.PUBLIC_URL + '/img/event/iconNameEscape.png'}></img>
                    </div>
                    <div className="mTEACOM">
                      <img alt="TeaComEvent" className="teacom" src={process.env.PUBLIC_URL + '/img/event/iconTeaCom.png'} onClick={teacomClick}></img>
                      <img alt="nameTeaComEvent" id="name2" className="teacomname" src={process.env.PUBLIC_URL + '/img/event/iconNameTeaCom.png'}></img>
                    </div>
                    <div className="mNEWUSER">
                      <img alt="NewUserEvent" className="newuser" src={process.env.PUBLIC_URL + '/img/event/iconNewUser.png'} onClick={newUserClick}></img>
                      <img alt="nameNewUserEvent" id="name2" className="newusername" src={process.env.PUBLIC_URL + '/img/event/iconNameNewUser.png'}></img>
                    </div>
                    <img alt="TeaComPopup" className={classnames('mobilePopUp2', (teacomHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileTeacomPopup.png'} ></img>
                    <img alt="TeaComPopup" className={classnames('mobileClosePopUp2_2', (teacomHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={teacomClick}></img>
                    <img alt="NewUserPopup" className={classnames('mobilePopUp2', (newUserHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileNewUserPopup.png'} ></img>
                    <img alt="NewUserPopup" className={classnames('mobileClosePopUp2_2', (newUserHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={newUserClick}></img>
                  </div>
                </div>
              </Section>
              <Section>
                <div className="inner scrollPage3">
                  <div className="eventIcons3">
                    <div className="mMAXLEV">
                      <img alt="MaxLevelUserEvent" className=" icon3 maxlev" src={process.env.PUBLIC_URL + '/img/event/iconMaxLev.png'} onClick={maxLevClick}></img>
                      <img alt="nameMaxLevelUserEvent" id="name3" className="maxlevname" src={process.env.PUBLIC_URL + '/img/event/iconNameMaxLev.png'}></img>
                    </div>
                    <div>
                      <img alt="BingoGame" className="icon3 bingo" src={process.env.PUBLIC_URL + '/img/event/iconBingo.png'} onClick={bingoClick}></img>
                      <img alt="nameBingoGame" id="name3" className="bingoname" src={process.env.PUBLIC_URL + '/img/event/iconNameBingo.png'}></img>
                    </div>
                    <div className="mWISHTREE">
                      <img alt="WishTree" className="icon3 wishtree" src={process.env.PUBLIC_URL + '/img/event/iconWishTree.png'} onClick={wishTreeClick}></img>
                      <img alt="nameWishTree" id="name3" className="wishtreename" src={process.env.PUBLIC_URL + '/img/event/iconNameWishTree.png'}></img>
                    </div>
                    <img alt="MaxLevPopup" className={classnames('mobilePopUp3', (maxLevHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileMaxLevPopup.png'} ></img>
                    <img alt="MaxLevPopup" className={classnames('mobileClosePopUp2_3', (maxLevHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={maxLevClick}></img>
                    <img alt="BingoPopup" className={classnames('mobilePopUp3', (bingoHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileBingoPopup.png'} ></img>
                    <img alt="BingoPopup" className={classnames('mobileClosePopUp2_3', (bingoHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={bingoClick}></img>
                    <img alt="WishTreePopup" className={classnames('mobilePopUp3', (wishTreeHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/mobileWishTreePopup.png'} ></img>
                    <img alt="WishTreePopup" className={classnames('mobileClosePopUp2_3', (wishTreeHidden ? "hide" : "show"))} src={process.env.PUBLIC_URL + '/img/event/closePopup.png'} onClick={wishTreeClick}></img>
                    <img alt="eventFooter" className="eventFooter" src={process.env.PUBLIC_URL + '/img/event/eventFooter.png'}></img>
                  </div>
                  <div>
                  </div>
                </div>
              </Section>

            </SectionsContainer>
          </div >
        </div>
      </MobileView >
      <BrowserView>
        <div className="WebBg">
          <Header />
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
          <div className="outer">
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