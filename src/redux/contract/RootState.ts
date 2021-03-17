import CategoryState from "../../category/state/contract/CategoryState";
import ProductState from "../../product/state/contract/ProductState";
import CartState from "../../cart/state/contract/CartState";

export interface RootState {
    category: CategoryState,
    product: ProductState,
    cart: CartState
}