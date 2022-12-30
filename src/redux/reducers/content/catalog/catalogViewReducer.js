import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    currentDirectory: "",
    currentСategory: "",
}

export const changeCatalog = createAction("CHANGE_CATALOG")

export default createReducer(initialState, {
    [changeCatalog]: function (state, action) {
        const { dir, ctr } = action.payload;
        state.currentDirectory = dir;
        state.currentСategory = ctr;
    }
})