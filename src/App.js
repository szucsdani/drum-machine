import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { DrumPadButton } from "./DrumPadButton";
import { CheckBox } from "./CheckBox";

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
    sourceElectric: "./samples/esnare3.wav"
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
    sourceElectric: "./samples/ekick.wav"
  }
];

function App() {
  const [powerIsChecked, setPowerIsChecked] = useState(false);
  const [bankIsChecked, setBankIsChecked] = useState(false);

  const handlePowerCheck = () => {
    setPowerIsChecked(!powerIsChecked);
  };

  const handleBankCheck = () => {
    setBankIsChecked(!bankIsChecked);
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
              isDisabled={powerIsChecked === false}
              isChecked={bankIsChecked}
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
