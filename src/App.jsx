import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./Components/AllPlayers";
import NewPlayer from "./Components/NewPlayer";
import SinglePlayer from "./Components/SinglePlayer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div id="mainbody">
          <Routes>
            <Route path="/" element={<AllPlayers />} />
            <Route path="/NewPlayer" element={<NewPlayer />} />
            <Route path="/:id" element={<SinglePlayer/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;