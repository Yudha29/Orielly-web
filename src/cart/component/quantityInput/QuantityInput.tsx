import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import QuantityInputProps from "./QuantityInputProps";
import {connect} from "react-redux";
import {updateQuantity} from "../../state/cartAction";

const QuantityInput: React.FC<QuantityInputProps> = props => {
    const {updateQuantity, quantity, productId} = props;
    const increment = () => updateQuantity(productId, quantity + 1);
    const decrement = () => updateQuantity(productId, quantity - 1);
    return (
        <div className="ml-auto">
            <div className="w-24 flex mx-auto items-center border text-gray-600 py-1 px-2 rounded-md border-gray-200">
                <button
                    className="focus:outline-none mr-auto"
                    onClick={decrement}
                >
                    <FontAwesomeIcon
                        className="text-gray-400 mr-4"
                        icon={faMinus}
                        size="sm"
                    />
                </button>
                {props.quantity}
                <button
                    className="focus:outline-none ml-auto"
                    onClick={increment}
                >
                    <FontAwesomeIcon
                        className="text-gray-400 ml-4"
                        icon={faPlus}
                        size="sm"
                    />
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {updateQuantity}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityInput);