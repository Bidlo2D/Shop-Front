import React from "react"
import { useDispatch } from "react-redux"
import { changeCatalog } from "../../../../../redux/reducers/content/catalog/catalogViewReducer"
import Assortment from "../../assortment/Assortment"
import styles from "./css/AllSection.module.css"

const AllSection = () => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => {
        dispatch(
          changeCatalog({
            dir: "Главная / Каталог / Вся мебель",
            ctr: "Вся мебель",
            tab: <Assortment></Assortment>,
          })
        )
      }}
      className={styles.item}
    >
      <p>Вся мебель</p>
    </div>
  )
}

export default AllSection
