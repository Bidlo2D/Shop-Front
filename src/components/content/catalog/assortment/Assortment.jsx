import React from "react"
// components
import ItemSlot from "./item_slot/ItemSlot"
import Filters from "./filters/Filters"
import PageBar from "./page_bar/PageBar"
import Productions from "./productions/Productions"
import { useDispatch } from "react-redux"
import { changePage } from "../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const Assortment = () => {
  const dispatch = useDispatch()
  dispatch(changePage(0))
  return (
    <div className="assortment">
      <Filters />
      <Productions>
        <ItemSlot />
      </Productions>
      <PageBar />
    </div>
  )
}

export default Assortment
