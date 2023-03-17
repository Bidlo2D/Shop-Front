import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    visible: true
}

export const searchProducts = createAction("SEARCH_PRODUCTS");
export const searchDeployment = createAction("SEARCH_DEPLOYMENT");

export default createReducer(initialState, {
    [searchDeployment]: function (state) {
        state.visible = !state.visible;
    },
    [searchProducts]: function (state, action) {
        const products = action.payload;
        state.products = products;
    }
})