import {ThunkAction as ReduxThunkAction} from "redux-thunk";
import {Action} from "redux";

export type ThunkAction = ReduxThunkAction<any, any, any, Action<string>>