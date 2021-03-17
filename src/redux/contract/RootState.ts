import CategoryState from "../../category/state/contract/CategoryState";
import ProductState from "../../product/state/contract/ProductState";
import BagState from "../../bag/state/contract/BagState";

export interface RootState {
    category: CategoryState,
    product: ProductState,
    bag: BagState
}