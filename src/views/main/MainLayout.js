import React from "react";
import Header from "./mainHeader.js";
import Footer from "./mainFooter.js";
import Main from "./main.js"
import { Link } from "react-router-dom";
import './mainLayout.css';


function MainLayout() {
  return (
    <div>
      
      <Header />
      <Main/>
      <Footer />
      {/* <img src="../img/goToPlayGame.png" alt="" /> */}
      <div className="floatingBtn1"><Link to="/gamehome">게임<br/>바로가기</Link></div>
      <div className="floatingBtn2"><Link to="/gamehome"><img src="../img/goToPlayGame.png" alt="" /></Link></div>

    </div>
  );
}

export default MainLayout;