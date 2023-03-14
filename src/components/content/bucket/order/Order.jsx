import React from "react"
// styles
import styles from "./css/Order.module.css"
import { useSelector } from "react-redux"
import ItemOrder from "./item_order/ItemOrder"

const Order = () => {
  const products = useSelector((state) => {
    return state.bucket.products
  })

  return (
    <div className={styles.order}>
      {products.map((item, i) => (
        <ItemOrder
          key={i}
          name={item.name}
          color={item.color}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default Order
