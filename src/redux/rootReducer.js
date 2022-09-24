import { combineReducers } from "redux";
import { firstReducer } from "./reducers/header/firstReducer";
import { ideaListReducer } from "./reducers/content/ideaListReducer";
export const rootReducer = combineReducers({
    firstReducer,
    ideaListReducer
});