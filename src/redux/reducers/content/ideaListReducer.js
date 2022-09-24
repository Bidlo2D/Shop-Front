import { IDEAS_MOVING_LEFT, IDEAS_MOVING_RIGHT, IDEAS_LOAD } from "./types";
const initialState = {
    ideas: [
        { title: "Гостинная в светлых тонах с акцентом на диване Monreal", image: "" },
        { title: "Интерьер солнечной гостинной с комплектом мебели Puaje", image: "" },
        { title: "Интерьер гостинной в пастельных тонах с диваном Kivasso", image: "" },
        { title: "Светлая небольшая гостиная дизайн с яркими элементами", image: "" }
    ],
    ideasShow: [],
    head: 0,
    end: 1
}
export const ideaListReducer = (state = initialState, action) => {
    switch (action.type) {
        case IDEAS_MOVING_RIGHT:
            console.log("Moving Right")
            return (() => {
                const { ideas, head, end } = state
                const indexH = head < ideas.length - 1 ? (head + 1) : (0)
                const indexE = end < ideas.length - 1 ? (end + 1) : (0)
                const rightMovingIdeas = [ideas.at(indexH - 1), ideas[indexH], ideas[indexE]]
                return { ...state, ideasShow: rightMovingIdeas }
            })()
        case IDEAS_MOVING_LEFT:
            return state;
        case IDEAS_LOAD:
            return (() => {
                const { ideas, head, end } = state
                const ideasLoad = [ideas.at(head - 1), ideas[head], ideas[end]]
                return { ...state, ideasShow: ideasLoad };
            })()
        default:
            return state;
    }
}