import React from "react";
import HeaderGoBack from "../HeaderGoBack.jsx";
import GameCanvas from "./components/GameCanvas.jsx";
import GameProcess from "./components/GameProcess.jsx";
import RestartButton from "./components/RestartButton.jsx";

const Snake = () => {

  return (
    <div className="App">
      <HeaderGoBack/>
      <GameCanvas/>
      <GameProcess/>
      <RestartButton/>
    </div>
  );

}

export default Snake;
