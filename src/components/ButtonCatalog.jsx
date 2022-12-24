import React from "react"
import { useDispatch } from "react-redux"
// actions
import { changeContent } from "./../redux/reducers/content/contentViewReducer"
// components
import Catalog from "./content/catalog/Catalog"

const ButtonCatalog = (props) => {
  const dispatch = useDispatch()
  return (
    <p
      onClick={() => {
        dispatch(changeContent(<Catalog>Каталог</Catalog>))
      }}
      className={props.style}
    >
      {props.children}
    </p>
  )
}

export default ButtonCatalog
