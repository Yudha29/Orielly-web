import BagState from "../../state/contract/BagState";
import ProductState from "../../../product/state/contract/ProductState";

export default interface SummaryCardProps {
    bag: BagState,
    product: ProductState
}