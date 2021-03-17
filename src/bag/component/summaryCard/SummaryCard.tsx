import React from "react";
import _ from 'lodash';
import SummaryCardProps from "./SummaryCardProps";
import Button from "../../../common/component/button/Button";
import {RootState} from "../../../redux/contract/RootState";
import {connect} from "react-redux";
import {numberWithCommas} from "../../../common/util/numberUtil";

const SummaryCard: React.FC<SummaryCardProps> = props => {
    const productIdsInBag = props.bag.items.map(e => e.productId);
    const productQuantityMap = _.keyBy(props.bag.items, 'productId');
    const productsInBag = props.product.all.filter(e => productIdsInBag.indexOf(e.id) > -1);
    const getTotalDiscount = () => productsInBag.reduce((acc, curr) => {
        return acc + (curr.price * productQuantityMap[curr.id].quantity) * curr.discount;
    }, 0);
    const getTotalPrice = () => productsInBag.reduce((acc, curr) => {
        return acc + (curr.price * productQuantityMap[curr.id].quantity);
    }, 0);
    const totalPrice = getTotalPrice();
    const totalDiscount = getTotalDiscount();
    return (
        <div className="bg-white border text-sm text-gray-500 border-gray-100 rounded-md p-4 shadow-md">
            <p className=" font-bold">Ringkasan Belanja</p>
            <div className="border-b-2 border-gray-200 pt-4 py-2">
                <table className="text-left">
                    <tr>
                        <th className="font-normal w-full py-2">Total Belanja</th>
                        <td className="text-right">Rp{numberWithCommas(totalPrice)}</td>
                    </tr>
                    <tr>
                        <th className="font-normal w-full py-2">Total Diskon</th>
                        <td className="text-right">Rp{numberWithCommas(totalDiscount)}</td>
                    </tr>
                </table>
            </div>
            <div className="flex my-4">
                <p>Total</p>
                <p className="ml-auto orielly-text-primary font-bold">Rp{numberWithCommas(totalPrice - totalDiscount)}</p>
            </div>
            <Button
                type="button"
                className="orielly-bg-primary mt-2 text-white rounded-md"
            >
                Checkout
            </Button>
        </div>
    );
}

const mapStateToProps = ({product, bag}: RootState) => ({product, bag});

export default connect(mapStateToProps, {})(SummaryCard);