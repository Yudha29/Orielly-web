import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {useField} from "formik";
import {TextAreaProps} from "./TextAreaProps";

const Input: React.FC<TextAreaProps> = props => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error ? meta.error : null;
  return (
    <>
      <label className={`${props.error ? 'text-red-500' : 'text-gray-500'} block font-bold text-xs mb-1.5`}>
        {props.label}
      </label>
      <textarea
        rows={4}
        className={`${props.error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:border focus:outline-none text-sm placeholder-gray-400 text-gray-700 border py-2.5 px-2 w-full`}
        placeholder={props.placeholder}
        {...field}
        {...props}
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
        {!error ? 'e' : error}
      </span>
    </>
  )
}

export default Input;
