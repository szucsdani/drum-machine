import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { DrumPadButton } from "./DrumPadButton";
import { CheckBox } from "./CheckBox";
import { DisplayBox } from "./DisplayBox";
import { useKeyPress } from "./useKeyPress";
import { tsPropertySignature } from "@babel/types";

const samples = [
  {
    letter: "q",
    sourceAcoustic: "./samples/closedhihat.wav",
    sourceElectric: "./samples/eclap1.wav",
    acousticName: "Closed Hi-Hat",
    electricName: "Clap 1"
  },
  {
    letter: "w",
    sourceAcoustic: "./samples/halfhihat.wav",
    sourceElectric: "./samples/eclap2.wav",
    acousticName: "Half Hi-Hat",
    electricName: "Clap 2"
  },
  {
    letter: "e",
    sourceAcoustic: "./samples/openhihat.wav",
    sourceElectric: "./samples/eclap3.wav",
    acousticName: "Open Hi-Hat",
    electricName: "Clap 3"
  },
  {
    letter: "a",
    sourceAcoustic: "./samples/snare.wav",
    sourceElectric: "./samples/esnare1.wav",
    acousticName: "Snare",
    electricName: "Snare 1"
  },
  {
    letter: "s",
    sourceAcoustic: "./samples/multicrash.wav",
    sourceElectric: "./samples/esnare2.wav",
    acousticName: "Multi-Crash",
    electricName: "Snare 2"
  },
  {
    letter: "d",
    sourceAcoustic: "./samples/trash.wav",
    sourceElectric: "./samples/esnare3.wav",
    acousticName: "Trash",
    electricName: "Snare 3"
  },
  {
    letter: "z",
    sourceAcoustic: "./samples/tam1.wav",
    sourceElectric: "./samples/eclosedhihat.wav",
    acousticName: "Tam 1",
    electricName: "Closed Hi-Hat"
  },
  {
    letter: "x",
    sourceAcoustic: "./samples/tam2.wav",
    sourceElectric: "./samples/eopenhihat.wav",
    acousticName: "Tam 2",
    electricName: "Open Hi-Hat"
  },
  {
    letter: "c",
    sourceAcoustic: "./samples/kick.wav",
    sourceElectric: "./samples/ekick.wav",
    acousticName: "Kick",
    electricName: "Kick"
  }
];

function App() {
  const [powerIsChecked, setPowerIsChecked] = useState(false);
  const [bankIsChecked, setBankIsChecked] = useState(false);
  const [displayBox, setDisplayBox] = useState("");

  const handlePowerCheck = () => {
    setPowerIsChecked(!powerIsChecked);
  };

  const handleBankCheck = () => {
    setBankIsChecked(!bankIsChecked);
  };

  const handleDisplay = valtozo => {
    setDisplayBox(valtozo);
  };
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
              isEnabled={powerIsChecked}
              type={bankIsChecked ? "electric" : "acoustic"}
              onPlay={() =>
                handleDisplay(
                  bankIsChecked ? element.electricName : element.acousticName
                )
              }
            />
          ))}
        </div>

        <div className="function-container">
          <CheckBox
            id="power-checkBox-id"
            name="Power"
            isChecked={powerIsChecked}
            onCheck={handlePowerCheck}
          />
          <div className="display-box">
            <DisplayBox drumName={displayBox} />
          </div>
          <CheckBox
            id="bank-checkBox-id"
            name="Bank"
            isChecked={bankIsChecked}
            isDisabled={powerIsChecked === false}
            onCheck={handleBankCheck}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
