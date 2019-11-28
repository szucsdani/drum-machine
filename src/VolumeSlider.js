import React from "react";

export const VolumeSlider = props => {
  return (
    <input type="range" min="1" max="100" value={props.value} class="slider" />
  );
};
