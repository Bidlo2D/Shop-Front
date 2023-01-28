import { createAction, createReducer } from "@reduxjs/toolkit";
export const groupFilter = { RANGE: "range", CHECKLIST: "list" }
const initialState = {
    currentfilter: {
        filters: [
            { id: 0, group: groupFilter.CHECKLIST, text: "Цвет", params: [{ id: 0, check: false, name: "Черный", color: "#000" }, { id: 1, check: false, name: "Белый", color: "#fff" }] },
            { id: 1, group: groupFilter.CHECKLIST, text: "Стиль", params: [{ id: 0, check: false, name: "Античный" }, { id: 1, check: false, name: "Византийский" }, { id: 2, check: false, name: "Романский" }] },
            { id: 2, group: groupFilter.RANGE, text: "Цена", params: { max: 5000, min: 1000, currentMin: 1000, currentMax: 5000 } },
            { id: 3, group: groupFilter.CHECKLIST, text: "Материал", params: [{ id: 0, check: false, name: "Искусственная кожа" }, { id: 1, check: false, name: "Натуральная кожа" }, { id: 2, check: false, name: "Ткань" }, { id: 3, check: false, name: "Экокожа" }] }
        ]
    },
    busy: false
}

export const viewBusy = createAction("VIEW_BUSY")
export const rangeChangeMin = createAction("RANGE_CHANGE_MIN")
export const rangeChangeMax = createAction("RANGE_CHANGE_MAX")
export const paramChangeCheck = createAction("PARAM_CHANGE_CHECK")
export const loadInfo = createAction("LOAD_INFO")

export default createReducer(initialState, {
    [viewBusy]: function (state) {
        state.busy = !state.busy;
    },
    [rangeChangeMin]: function (state, action) {
        const { value, index } = action.payload;
        const filter = state.currentfilter.filters[index];
        if (value >= filter.params.min
            && value <= filter.params.currentMax) { filter.params.currentMin = value; }
    },
    [rangeChangeMax]: function (state, action) {
        const { value, index } = action.payload;
        const filter = state.currentfilter.filters[index];
        if (value <= filter.params.max
            && value >= filter.params.currentMin) { filter.params.currentMax = value; }
    },
    [paramChangeCheck]: function (state, action) {
        const { indexF, indexP } = action.payload;
        const param = state.currentfilter.filters[indexF].params[indexP];
        param.check = !param.check;
    },
    [loadInfo]: function (state, action) {
        /* TODO: API */
    }
})