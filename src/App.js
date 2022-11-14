import './App.css';
import { Routes, Route } from "react-router-dom";
import Intro from "./views/Intro";
import Main from "./views/Main";
import Event from "./views/Event";
import Goods from './views/Goods';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/goods" element={<Goods />} />
      </Routes>
    </div>
  );
}

export default App;
