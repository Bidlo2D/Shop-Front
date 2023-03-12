import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHref } from "react-router-dom"
import { useSelector } from "react-redux"
import { loadProducts } from "../../../../../api/productAPI"
import {
  loaderOn,
  loaderOff,
  loadInfo,
} from "./../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const Productions = (props) => {
  const dispatch = useDispatch()
  const category = useHref().split("/").at(-1)
  const page = useSelector((state) => {
    return state.assortment.page
  })

  useEffect(() => {
    dispatch(loaderOn())
    setTimeout(() => {
      loadProducts(category, page).then((data) => {
        dispatch(loadInfo(data))
        dispatch(loaderOff())
      })
    }, 2000)
  })

  return <div>{props.children}</div>
}

export default Productions
