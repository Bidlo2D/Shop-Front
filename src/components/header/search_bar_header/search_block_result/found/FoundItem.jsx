import React from "react"
// styles
import styles from "./css/FoundItem.module.css"
// components
import ImageAPI from "../../../../content/catalog/assortment/item_slot/item/image_api/ImageAPI"

const FoundItem = (props) => {
  return (
    <div className={styles.found}>
      <ImageAPI style={styles.image} name={props.image} />
      <ul className={styles.description}>
        <li>{props.name}</li>
        <li>Цвет: {props.color}</li>
      </ul>
      <div className={styles.price}>{props.price} ₽</div>
    </div>
  )
}

export default FoundItem
