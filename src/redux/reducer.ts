import {combineReducers} from "redux";
import categoryReducer from "../category/state/categoryReducer";
import productReducer from "../product/state/productReducer";

const reducers = combineReducers({
    category: categoryReducer,
    product: productReducer
});

export default reducers;