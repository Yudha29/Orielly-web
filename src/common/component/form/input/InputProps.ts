import React from "react";

export default interface InputProps {
    name: string,
    label: string,
    type?: 'text' | 'password' | 'number' | 'datetime' | 'time' | 'date',
    placeholder?: string,
    onChange?: React.ChangeEventHandler
    labelClassName?: string,
    value?: any,
    error?: string | null,
    className?: string,
}