import React from "react"
import styles from "./css/Item.module.css"
import ImageAPI from "./image_api/ImageAPI"
import { useDispatch } from "react-redux"
import { addItem } from "./../../../../../../redux/reducers/content/bucket/bucketReducer"

const Item = (props) => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => {
        dispatch(addItem(props))
      }}
      className={styles.item}
    >
      <ImageAPI style={styles.image} name={props.image} />
      <img src={props.image} alt="" />
      <div className={styles.textBlock}>
        <p className={styles.title}>
          {props.category} {props.name}
        </p>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>{props.price} ₽</p>
      </div>
    </div>
  )
}

export default Item
