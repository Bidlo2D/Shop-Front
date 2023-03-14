import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

export const addItem = createAction("ADD_ITEM");
export const decrementCount = createAction("IDEAS_MOVING_RIGHT");
export const incrementCount = createAction("IDEAS_LOAD");

export default createReducer(initialState, {
    [addItem]: function (state, action) {
        const item = action.payload;
        state.products.push(item)
    },
    [decrementCount]: function (state) {

    },
    [incrementCount]: function (state) {

    }
})