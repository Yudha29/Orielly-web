import {combineReducers} from "redux";
import categoryReducer from "../category/state/categoryReducer";

const reducers = combineReducers({
    category: categoryReducer,
});

export default reducers;