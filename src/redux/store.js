import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// reducers
import searchReducer from "./reducers/header/searchReducer";
import ideaListReducer from "./reducers/content/main_page/ideaListReducer";
import pathReducer from "./reducers/content/pathReducer";
import assortmentReducer from "./reducers/content/catalog/assortment/assortmentReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    path: pathReducer,
    assortment: assortmentReducer,
    ideas: ideaListReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })
}
