import React from "react";
import "./App.css";
import { useKeyPress } from "./useKeyPress";

export function DrumPadButton(props) {
  const isPressed = useKeyPress(props.letter);

  const handleClick = () => {
    playAudio();
  };

  const playAudio = () => {
    if (props.isChecked === false) {
      const audio = new Audio(props.sourceAcoustic);
      audio.play();
    }
    if (props.isChecked === true) {
      const audio = new Audio(props.sourceElectric);
      audio.play();
    }
  };

  return (
    <>
      <button className="button-look" onClick={handleClick}>
        {props.letter}
      </button>
      {props.isEnabled && isPressed && playAudio()}
    </>
  );
}
