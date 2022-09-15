import { combineReducers } from "redux";
import { firstReducer } from "./headerRedux/firstReducer";
import { secondReducer } from "./mainRedux/secondReducer";
export const rootReducer = combineReducers({
    firstReducer,
    secondReducer
});