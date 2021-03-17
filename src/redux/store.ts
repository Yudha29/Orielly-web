import {createStore, applyMiddleware,} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from "./reducer";
import {RootState} from "./contract/RootState";

const rootState: RootState = {} as any;

//export the redux
export const store = createStore(
    reducers,
    rootState,
    // composeWithDevTools(
    //     applyMiddleware(thunk)
    // )
)