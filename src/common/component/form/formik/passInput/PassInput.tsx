import React from "react";
import {PassInputProps} from "./PassInputProps";
import {useField} from "formik";
import Input from "../../input/Input";

const PassInput: React.FC<PassInputProps> = props => {
    const [field, meta] = useField(props);
    const error = meta.touched && meta.error ? meta.error : null;
    return <Input
        {...field}
        {...props}
        type="password"
        error={error} />
}

export default PassInput;