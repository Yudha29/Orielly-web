import React from "react";

export default interface ButtonProps {
    type?: 'reset' | 'submit' | 'button';
    onClick?: (ev: React.MouseEvent) => {};
    className?: string;
    children: any;
}