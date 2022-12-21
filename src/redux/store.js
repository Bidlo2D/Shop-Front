import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/header/searchReducer";
import ideaListReducer from "./reducers/content/ideaListReducer";
import contentViewReducer from "./reducers/content/contentViewReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    tab: contentViewReducer,
    ideas: ideaListReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
