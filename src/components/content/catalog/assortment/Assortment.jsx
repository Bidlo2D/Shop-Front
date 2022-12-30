import React from "react"
// components
import ItemSlot from "./item_slot/ItemSlot"
import Sorting from "./sorting/Sorting"

const Assortment = () => {
  return (
    <div>
      <Sorting></Sorting>
      <ItemSlot></ItemSlot>
    </div>
  )
}

export default Assortment
