import { createAction, createReducer } from "@reduxjs/toolkit";
import TabSections from "./../../../../components/content/catalog/tab_sections/TabSections"
const initialState = {
    currentDirectory: "Главная / Каталог",
    currentСategory: "Каталог",
    currentTab: <TabSections></TabSections>
}

export const changeCatalog = createAction("CHANGE_CATALOG")

export default createReducer(initialState, {
    [changeCatalog]: function (state, action) {
        const { dir, ctr, tab } = action.payload;
        state.currentDirectory = dir;
        state.currentСategory = ctr;
        state.currentView = tab;
    }
})