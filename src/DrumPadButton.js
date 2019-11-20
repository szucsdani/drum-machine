import React from "react";
// import { Button } from "reactstrap";
import "./App.css";
import { ButtonPlay } from "./ButtonPlay";
// import BankButton from "src";

export function DrumPadButton(props) {
  const handleClick = event => {
    console.log(props.letter);

    const audio = new Audio(props.sourceHihat);
    audio.play();
  };

  return (
    <div>
      <button className="button-look" onClick={handleClick}>
        {props.letter}
        {/* <ButtonPlay event={props.letter} /> */}
      </button>
      <div></div>
    </div>
  );
}
