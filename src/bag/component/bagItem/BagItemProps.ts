import ProductState from "../../../product/state/contract/ProductState";
import BagProductDocument from "../../state/contract/BagProductDocument";

export default interface BagItemProps {
    product: ProductState,
    itemData: BagProductDocument
}