import {combineReducers} from "redux";
import categoryReducer from "../category/state/categoryReducer";
import productReducer from "../product/state/productReducer";
import cartReducer from "../cart/state/cartReducer";

const reducers = combineReducers({
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer
});

export default reducers;