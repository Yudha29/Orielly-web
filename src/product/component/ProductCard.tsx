import _ from 'lodash';
import React from "react";
import ProductCardProps from "./ProductCardProps";
import {getUnitLevel, getUnitName, numberWithCommas} from "../../common/util/numberUtil";

const ProductCard: React.FC<ProductCardProps> = props => {
    const {discount, price, numOfSold, photos} = props.data;
    const hasSpecialOffer = discount && discount > 0;
    const afterDiscount = Math.round(price - price * discount);
    const unitLevel = getUnitLevel(numOfSold);
    const numOfSoldDigits = typeof numOfSold === 'number' ? String(Math.floor(numOfSold/Math.pow(1000, unitLevel))).length : 0;
    const hasValidDigits = numOfSoldDigits > 0;
    const numOfSoldStr = hasValidDigits ? String(numOfSold).substr(0, numOfSoldDigits) : String(numOfSold);
    return (

            <div
                className="bg-white rounded-md overflow-hidden shadow-md w-full hover:shadow-lg transition cursor-pointer"
                style={{
                    minHeight: '22rem'
                }}
            >
                <div
                    className="h-52 w-full"
                    style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(assets/products/${_.get(photos, '[0]')})`
                    }}
                />
                <div className="px-2 py-1">
                    <p className="text-gray-500 text-xs mb-0">{props.data.merk}</p>
                    <p className="text-gray-700 font-semibold text-sm mb-2">{props.data.name}</p>
                    <div className="mb-2">
                        <p className="text-xs line-through orielly-text-primary font-semibold">
                            {hasSpecialOffer ? `RP ${numberWithCommas(props.data.price)}` : ''}
                        </p>
                        <p className="text-md orielly-text-primary font-bold">
                            <span className="text-xs mr-1">RP</span>
                            <span>{numberWithCommas(hasSpecialOffer ? afterDiscount : props.data.price)}</span>
                        </p>
                        <p className="text-gray-400 text-xs">{numOfSoldStr}{getUnitName(numOfSold)} Terjual</p>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard;
