import React, { useState } from "react";
import { useKeyPress } from "./useKeyPress";

export const DisplayBox = props => {
  return <p>{props.drumName}</p>;
};
