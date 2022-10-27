import { combineReducers } from "redux";
import { searchReducer } from "./reducers/header/searchReducer";
import { ideaListReducer } from "./reducers/content/ideaListReducer";
export const rootReducer = combineReducers({
    searchReducer,
    ideaListReducer
});