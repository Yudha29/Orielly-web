import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faSquare} from "@fortawesome/free-solid-svg-icons";
import CheckBoxProps from "./CheckBoxProps";

const CheckBox: React.FC<CheckBoxProps> = props => {
  return (
    <div
      className="flex text-gray-600 text-sm my-3 cursor-pointer"
      onClick={() => props.onClick({
        name: props.name,
        checked: !props.checked
      })}
    >
      <div className="orielly-text-primary w-7">
        {props.checked ? (
          <FontAwesomeIcon
            size="lg"
            icon={faCheckSquare}
          />
        ) : (
          <FontAwesomeIcon
            size="lg"
            icon={faSquare}
          />
        )}
      </div>
      <span>{props.children}</span>
    </div>
  )
}

export default CheckBox;