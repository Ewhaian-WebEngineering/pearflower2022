import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import GameMain from "./views/GameMain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/GameMain" element={<GameMain />} />
      </Routes>
    </div>
  );
}

export default App;
