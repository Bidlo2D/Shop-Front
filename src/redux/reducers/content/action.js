import { IDEAS_MOVING_LEFT, IDEAS_MOVING_RIGHT, IDEAS_LOAD } from "./types";
export function movingLeft() {
    return {
        type: IDEAS_MOVING_LEFT
    }
}
export function movingRight() {
    return {
        type: IDEAS_MOVING_RIGHT
    }
}
export function ideasLoad() {
    return {
        type: IDEAS_LOAD
    }
}