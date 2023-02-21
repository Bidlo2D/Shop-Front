import React, { useEffect } from "react"
// components
import ItemSlot from "./item_slot/ItemSlot"
import Filters from "./filters/Filters"
import { loadInfo } from "../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
import { useDispatch, useSelector } from "react-redux"
import { loadProductsAll, loadProductsByType } from "../../../../api/productAPI"
import { useHref } from "react-router-dom"

const Assortment = () => {
  const dispatch = useDispatch()
  const href = useHref().split("/").at(-1)
  const page = useSelector((state) => {
    return state.assortment.page
  })

  const isType = (type) => {
    switch (type) {
      case "all":
        return loadProductsAll(page).then((data) => {
          dispatch(loadInfo(data))
        })
      default:
        return loadProductsByType(type, page).then((data) => {
          dispatch(loadInfo(data))
        })
    }
  }

  useEffect(() => {
    isType(href)
  }, [href])

  return (
    <div className="assortment">
      <Filters />
      <ItemSlot />
    </div>
  )
}

export default Assortment
