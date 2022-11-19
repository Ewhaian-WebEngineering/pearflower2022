import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./views/Intro";
import Main from "./views/main/MainLayout";
import TimeTable from './views/main/timeTable';
import Event from "./views/event/Event";
import Goods from "./views/Goods";
import Gamehome from "./views/game/Gamehome";
import GameInfo from "./views/game/GameInfo";
import GameMain from "./views/game/GameMain";
/*cartoon pages*/
import Bee1 from "./views/cartoon/bee/Bee_page1";
import Bee2 from "./views/cartoon/bee/Bee_page2";
import Bee3 from "./views/cartoon/bee/Bee_page3";
import Bee4 from "./views/cartoon/bee/Bee_page4";
import Sprout1 from "./views/cartoon/sprout/Sprout_page1";
import Sprout2 from "./views/cartoon/sprout/Sprout_page2";
import Sprout3 from "./views/cartoon/sprout/Sprout_page3";
import Sprout4 from "./views/cartoon/sprout/Sprout_page4";
import Mushroom1 from "./views/cartoon/mushroom/Mushroom_page1";
import Mushroom2 from "./views/cartoon/mushroom/Mushroom_page2";
import Mushroom3 from "./views/cartoon/mushroom/Mushroom_page3";
import Mushroom4 from "./views/cartoon/mushroom/Mushroom_page4";
import Gardener1 from "./views/cartoon/gardener/Gardener_page1";
import Gardener2 from "./views/cartoon/gardener/Gardener_page2";
import Gardener3 from "./views/cartoon/gardener/Gardener_page3";
import GamePage from "./views/game/GamePage"
import GameOverPage from "./views/game/GameOverPage";

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
        <Route exact path="/mushroom1" element={<Mushroom1 />} />
        <Route exact path="/mushroom2" element={<Mushroom2 />} />
        <Route exact path="/mushroom3" element={<Mushroom3 />} />
        <Route exact path="/mushroom4" element={<Mushroom4 />} />
        <Route exact path="/gardener1" element={<Gardener1 />} />
        <Route exact path="/gardener2" element={<Gardener2 />} />
        <Route exact path="/gardener3" element={<Gardener3 />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/timeTable" element={<TimeTable />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/goods" element={<Goods />} />
        <Route exact path="/gamehome" element={<Gamehome />} />
        <Route exact path="/gameinfo" element={<GameInfo />} />
        <Route exact path="/gamemain" element={<GameMain />} />
        <Route exact path="/finalgame" element={<GamePage />} />
        <Route exact path="/finalgameover" element={<GameOverPage />} />
      </Routes>
    </div>
  );
}

export default App;
