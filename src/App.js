import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { DrumPadButton } from "./DrumPadButton";

const samples = [
  {
    letter: "q",
    sourceAcoustic: "./samples/closedhihat.wav",
    sourceElectric: "./samples/eclap1.wav"
  },
  {
    letter: "w",
    sourceAcoustic: "./samples/halfhihat.wav",
    sourceElectric: "./samples/eclap2.wav"
  },
  {
    letter: "e",
    sourceAcoustic: "./samples/openhihat.wav",
    sourceElectric: "./samples/eclap3.wav"
  },
  {
    letter: "a",
    sourceAcoustic: "./samples/snare.wav",
    sourceElectric: "./samples/esnare1.wav"
  },
  {
    letter: "s",
    sourceAcoustic: "./samples/multicrash.wav",
    sourceElectric: "./samples/esnare2.wav"
  },
  {
    letter: "d",
    sourceAcoustic: "./samples/trash.wav",
    sourceElectric: "./samples/esnare.wav"
  },
  {
    letter: "z",
    sourceAcoustic: "./samples/tam1.wav",
    sourceElectric: "./samples/eclosedhihat.wav"
  },
  {
    letter: "x",
    sourceAcoustic: "./samples/tam2.wav",
    sourceElectric: "./samples/eopenhihat.wav"
  },
  {
    letter: "c",
    sourceAcoustic: "./samples/kick.wav",
    sourceElectric: "./samples/ekick.wwav"
  }
];

function App() {
  return (
    <div className="app flex-container">
      <div className="app-box">
        <div className="button-container">
          {samples.map(element => (
            <DrumPadButton
              key={element.letter}
              letter={element.letter}
              sourceAcoustic={element.sourceAcoustic}
              sourceElectric={element.sourceElectric}
            />
          ))}
        </div>
        <div className="function-container"></div>
      </div>
    </div>
  );
}
export default App;
