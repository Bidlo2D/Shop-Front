import React from "react"
import { useDispatch } from "react-redux"
//styles
import styles from "./css/ItemOrder.module.css"
// components
import ImageAPI from "../../../../universal/ImageAPI"
// images
import plus from "../../../../../assets/img/plus.png"
import minus from "../../../../../assets/img/minus.png"
import { decrementCount } from "../../../../../redux/reducers/content/bucket/bucketReducer"
import Counter from "./counter/Counter"
import { incrementCount } from "./../../../../../redux/reducers/content/bucket/bucketReducer"

const ItemOrder = (props) => {
  const dispatch = useDispatch()
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
        <button
          onClick={() => {
            dispatch(decrementCount(props.id))
          }}
          className={styles.button}
        >
          <img src={minus} alt="No" />
        </button>
        <Counter style={styles.count} id={props.id} />
        <button
          onClick={() => {
            dispatch(incrementCount(props.id))
          }}
          className={styles.button}
        >
          <img src={plus} alt="No" />
        </button>
      </div>
      <div className={styles.price}>{props.price} ₽</div>
    </div>
  )
}

export default ItemOrder
