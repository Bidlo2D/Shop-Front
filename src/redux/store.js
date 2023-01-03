import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// reducers
import searchReducer from "./reducers/header/searchReducer";
import ideaListReducer from "./reducers/content/main_page/ideaListReducer";
import catalogViewReducer from "./reducers/content/catalog/catalogViewReducer";
import filtresReducer from "./reducers/content/catalog/assortment/filtresReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    catalog: catalogViewReducer,
    filtres: filtresReducer,
    ideas: ideaListReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })
}
