import React from "react"
import styles from "./css/Item.module.css"

const Item = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.image} alt="" />
      <div className={styles.textBlock}>
        <p className={styles.title}>
          {props.category} {props.name}
        </p>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>{props.price} Р</p>
      </div>
    </div>
  )
}

export default Item
