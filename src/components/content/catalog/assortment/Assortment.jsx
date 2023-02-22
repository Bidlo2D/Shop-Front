import React, { useEffect } from "react"
import { loadInfo } from "../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
import { useDispatch, useSelector } from "react-redux"
import { loadProducts } from "../../../../api/productAPI"
import { useHref } from "react-router-dom"
// components
import ItemSlot from "./item_slot/ItemSlot"
import Filters from "./filters/Filters"
import PageBar from "./page_bar/PageBar"

const Assortment = () => {
  const dispatch = useDispatch()
  const href = useHref().split("/").at(-1)
  const page = useSelector((state) => {
    return state.assortment.page
  })

  const isCategory = (category) => {
    return loadProducts(category, page).then((data) => {
      dispatch(loadInfo(data))
    })
  }
  isCategory(href)
  /*   useEffect(() => {
    isCategory(href)
  }, [href]) */

  return (
    <div className="assortment">
      <Filters />
      <ItemSlot />
      <PageBar />
    </div>
  )
}

export default Assortment
