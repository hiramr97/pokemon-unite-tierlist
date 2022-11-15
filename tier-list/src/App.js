import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import { Link, Route, Routes } from "react-router-dom";
import TopLane from "./Components/Lanes/Top Lane/Top-Lane";
import CenterLane from "./Components/Lanes/Center Lane/Center-Lane";
import BottomLane from "./Components/Lanes/Bottom Lane/Bottom-Lane";
import Description from "./Components/Description/Description";
import data from "./Components/Data/data.json"

function App() {
  const handleClick = (e) => {
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage handleClick={handleClick}/>} />
        <Route path="/top-lane" element={<TopLane />} />
        <Route path="/center-lane" element={<CenterLane/>}/>
        <Route path="/bottom-lane" element={<BottomLane/>}/>
        <Route path="/description/:id" element={<Description/>}/>
      </Routes>
    </div>
  );
}

export default App;
