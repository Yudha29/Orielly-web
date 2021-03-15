import React from "react";

const Container: React.FC = props => {
    return (
        <div className="mx-auto px-2.5 max-w-6xl">
            {props.children}
        </div>
    )
}

export default Container;