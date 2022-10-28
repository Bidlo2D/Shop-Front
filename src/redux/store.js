import { combineReducers } from "redux";
import searchReducer from "./reducers/header/searchReducer";
import ideaListReducer from "./reducers/content/ideaListReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    search: searchReducer,
    ideas: ideaListReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
