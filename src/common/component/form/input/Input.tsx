import React from "react";
import InputProps from "./InputProps";

const Input: React.FC<InputProps> = props => {
    return (
        <>
            <label className="block text-gray-500 font-bold text-xs mb-1.5">
                {props.label}
            </label>
            <input
                className="rounded-md focus:border focus:border-gray-400 focus:outline-none text-sm placeholder-gray-400 text-gray-700 border border-gray-300 py-2.5 px-2 w-full"
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
            />
            <span
                className="block mt-0.5 text-xs text-right font-semibold text-red-400"
                style={{
                    visibility: props.error ? 'visible' : 'hidden'
                }}
            >
                {!props.error ? 'e' : props.error}
            </span>
        </>
    )
}

export default Input;
