import ProductState from "./contract/ProductState";
import products from '../products.json';

const initialState: ProductState = {
    all: products,
}

const productReducer = (state = initialState) => {
    return state;
}

export default productReducer;