import React from "react"
import { useDispatch } from "react-redux"
import { useHref } from "react-router-dom"
import { useSelector } from "react-redux"
import { loadProducts } from "../../../../../api/productAPI"
import { loadInfo } from "./../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const Productions = (props) => {
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
  return <div>{props.children}</div>
}

export default Productions
