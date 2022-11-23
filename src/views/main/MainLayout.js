import React from "react";
import Header from "../Header";
import Footer from "./mainFooter.js";
import Main from "./main.js"
import { Link } from "react-router-dom";
import './mainLayout.css';


function MainLayout() {
  return (
    <div>

      <Header />
      <Main />
      <Footer />
      <div className="floatingBtn2"><Link to="/gamehome"><img src="../img/goToPlayGame.png" alt="" /></Link></div>
      <div className="floatingBtn3"><Link to="/characterInfo"><img src="../img/main_floatingBtn.png" alt="" /></Link></div>

    </div>
  );
}

export default MainLayout;