import React from "react"
import { useDispatch } from "react-redux"
import { changeCatalog } from "../redux/reducers/content/catalog/catalogViewReducer"
// actions
import { changeContent } from "../redux/reducers/content/contentViewReducer"
// components
import Catalog from "./content/catalog/Catalog"
import TabSections from "./content/catalog/tab_sections/TabSections"

const ButtonCatalog = (props) => {
  const dispatch = useDispatch()
  return (
    <p
      onClick={() => {
        dispatch(
          changeCatalog({
            dir: "Главная / Каталог",
            ctr: "Каталог",
            tab: <TabSections></TabSections>,
          })
        )
        dispatch(changeContent(<Catalog></Catalog>))
      }}
      className={props.style}
    >
      {props.children}
    </p>
  )
}

export default ButtonCatalog
