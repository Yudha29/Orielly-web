import {createStore} from 'redux';
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