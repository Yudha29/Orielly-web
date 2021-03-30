import React from "react";
import {Link} from "react-router-dom";
import FooterLinkProps from "./FooterLinkProps";

const FooterLink: React.FC<FooterLinkProps> = props => {
    return (
        <Link to={props.to}>
            <span className="text-gray-500 mb-2">
                {props.children}
            </span>
        </Link>
    );
}

export default FooterLink;