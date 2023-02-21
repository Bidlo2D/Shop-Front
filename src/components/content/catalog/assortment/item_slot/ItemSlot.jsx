import React from "react"
import { useSelector } from "react-redux"
// components
import Item from "./item/Item"
// styles
import styles from "./css/ItemSlot.module.css"

const ItemSlot = () => {
  const items = useSelector((state) => {
    return state.assortment.products
  })
  return (
    <div className={styles.itemSlot}>
      {items.map((item, i) => (
        <Item
          key={i}
          image=""
          category="Диван"
          name="Monti"
          description="Четкий диван с тканивой обивкой. Доступен в разных цветах."
          price="15 434"
        />
      ))}
    </div>
  )
}

export default ItemSlot
