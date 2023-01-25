import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    max: 5000,
    min: 1000,
    currentMin: 1000,
    currentMax: 5000,
    filtres: {
        colors: [],
        styles: [],
        materials: []
    },
    busy: false
}

export const viewBusy = createAction("VIEW_BUSY")
export const changeValueMin = createAction("CHANGE_VALUE_MIN")
export const changeValueMax = createAction("CHANGE_VALUE_MAX")
export const addFiltres = createAction("ADD_FILTRES")
export const loadInfo = createAction("LOAD_INFO")

export default createReducer(initialState, {
    [viewBusy]: function (state) {
        state.busy = !state.busy;
    },
    [changeValueMin]: function (state, action) {
        const value = action.payload;
        if (value >= state.min && value <= state.currentMax) { state.currentMin = value; }
    },
    [changeValueMax]: function (state, action) {
        const value = action.payload;
        if (value <= state.max && value >= state.currentMin) { state.currentMax = value; }
    },
    [addFiltres]: function (state, action) {
        const { styles, materials, colors } = action.payload;
        state.filtres.styles = styles;
        state.filtres.colors = colors;
        state.filtres.materials = materials;
    },
    [loadInfo]: function (state, action) {
        /* TODO: API */
    }
})