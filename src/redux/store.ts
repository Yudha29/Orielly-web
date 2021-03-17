import {createStore, applyMiddleware} from 'redux';
import reducers from "./reducer";
import {RootState} from "./contract/RootState";
import thunk from "redux-thunk";

const rootState: RootState = {} as any;

//export the redux
export const store = createStore(
    reducers,
    rootState,
    applyMiddleware(thunk)
)