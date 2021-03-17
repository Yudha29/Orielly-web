import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import QuantityInputProps from "./QuantityInputProps";
import {connect} from "react-redux";
import {updateQuantity} from "../../state/bagAction";

const QuantityInput: React.FC<QuantityInputProps> = props => {
    const {increment, quantity, decrement} = props;
    return (
            <div className="w-24 flex items-center border text-gray-600 py-1 px-2 rounded-md border-gray-200">
                <button
                    className="focus:outline-none mr-auto"
                    onClick={decrement}
                    disabled={quantity === 0}
                >
                    <FontAwesomeIcon
                        className="text-gray-400 mr-4"
                        icon={faMinus}
                        size="sm"
                    />
                </button>
                {quantity}
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
    )
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {updateQuantity}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityInput);