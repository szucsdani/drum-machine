import React, { useState } from "react";
// import { Button } from "reactstrap";
import "./App.css";
// import BankButton from "src";

export function DrumPadButton(props) {
  const handleClick = event => {
    console.log(props.letter);
    const audio = new Audio(props.sourceHihat);
    audio.play();
  };

  return (
    <button className="button-look" onClick={handleClick}>
      {props.letter}
    </button>
  );
}
