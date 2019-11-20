import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { DrumPadButton } from "./DrumPadButton";

const samples = [
  {
    letter: "q",
    sourceHihat: "./samples/closedhihat.wav",
    sourceSnare: "./samples/eclap1.wav"
  },
  {
    letter: "w",
    sourceHihat: "./samples/halfhihat.wav",
    sourceSnare: "./samples/eclap2.wav"
  },
  {
    letter: "e",
    sourceHihat: "./samples/openhihat.wav",
    sourceSnare: "./samples/eclap3.wav"
  },
  {
    letter: "a",
    sourceHihat: "./samples/snare.wav",
    sourceSnare: "./samples/esnare1.wav"
  },
  {
    letter: "s",
    sourceHihat: "./samples/multicrash.wav",
    sourceSnare: "./samples/esnare2.wav"
  },
  {
    letter: "d",
    sourceHihat: "./samples/trash.wav",
    sourceSnare: "./samples/esnare.wav"
  },
  {
    letter: "z",
    sourceHihat: "./samples/tam1.wav",
    sourceSnare: "./samples/eclosedhihat.wav"
  },
  {
    letter: "x",
    sourceHihat: "./samples/tam2.wav",
    sourceSnare: "./samples/eopenhihat.wav"
  },
  {
    letter: "c",
    sourceHihat: "./samples/kick.wav",
    sourceSnare: "./samples/ekick.wwav"
  }
];
document.addEventListener("keydown", event => {
  samples.forEach(element => {
    if (element.letter === event.key) {
      const audio = new Audio(element.sourceHihat);
      audio.play();
    }
  });
});
function App() {
  return (
    <div className="app flex-container">
      <div className="app-box">
        <div className="button-container">
          {samples.map(element => (
            <DrumPadButton
              key={element.letter}
              letter={element.letter}
              sourceHihat={element.sourceHihat}
              sourceSnare={element.sourceSnare}
            />
          ))}
        </div>
        <div className="function-container"></div>
      </div>
    </div>
  );
}
export default App;
