import React from "react";
// import { Button } from "reactstrap";
import "./App.css";
import { useKeyPress } from "./useKeyPress";
// import { ButtonPlay } from "./ButtonPlay";
// import BankButton from "src";

export function DrumPadButton(props) {
  const isPressed = useKeyPress(props.letter);

  const handleClick = () => {
    playAudio();
  };

  const playAudio = () => {
    const audio = new Audio(props.sourceHihat);
    audio.play();
  };

  return (
    <>
      <button className="button-look" onClick={handleClick}>
        {props.letter}
      </button>
      {isPressed && playAudio()}
    </>
  );
}
