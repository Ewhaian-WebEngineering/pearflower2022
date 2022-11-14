import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./views/Intro";
import Main from "./views/Main";
import Event from "./views/Event";
import Goods from "./views/Goods";
import Gamehome from "./views/Gamehome";
/*cartoon pages*/
import Bee1 from "./views/cartoon/bee/Bee_page1";
import Bee2 from "./views/cartoon/bee/Bee_page2";
import Bee3 from "./views/cartoon/bee/Bee_page3";
import Bee4 from "./views/cartoon/bee/Bee_page4";
import Sprout1 from "./views/cartoon/sprout/Sprout_page1";
import Sprout2 from "./views/cartoon/sprout/Sprout_page2";
import Sprout3 from "./views/cartoon/sprout/Sprout_page3";
import Sprout4 from "./views/cartoon/sprout/Sprout_page4";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/bee1" element={<Bee1 />} />
        <Route exact path="/bee2" element={<Bee2 />} />
        <Route exact path="/bee3" element={<Bee3 />} />
        <Route exact path="/bee4" element={<Bee4 />} />
        <Route exact path="/sprout1" element={<Sprout1 />} />
        <Route exact path="/sprout2" element={<Sprout2 />} />
        <Route exact path="/sprout3" element={<Sprout3 />} />
        <Route exact path="/sprout4" element={<Sprout4 />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/goods" element={<Goods />} />
        <Route exact path="/gamehome" element={<Gamehome />} />
      </Routes>
    </div>
  );
}

export default App;
