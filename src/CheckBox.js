import React from "react";
import "./App.css";
import "./CheckBox.css";

export const CheckBox = props => {
  return (
    <div className="checkBox-look">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.name}
        checked={props.isChecked}
        disabled={props.isDisabled}
        onChange={props.onCheck}
      />
      <label className="checkBox-label-look" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
  );
};
