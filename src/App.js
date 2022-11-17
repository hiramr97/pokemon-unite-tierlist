import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import TopLane from "./Components/Lanes/Top Lane/Top-Lane";
import CenterLane from "./Components/Lanes/Center Lane/Center-Lane";
import BottomLane from "./Components/Lanes/Bottom Lane/Bottom-Lane";
import Description from "./Components/Description/Description";
import pokemon from "./Components/Data/pictures.json";
import React from "react";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage pokemon={pokemon} />} />
        <Route path="/top-lane" element={<TopLane pokemon={pokemon} />} />
        <Route path="/center-lane" element={<CenterLane pokemon={pokemon} />} />
        <Route path="/bottom-lane" element={<BottomLane pokemon={pokemon} />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
