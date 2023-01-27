import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// reducers
import searchReducer from "./reducers/header/searchReducer";
import ideaListReducer from "./reducers/content/main_page/ideaListReducer";
import catalogViewReducer from "./reducers/content/catalog/catalogViewReducer";
import filtersReducer from "./reducers/content/catalog/assortment/filtersReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    catalog: catalogViewReducer,
    filter: filtersReducer,
    ideas: ideaListReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })
}
