import ProductState from "../../../product/state/contract/ProductState";
import {RouteComponentProps} from "react-router-dom";
import CategoryState from "../../../category/state/contract/CategoryState";

export default interface SearchProps extends RouteComponentProps {
    product: ProductState;
    category: CategoryState;
}