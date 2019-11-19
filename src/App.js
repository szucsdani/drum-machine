import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app flex-container">
      <div className="app-box">
        <div className="button-container">
          <button className="button-look">q</button>
          <button className="button-look">w</button>
          <button className="button-look">e</button>
          <button className="button-look">a</button>
          <button className="button-look">s</button>
          <button className="button-look">d</button>
          <button className="button-look">z</button>
          <button className="button-look">x</button>
          <button className="button-look">c</button>
        </div>
        <div className="function-container"></div>
      </div>
    </div>
  );
}
export default App;
