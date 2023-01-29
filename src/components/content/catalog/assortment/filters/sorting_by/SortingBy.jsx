import React from "react"
import { useDispatch } from "react-redux"
// styles
import styles from "./css/SortingBy.module.css"
import { changeSort } from "./../../../../../../redux/reducers/content/catalog/assortment/filtersReducer"

const SortingBy = (props) => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => {
        dispatch(changeSort(props.grouping))
      }}
      className={styles.option}
    >
      {props.children}
    </div>
  )
}

export default SortingBy
