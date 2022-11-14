import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div>
        카툰페이지 인트로입니다! <br/>
        <Link to="/main">
            <button>메인페이지</button>
        </Link>
        <Link to="/event">
            <button>이벤트페이지</button>
        </Link>
        <Link to="/goods">
            <button>굿즈페이지</button>
        </Link>
    </div>
  );
}

export default Intro;