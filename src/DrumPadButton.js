import React from "react";
import "./App.css";
import "./DrumPadButton.css";
import { useKeyPress } from "./useKeyPress";

export function DrumPadButton(props) {
  const isPressed = useKeyPress(props.letter);

  const handlePlay = () => {
    if (props.isEnabled) {
      playAudio();
      props.onPlay();
    }
  };

  const playAudio = () => {
    const audio = new Audio(
      props.type === "electric" ? props.sourceElectric : props.sourceAcoustic
    );
    audio.volume = parseFloat(props.volume);
    audio.play();
  };

  return (
    <>
      <button className="button-look" onClick={handlePlay}>
        {props.letter}
      </button>
      {isPressed && handlePlay()}
    </>
  );
}
