import ButtonProps from "./ButtonProps";

const Button: React.FC<ButtonProps> = props => {
    return (
        <button
            onClick={props.onClick}
            type={props.type}
            className={`${props.className} focus:outline-none w-full py-2.5 px-4`}
        >
            {props.children}
        </button>
    )
}

export default Button;