import ProductState from "../../../product/state/contract/ProductState";
import {RouteComponentProps} from "react-router-dom";

export default interface SearchProps extends RouteComponentProps {
    product: ProductState;
}