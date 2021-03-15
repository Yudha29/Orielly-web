import CategoryState from "../../category/state/contract/CategoryState";
import ProductState from "../../product/state/contract/ProductState";

export interface RootState {
    category: CategoryState,
    product: ProductState
}