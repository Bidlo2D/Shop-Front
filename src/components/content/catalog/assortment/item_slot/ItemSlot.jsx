import React from "react"
import { useSelector } from "react-redux"
// components
import Item from "./item/Item"
// styles
import styles from "./css/ItemSlot.module.css"
import ItemSkeleton from "./item/item_skeleton/ItemSkeleton"

const ItemSlot = () => {
  const items = useSelector((state) => {
    return state.assortment.products
  })

  const isLoading = useSelector((state) => {
    return state.assortment.isLoading
  })

  return (
    <div className={styles.itemSlot}>
      {isLoading
        ? [...new Array(9)].map(() => <ItemSkeleton />)
        : items.map((item, i) => (
            <Item
              key={i}
              image={item.image}
              category={item.category}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
    </div>
  )
}

export default ItemSlot
