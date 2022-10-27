import { SEARCH_VISIBLE_ON_OFF } from "./types";
export function visibleOnOff(signal) {
    return {
        type: SEARCH_VISIBLE_ON_OFF,
        active: signal
    }
}