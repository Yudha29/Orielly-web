import CartState from "../../state/contract/CartState";
import ProductState from "../../../product/state/contract/ProductState";

export default interface SummaryCardProps {
    cart: CartState,
    product: ProductState
}