import React from "react";
import InputProps from "./InputProps";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

const Input: React.FC<InputProps> = props => {
    return (
        <>
            <label className={`${props.error ? 'text-red-500' : 'text-gray-500'} block font-bold text-xs mb-1.5`}>
                {props.label}
            </label>
            <input
                className={`${props.error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:border focus:outline-none text-sm placeholder-gray-400 text-gray-700 border py-2.5 px-2 w-full`}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
            />
            <span
                className="block mt-0.5 text-xs text-right text-red-500"
                style={{
                    visibility: props.error ? 'visible' : 'hidden'
                }}
            >
                <FontAwesomeIcon
                    className="text-red-500 mr-1"
                    icon={faExclamationCircle}
                    size="sm"
                />
                {!props.error ? 'e' : props.error}
            </span>
        </>
    )
}

export default Input;
