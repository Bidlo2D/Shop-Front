import React from "react"
// styles
import styles from "./css/FoundItem.module.css"
// components
import ImageAPI from "../../../../universal/ImageAPI"

const FoundItem = (props) => {
  return (
    <div className={styles.found}>
      <ImageAPI style={styles.image} name={props.image} />
      <div className={styles.name}>{props.name}</div>
      <div className={styles.price}>{props.price} ₽</div>
    </div>
  )
}

export default FoundItem
