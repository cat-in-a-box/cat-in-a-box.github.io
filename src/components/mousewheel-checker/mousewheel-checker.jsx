import React from "react";
import HeaderGoBack from "../HeaderGoBack.jsx";
import WheelCheckArea from "./components/WheelCheckArea.jsx";
import WheelCheckRotation from "./components/WheelCheckRotation.jsx";
import Description from './components/Description';

function MousewheelChecker() {
  return (
    <div className="App">
      <HeaderGoBack/>
      <Description/>
      <WheelCheckArea/>
      <WheelCheckRotation/>
    </div>
  );
}

export default MousewheelChecker;
