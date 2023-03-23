import React, { memo } from "react"
import { useDispatch } from "react-redux"
// components
import ImageAPI from "../universal/ImageAPI"

const Product = memo((props) => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => {
        dispatch(props.action(props.product))
      }}
      className={props.styles.product}
    >
      <ImageAPI style={props.styles.image} name={props.product.image} />
      <ul className={props.styles.properties}>
        <li className={props.styles.name}>
          {props.product.category} {props.product.name}
        </li>
        <li className={props.styles.color}>{props.product.color}</li>
        <li className={props.styles.material}>{props.product.material}</li>
        <li className={props.styles.description}>
          {props.product.description}
        </li>
        <li className={props.styles.price}>{props.product.price} ₽</li>
      </ul>
    </div>
  )
})

export default Product
