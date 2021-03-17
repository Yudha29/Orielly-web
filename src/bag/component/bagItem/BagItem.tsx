import React from "react";
import {connect} from 'react-redux';
import {RootState} from "../../../redux/contract/RootState";
import BagItemProps from "./BagItemProps";
import {numberWithCommas} from "../../../common/util/numberUtil";
import QuantityInput from "../quantityInput/QuantityInput";
import _ from "lodash";
import {updateQuantity} from "../../state/bagAction";

const BagItem: React.FC<BagItemProps> = props => {
    const {product, itemData} = props;
    const productData = product.all.find(e => e.id === itemData.productId);
    if (!productData)
        return null;
    const hasSpecialOffer = productData.discount && productData.discount > 0;
    const afterDiscount = Math.round(productData.price - productData.price * productData.discount);

    return (
        <div className="my-2 border-t-2 py-4 border-gray-200">
            <div className="flex">
                <div className="flex mr-8 w-8/12">
                    <div
                        className="w-16 h-16 bg-gray-300 rounded-sm"
                        style={{
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url(assets/products/${_.get(productData.photos, '[0]')})`
                        }}
                    >
                    </div>
                    <div className="ml-4 self-center">
                        <p className="text-gray-500 text-xs mb-0">{productData.merk}</p>
                        <p className="text-gray-700 font-semibold text-sm mb-0.5">{productData.name}</p>
                    </div>
                </div>
                <div className="self-center mx-8 text-left w-2/12">
                    <div>
                        <p className="text-xs line-through text-gray-500 font-light mr-2">
                            {hasSpecialOffer ? `Rp${numberWithCommas(productData.price)}` : ''}
                        </p>
                        <p className="text-sm orielly-text-primary font-bold">
                            <span className="mr-1">Rp{numberWithCommas(hasSpecialOffer ? afterDiscount : productData.price)}</span>
                        </p>
                    </div>
                </div>
                <div className="self-center w-2/12 flex">
                    <div className="ml-auto">
                        <QuantityInput
                            increment={() => props.updateQuantity(productData.id, itemData.quantity + 1)}
                            decrement={() => props.updateQuantity(productData.id, itemData.quantity - 1)}
                            quantity={itemData.quantity}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({product}: RootState) => ({product})
export default connect(mapStateToProps, {updateQuantity})(BagItem);