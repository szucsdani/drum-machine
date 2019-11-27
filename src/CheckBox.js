import React, { useState } from "react";
import { tsPropertySignature } from "@babel/types";

/**
 * rename to checkbox.DONE
 * id = power / bank
 * name = Power / Bank
 * isChecked = true / false
 * onCheck = function
 */
export const CheckBox = props => {
  return (
    <div className="checkBox-container">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.name}
        checked={props.isChecked}
        disabled={props.isDisabled}
        onChange={props.onCheck}
      />
      <label for={props.id}>{props.name}</label>
    </div>
  );
};
