import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// reducers
import searchReducer from "./reducers/header/searchReducer";
import ideaListReducer from "./reducers/content/main_page/ideaListReducer";
import catalogViewReducer from "./reducers/content/catalog/catalogViewReducer";
import assortmentReducer from "./reducers/content/catalog/assortment/assortmentReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    catalog: catalogViewReducer,
    assortment: assortmentReducer,
    ideas: ideaListReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })
}
