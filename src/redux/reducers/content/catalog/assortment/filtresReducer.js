import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    busy: false
}

export const viewBusy = createAction("VIEW_BUSY")

export default createReducer(initialState, {
    [viewBusy]: function (state) {
        state.busy = !state.busy;
    }
})