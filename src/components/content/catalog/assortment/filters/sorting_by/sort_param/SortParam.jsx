import React from "react"
import { useDispatch } from "react-redux"
// styles
import styles from "./css/SortParam.module.css"
import { changeSort } from "../../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
import { popupOpenClose } from "./../../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const SortParam = (props) => {
  const dispatch = useDispatch()

  return (
    <li
      onClick={() => {
        dispatch(changeSort({ indexS: props.indexS, grouping: props.grouping }))
        dispatch(popupOpenClose(props.indexS))
      }}
      className={styles.option}
    >
      <img className={styles.image} src={props.img} alt="No" />
      <p className={styles.text}>{props.name}</p>
    </li>
  )
}

export default SortParam
