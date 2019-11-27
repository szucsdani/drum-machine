import React from "react";
import "./App.css";
import { useKeyPress } from "./useKeyPress";

export function DrumPadButton(props) {
  const isPressed = useKeyPress(props.letter);

  const handleClick = () => {
    playAudio();
  };

  const playAudio = () => {
    const audio = new Audio(props.sourceAcoustic);
    audio.play();
  };

  return (
    <>
      <button
        className="button-look"
        onClick={handleClick}
        disabled={props.isDisabled}
      >
        {props.letter}
      </button>
      {isPressed && playAudio()}
    </>
  );
}
