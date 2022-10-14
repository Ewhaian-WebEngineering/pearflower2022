import './App.css';
import { Routes, Route } from "react-router-dom";
import Cartoon from "./views/Cartoon";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Cartoon /> } />
        <Route exact path="/main" element={ <Main /> } />
      </Routes>
    </div>
  );
}

export default App;
