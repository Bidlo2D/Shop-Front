import React from "react"
// components
import ItemSlot from "./item_slot/ItemSlot"
import Filters from "./filters/Filters"

const Assortment = () => {
  return (
    <div className="assortment">
      <Filters />
      <ItemSlot />
    </div>
  )
}

export default Assortment
