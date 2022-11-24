import React, { useEffect } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import UseGAEventsTracker from "../../useGAEventsTracker";

function Main() {
  /* GA 연동 */
  const GAEventsTracker = UseGAEventsTracker("메인");

  return (
    <div className="mainFullBox">
      <img src="../img/mainBackground.png" alt="" />
      <div className="textBox">
        <h1>
          이화이언만의 특별한 놀이동산으로
          <br />
          벗들을 초대합니다!
        </h1>
        <h2>
          몇 년 만에 마주하게 된 대면 학기! <br />
          다시 푸른 생기로 가득찬 이화를 맞이하며 모두를 위한 <br />
          축제를 준비한 이화이언!
        </h2>
        <p>
          어느 날,각자의 자리에서 열심히 생활하던 새싹과 버섯은
          <br />
          정원지기와 꿀벌이 보낸 이화이언 테마파크의 초대장을 받게 되고…
          <br />
          꿈과 희망으로 가득찬 하루를 선물하기 위해 이화이언이
          <br />
          테마파크 곳곳에 숨겨둔 징표!
          <br />
          <br /> 모두 꿈과 희망으로 넘쳐나는 이화이언 테마파크로 함께
          입장해볼까요?{" "}
        </p>
      </div>
      <img className="mainLine" src="/img/mainLine.png"></img>
      <div className="eventBoxFull">
        <div className="eventGrayBox">
          <a href="https://instagram.com/ewhaian_2001?igshid=YmMyMTA2M2Y=">
          <img
            alt="mainSNS"
            id="mainGrayBox"
            src={process.env.PUBLIC_URL + "/img/mainSNS.png"}
          ></img></a>
          <div className="btnBox">
            <div
              className="mainBtn"
              onClick={GAEventsTracker("이벤트바로가기")}
            >
              <Link to="/event">이벤트 바로가기</Link>{" "}
            </div>
            <div
              className="mainBtn"
              onClick={GAEventsTracker("행사일정확인하기")}
            >
              <Link to="/timeTable">행사일정 확인하기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
