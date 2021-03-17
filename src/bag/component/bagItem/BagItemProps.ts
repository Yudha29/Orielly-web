import ProductState from "../../../product/state/contract/ProductState";
import BagProductDocument from "../../state/contract/BagProductDocument";

export default interface BagItemProps {
    updateQuantity: (productId: string, quantity: number) => void;
    product: ProductState,
    itemData: BagProductDocument
}