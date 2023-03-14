import React from "react"
//styles
import styles from "./css/ItemOrder.module.css"
// components
import ImageAPI from "./../../../catalog/assortment/item_slot/item/image_api/ImageAPI"
// images
import plus from "../../../../../assets/img/plus.png"
import minus from "../../../../../assets/img/minus.png"

const ItemOrder = (props) => {
  return (
    <div className={styles.itemOrder}>
      <ImageAPI style={styles.image} name={props.image} />
      <ul className={styles.description}>
        <li>{props.name}</li>
        <li>Артикул: {props.article}</li>
        <li>Цвет: {props.color}</li>
        <li>Размеры: {props.sizes}</li>
      </ul>
      <div className={styles.counter}>
        <button className={styles.button}>
          <img src={minus} alt="No" />
        </button>
        <span className={styles.count}>1</span>
        <button className={styles.button}>
          <img src={plus} alt="No" />
        </button>
      </div>
      <div className={styles.price}>{props.price} ₽</div>
    </div>
  )
}

export default ItemOrder
