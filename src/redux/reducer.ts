import {combineReducers} from "redux";
import categoryReducer from "../category/state/categoryReducer";
import productReducer from "../product/state/productReducer";
import bagReducer from "../bag/state/bagReducer";

const reducers = combineReducers({
    category: categoryReducer,
    product: productReducer,
    bag: bagReducer
});

export default reducers;