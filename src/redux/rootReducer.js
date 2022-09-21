import { combineReducers } from "redux";
import { firstReducer } from "./reducers/header/firstReducer";
import { newProductListReducer } from "./reducers/content/newProductListReducer";
export const rootReducer = combineReducers({
    firstReducer,
    newProductListReducer
});