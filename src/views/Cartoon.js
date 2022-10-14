import React from "react";
import { Link } from "react-router-dom";

function Cartoon() {
  return (
    <div>
        카툰 랜딩페이지<br/>
        <Link to="/main">
            <button>메인페이지로 가기</button>
        </Link>
    </div>
  );
}

export default Cartoon;