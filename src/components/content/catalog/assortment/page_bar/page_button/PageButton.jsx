import React, { memo } from "react"
import { changePage } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
// styles
import styles from "./css/PageButton.module.css"
import { useDispatch } from "react-redux"

const PageButton = memo((props) => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => {
        dispatch(changePage(props.page))
      }}
      className={styles.radius}
    >
      <p className={styles.pageButton}>
        <span className={styles.text}>{props.page + 1}</span>
      </p>
    </div>
  )
})

export default PageButton
