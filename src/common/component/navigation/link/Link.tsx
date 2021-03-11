import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import LinkProps from "./LinkProps";

const Link: React.FC<LinkProps> = props => {
    return (
        <RouterLink to={props.to}>
            <span className={`${props.className} orielly-text-orange-700 hover:underline`}>
                {props.children}
            </span>
        </RouterLink>
    );
}

export default Link;