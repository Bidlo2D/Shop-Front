import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    currentView: <div></div>
}

export const changeContent = createAction("CHANGE_CONTENT")

export default createReducer(initialState, {
    [changeContent]: function (state) {
        state.currentView = <div>Click!</div>;
    }
})