import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
// components
import ProductSlot from "./product_slot/ProductSlot"
import Filters from "./filters/Filters"
import PageBar from "./page_bar/PageBar"
import Productions from "./productions/Productions"
// actions
import { changePage } from "../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
import { changeCountPage } from "./../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const Assortment = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changePage(0))
    //dispatch(changeCountPage(1))
  })
  return (
    <div className="assortment">
      <Filters />
      <Productions>
        <ProductSlot />
      </Productions>
      <PageBar />
    </div>
  )
}

export default Assortment
