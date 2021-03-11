import React from "react";
import {TextInputProps} from "./TextInputProps";
import {useField} from "formik";
import Input from "../../input/Input";

const TextInput: React.FC<TextInputProps> = props => {
    const [field, meta] = useField(props);
    const error = meta.touched && meta.error ? meta.error : null;
    return <Input
        {...field}
        {...props}
        type="text"
        error={error} />
}

export default TextInput;
