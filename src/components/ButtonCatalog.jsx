import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
// actions
import { changeCatalog } from "../redux/reducers/content/catalog/catalogViewReducer"

const ButtonCatalog = (props) => {
  const dispatch = useDispatch()
  return (
    <Link
      to="catalog"
      onClick={() => {
        dispatch(
          changeCatalog({
            dir: "Главная / Каталог",
            ctr: "Каталог",
          })
        )
      }}
      className={props.style}
    >
      {props.children}
    </Link>
  )
}

export default ButtonCatalog
