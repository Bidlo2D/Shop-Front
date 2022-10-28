import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    visible: true
}
export const searchDeployment = createAction("SEARCH_DEPLOYMENT")

export default createReducer(initialState, {
    [searchDeployment]: function (state) {
        state.visible = !state.visible;
    }
})