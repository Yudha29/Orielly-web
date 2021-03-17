import {RouteComponentProps} from 'react-router-dom';
import ProductState from "../../state/contract/ProductState";

export interface ProductDetailProps extends RouteComponentProps<{id: string}> {
    product: ProductState
}