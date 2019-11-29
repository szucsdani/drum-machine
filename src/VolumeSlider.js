import React from "react";

export function VolumeSlider(props) {
  return (
    <>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={props.value}
        className="slider"
        onChange={e => props.onVolumeChange(e.target.value)}
      />
      <div className="value"> {props.value}</div>
    </>
  );
}
