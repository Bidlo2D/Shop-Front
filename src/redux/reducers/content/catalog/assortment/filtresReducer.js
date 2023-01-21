import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    max: 5000,
    min: 1000,
    valueMin: 0,
    valueMax: 0,
    busy: false
}

export const viewBusy = createAction("VIEW_BUSY")
export const changeValueMin = createAction("CHANGE_VALUE_MIN")
export const changeValueMax = createAction("CHANGE_VALUE_MAX")
export const loadMaxMin = createAction("LOAD_MAX_MIN")

export default createReducer(initialState, {
    [viewBusy]: function (state) {
        state.busy = !state.busy;
    },
    [changeValueMin]: function (state, action) {
        const value = action.payload;
        state.valueMin = value;
    },
    [changeValueMax]: function (state, action) {
        const value = action.payload;
        state.valueMax = value;
    },
    [loadMaxMin]: function (state, action) {
        /* TODO: API */
    }
})