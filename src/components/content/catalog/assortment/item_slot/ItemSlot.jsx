import React from "react"
//import { useSelector } from "react-redux"
// components
import Item from "./item/Item"
// styles
import styles from "./css/ItemSlot.module.css"
// images
import sofa1 from "./test/sofa1.png"
import sofa2 from "./test/sofa2.png"
import sofa3 from "./test/sofa3.png"

const ItemSlot = () => {
  return (
    <div className={styles.itemSlot}>
      <Item
        image={sofa1}
        category="Диван"
        name="Monti"
        description="Четкий диван с тканивой обивкой. Доступен в разных цветах."
        price="15 434"
      />
      <Item
        image={sofa2}
        category="Диван"
        name="Monti"
        description="Четкий диван с тканивой обивкой. Доступен в разных цветах."
        price="15 434"
      />
      <Item
        image={sofa3}
        category="Диван"
        name="Monti"
        description="Четкий диван с тканивой обивкой. Доступен в разных цветах."
        price="15 434"
      />
    </div>
  )
}

export default ItemSlot
