import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    currentDirectory: "",
    currentСategory: "",
}

export const changeCatalog = createAction("CHANGE_CATALOG")

export default createReducer(initialState, {
    [changeCatalog]: function (state, action) {
        const href = action.payload;
        switch (href) {
            case "/catalog":
                state.currentDirectory = "Главная / Каталог";
                state.currentСategory = "Каталог";
                break;
            case "/catalog/assortment":
                state.currentDirectory = "Главная / Каталог";
                state.currentСategory = "Каталог";
                break;
            case "/catalog/all":
                state.currentDirectory = "Главная / Каталог / Вся мебель";
                state.currentСategory = "Вся мебель";
                break;
            case "/catalog/sofas":
                state.currentDirectory = "Главная / Каталог / Диваны";
                state.currentСategory = "Дизайнерские диваны";
                break;
            case "/catalog/chairs":
                state.currentDirectory = "Главная / Каталог / Стулья";
                state.currentСategory = "Дизайнерские стулья";
                break;
            case "/catalog/armchairs":
                state.currentDirectory = "Главная / Каталог / Кресла";
                state.currentСategory = "Дизайнерские кресла";
                break;
            case "/catalog/dressers":
                state.currentDirectory = "Главная / Каталог / Комоды";
                state.currentСategory = "Дизайнерские комоды";
                break;
            case "/bucket":
                state.currentDirectory = "Главная / Корзина";
                state.currentСategory = "Ваш заказ";
                break;
            default:
                state.currentDirectory = "???";
                state.currentСategory = "???";
                break;
        }
    }
})