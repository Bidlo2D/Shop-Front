import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { changeCatalog } from "../../../../../redux/reducers/content/catalog/catalogViewReducer"
import styles from "./css/AllSection.module.css"

const AllSection = () => {
  const dispatch = useDispatch()
  return (
    <Link to="all">
      <div
        onClick={() => {
          dispatch(
            changeCatalog({
              dir: "Главная / Каталог / Вся мебель",
              ctr: "Вся мебель",
            })
          )
        }}
        className={styles.item}
      >
        {" "}
        <p>Вся мебель</p>
      </div>
    </Link>
  )
}

export default AllSection
