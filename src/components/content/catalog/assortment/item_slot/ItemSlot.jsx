import React from "react"
// components
import Item from "./item/Item"
// styles
import styles from "./css/ItemSlot.module.css"

const ItemSlot = () => {
  return (
    <div className={styles.itemSlot}>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  )
}

export default ItemSlot
