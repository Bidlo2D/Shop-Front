import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    visible: true
}

export const searchLoadProducts = createAction("SEARCH_LOAD_PRODUCTS");
export const searchDeployment = createAction("SEARCH_DEPLOYMENT");

export default createReducer(initialState, {
    [searchDeployment]: function (state) {
        state.visible = !state.visible;
    },
    [searchLoadProducts]: function (state, action) {
        const products = action.payload;
        state.products = products;
    }
})