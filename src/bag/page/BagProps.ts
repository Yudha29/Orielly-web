import ProductState from "../../product/state/contract/ProductState";
import BagState from "../state/contract/BagState";

export default interface BagProps {
    product: ProductState;
    bag: BagState;
}