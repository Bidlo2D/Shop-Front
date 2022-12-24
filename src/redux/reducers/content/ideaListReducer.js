import imageTest1 from "./test/imageTest1.jpg"
import imageTest2 from "./test/imageTest2.jpg"
import imageTest3 from "./test/imageTest3.jpg"
import imageTest4 from "./test/imageTest4.jpg"
import { createAction, createReducer } from "@reduxjs/toolkit";
const initialState = {
    ideas: [
        { title: "Гостинная в светлых тонах с акцентом на диване Monreal", image: imageTest1 },
        { title: "Интерьер солнечной гостинной с комплектом мебели Puaje", image: imageTest2 },
        { title: "Интерьер гостинной в пастельных тонах с диваном Kivasso", image: imageTest3 },
        { title: "Светлая небольшая гостиная дизайн с яркими элементами", image: imageTest4 }
    ],
    ideasShow: [],
    head: 0,
    end: 1
}

export const ideasMovingLeft = createAction("IDEAS_MOVING_LEFT");
export const ideasMovingRight = createAction("IDEAS_MOVING_RIGHT");
export const ideasLoad = createAction("IDEAS_LOAD");

export default createReducer(initialState, {
    [ideasMovingLeft]: function (state) {
        state.head = state.head < state.ideas.length - 1 ? (state.head + 1) : (0)
        state.end = state.end < state.ideas.length - 1 ? (state.end + 1) : (0)
        state.ideasShow = [state.ideas.at(state.head - 1), state.ideas.at(state.head), state.ideas.at(state.end)]
    },
    [ideasMovingRight]: function (state) {
        state.head = (state.head * -1) < state.ideas.length - 1 ? (state.head - 1) : (0)
        state.end = (state.end * -1) < state.ideas.length - 1 ? (state.end - 1) : (0)
        state.ideasShow = [state.ideas.at(state.head - 1), state.ideas.at(state.head), state.ideas.at(state.end)]
    },
    [ideasLoad]: function (state) {
        state.ideasShow = [state.ideas.at(state.head - 1), state.ideas[state.head], state.ideas[state.end]]
    }
})