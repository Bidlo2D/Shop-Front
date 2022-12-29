import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/header/searchReducer";
import ideaListReducer from "./reducers/content/main_page/ideaListReducer";
import contentViewReducer from "./reducers/content/contentViewReducer";
import catalogViewReducer from "./reducers/content/catalog/catalogViewReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    tabContent: contentViewReducer,
    tabCatalog: catalogViewReducer,
    ideas: ideaListReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
