import React from "react"
import styles from "./css/Item.module.css"

const Item = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.image} alt="" />
      <p>{props.title}</p>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Item
