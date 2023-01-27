import { createAction, createReducer } from "@reduxjs/toolkit";
export const groupFilter = { RANGE: "range", LIST: "list" }
const initialState = {
    loadfilter: {
        filters: [
            { id: 0, group: groupFilter.LIST, text: "Цвет", params: [{ id: 0, name: "Черный", color: "#000" }, { id: 1, name: "Белый", color: "#fff" }] },
            { id: 1, group: groupFilter.LIST, text: "Стиль", params: [{ id: 0, name: "Античный" }, { id: 1, name: "Византийский" }, { id: 2, name: "Романский" }] },
            { id: 2, group: groupFilter.RANGE, text: "Цена", params: { max: 5000, min: 1000, currentMin: 1000, currentMax: 5000 } },
            { id: 3, group: groupFilter.LIST, text: "Материал", params: [{ id: 0, name: "Искусственная кожа" }, { id: 1, name: "Натуральная кожа" }, { id: 2, name: "Ткань" }, { id: 3, name: "Экокожа" }] }]
    },
    currentfilter: {
        filters: []
    },
    busy: false
}

export const viewBusy = createAction("VIEW_BUSY")
export const changeValueMin = createAction("CHANGE_VALUE_MIN")
export const changeValueMax = createAction("CHANGE_VALUE_MAX")
export const addFilter = createAction("ADD_FILTER")
export const loadInfo = createAction("LOAD_INFO")

export default createReducer(initialState, {
    [viewBusy]: function (state) {
        state.busy = !state.busy;
    },
    [changeValueMin]: function (state, action) {
        const { value, index } = action.payload;
        const filter = state.loadfilter.filters[index];
        if (value >= filter.params.min
            && value <= filter.params.currentMax) { filter.params.currentMin = value; }
    },
    [changeValueMax]: function (state, action) {
        const { value, index } = action.payload;
        const filter = state.loadfilter.filters[index];
        if (value <= filter.params.max
            && value >= filter.params.currentMin) { filter.params.currentMax = value; }
    },
    [addFilter]: function (state, action) {
        const { filter } = action.payload;
        state.currentfilters.filters.push(filter);
    },
    [loadInfo]: function (state, action) {
        /* TODO: API */
    }
})