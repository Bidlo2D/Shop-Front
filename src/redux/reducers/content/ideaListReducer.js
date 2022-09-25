import { IDEAS_MOVING_LEFT, IDEAS_MOVING_RIGHT, IDEAS_LOAD } from "./types";
import imageTest1 from "../../../components/content/images/test/imageTest1.jpg"
import imageTest2 from "../../../components/content/images/test/imageTest2.jpg"
import imageTest3 from "../../../components/content/images/test/imageTest3.jpg"
import imageTest4 from "../../../components/content/images/test/imageTest4.jpg"
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
export const ideaListReducer = (state = initialState, action) => {
    switch (action.type) {
        case IDEAS_MOVING_RIGHT:
            return (() => {
                const { ideas, head, end } = state
                const indexH = head < ideas.length - 1 ? (head + 1) : (0)
                const indexE = end < ideas.length - 1 ? (end + 1) : (0)
                const rightMovingIdeas = [ideas.at(indexH - 1), ideas[indexH], ideas[indexE]]
                return { ...state, head: indexH, end: indexE, ideasShow: rightMovingIdeas }
            })()
        case IDEAS_MOVING_LEFT:
            return (() => {
                const { ideas, head, end } = state
                const indexH = (head * -1) < ideas.length - 1 ? (head - 1) : (0)
                const indexE = (end * -1) < ideas.length - 1 ? (end - 1) : (0)
                const rightMovingIdeas = [ideas.at(indexH - 1), ideas.at(indexH), ideas.at(indexE)]
                return { ...state, head: indexH, end: indexE, ideasShow: rightMovingIdeas }
            })()
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