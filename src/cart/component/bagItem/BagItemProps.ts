import ProductState from "../../../product/state/contract/ProductState";
import CartProductDocument from "../../state/contract/CartProductDocument";

export default interface BagItemProps {
    product: ProductState,
    itemData: CartProductDocument
}