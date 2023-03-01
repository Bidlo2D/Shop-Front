import { createAction, createReducer } from "@reduxjs/toolkit";
import arrowUp from "../../../../../assets/img/arrow-up.png"
import arrowDown from "../../../../../assets/img/arrow-down.png"
import popular from "../../../../../assets/img/popular.png"

export const groupFilter = { RANGE: "range", CHECKLIST: "checklist", SORT: "sort" }

export const groupSort = {
    PRICEHIGH: { img: arrowUp, name: "по цене (дороже)" },
    PRICELOW: { img: arrowDown, name: "по цене (дешевле)" },
    POPULAR: { img: popular, name: "по популяности" }
}

const initialState = {
    products: [],
    total: 0,
    page: 0,
    countPages: 0,
    filters: [
        { id: 0, show: false, group: groupFilter.CHECKLIST, title: "Цвет" },
        { id: 1, show: false, group: groupFilter.CHECKLIST, title: "Стиль" },
        { id: 2, show: false, group: groupFilter.RANGE, title: "Цена" },
        { id: 3, show: false, group: groupFilter.CHECKLIST, title: "Материал" },
        { id: 4, show: false, group: groupFilter.SORT, title: "Порядок: " }
    ],
    filtersParams: [
        { id: 0, group: groupFilter.CHECKLIST, params: [{ id: 0, check: false, name: "Черный", color: "#000" }, { id: 1, check: false, name: "Белый", color: "#fff" }] },
        { id: 1, group: groupFilter.CHECKLIST, params: [{ id: 0, check: false, name: "Античный" }, { id: 1, check: false, name: "Византийский" }, { id: 2, check: false, name: "Романский" }] },
        { id: 2, group: groupFilter.RANGE, params: { max: 5000, min: 1000, currentMin: 1000, currentMax: 5000 } },
        { id: 3, group: groupFilter.CHECKLIST, params: [{ id: 0, check: false, name: "Искусственная кожа" }, { id: 1, check: false, name: "Натуральная кожа" }, { id: 2, check: false, name: "Ткань" }, { id: 3, check: false, name: "Экокожа" }] },
        { id: 4, group: groupFilter.SORT, params: { sort: groupSort.PRICEHIGH } }
    ],
    busyness: { busy: false, indexF: 0 }
}

export const changeView = createAction("CHANGE_VIEW")
export const changePage = createAction("CHANGE_PAGE")
export const rangeChangeMin = createAction("RANGE_CHANGE_MIN")
export const rangeChangeMax = createAction("RANGE_CHANGE_MAX")
export const paramChangeCheck = createAction("PARAM_CHANGE_CHECK")
export const changeSort = createAction("CHANGE_SORT")
export const loadInfo = createAction("LOAD_INFO")

export default createReducer(initialState, {
    [changeView]: function (state, action) {
        const indexF = action.payload;
        state.filters[indexF].show = !state.filters[indexF].show;
        state.busyness.busy = !state.busyness.busy;
        state.busyness.indexF = indexF;
    },
    [rangeChangeMin]: function (state, action) {
        const { value, index } = action.payload;
        const filter = state.filtersParams[index];
        if (value >= filter.params.min
            && value <= filter.params.currentMax) { filter.params.currentMin = value; }
    },
    [rangeChangeMax]: function (state, action) {
        const { value, index } = action.payload;
        const filter = state.filtersParams[index];
        if (value <= filter.params.max
            && value >= filter.params.currentMin) { filter.params.currentMax = value; }
    },
    [paramChangeCheck]: function (state, action) {
        const { indexF, indexP } = action.payload;
        const param = state.filtersParams[indexF].params[indexP];
        param.check = !param.check;
    },
    [changeSort]: function (state, action) {
        const { indexF, grouping } = action.payload;
        state.filtersParams[indexF].params.sort = groupSort[grouping];
    },
    [loadInfo]: function (state, action) {
        const pages = action.payload;
        state.products = pages.data;
        state.total = pages.total;
        state.countPages = pages.countPages;
    },
    [changePage]: function (state, action) {
        const page = action.payload;
        state.page = page;
    }
})