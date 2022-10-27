import { SEARCH_VISIBLE_ON_OFF } from "./types";
const initialState = {
    visible: false
}
export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_VISIBLE_ON_OFF:
            return { state, visible: action.active };
        default:
            return state;
    }
}