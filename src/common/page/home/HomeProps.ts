import CategoryState from "../../../category/state/contract/CategoryState";
import ProductState from "../../../product/state/contract/ProductState";

export default interface HomeProps {
    category: CategoryState;
    product: ProductState;
}