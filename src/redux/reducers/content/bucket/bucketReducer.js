import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsParam: [],
}

export const addItem = createAction("ADD_ITEM");
export const decrementCount = createAction("DECREMENT_COUNT");
export const incrementCount = createAction("INCREMENT_COUNT");

export default createReducer(initialState, {
    [addItem]: function (state, action) {
        const item = action.payload;
        const param = { id: item.id, count: 1 }
        if (state.productsParam.findIndex(x => x.id === item.id) === -1) {
            state.productsParam.push(param)
            state.products.push(item)
        }
    },
    [decrementCount]: function (state, action) {
        const id = action.payload;
        const index = state.productsParam.findIndex(x => x.id === id)
        state.productsParam[index].count -= 1;
        if (state.productsParam[index].count <= 0) {
            state.products.splice(index, 1);
            state.productsParam.splice(index, 1);
        }
    },
    [incrementCount]: function (state, action) {
        const id = action.payload;
        const index = state.productsParam.findIndex(x => x.id === id)
        if (state.productsParam[index].count < 999) {
            state.productsParam[index].count += 1;
        }
    }
})