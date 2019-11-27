import React from "react";

/**
 * rename to checkbox.DONE
 * id = power / bank
 * name = Power / Bank
 * isChecked = true / false
 * onCheck = function
 */
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
      <label for={props.id}>{props.name}</label>
    </div>
  );
};
