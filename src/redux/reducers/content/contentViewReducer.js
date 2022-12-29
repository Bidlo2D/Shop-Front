import { createAction, createReducer } from "@reduxjs/toolkit";
import MainPage from "../../../components/content/main_page/MainPage"
const initialState = {
    currentView: <MainPage></MainPage>
}

export const changeContent = createAction("CHANGE_CONTENT")

export default createReducer(initialState, {
    [changeContent]: function (state, action) {
        const tab = action.payload;
        state.currentView = tab;
    }
})