import React from "react"
import { useDispatch } from "react-redux"
// styles
import styles from "./css/SortingBy.module.css"
import { changeSort } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const SortingBy = (props) => {
  const dispatch = useDispatch()
  return (
    <li
      onClick={() => {
        dispatch(changeSort(props.grouping))
      }}
      className={styles.option}
    >
      <img className={styles.image} src={props.img} alt="No" />
      <p className={styles.text}>{props.children}</p>
    </li>
  )
}

export default SortingBy
