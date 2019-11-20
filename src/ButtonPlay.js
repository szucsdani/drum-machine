import React from "react";

export function ButtonPlay(props) {
  const handleKey = event => {
    console.log(event);
    props.letter.preventDefault();
  };
  return <div onKeyDown={handleKey}>{props.letter}</div>;
}
