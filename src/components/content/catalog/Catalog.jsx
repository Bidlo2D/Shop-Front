import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useHref } from "react-router-dom"
import { useEffect } from "react"
// styles
import styles from "./css/Catalog.module.css"
// components
import TabSection from "./tab_sections/TabSections"
import Assortment from "./assortment/Assortment"
// actions
import { changeCatalog } from "./../../../redux/reducers/content/catalog/catalogViewReducer"

const Catalog = () => {
  const dispatch = useDispatch()
  const directory = useSelector((state) => {
    return state.catalog.currentDirectory
  })
  const category = useSelector((state) => {
    return state.catalog.currentСategory
  })
  const href = useHref()
  useEffect(() => {
    dispatch(changeCatalog(href))
  }, [href])
  return (
    <div className={styles.catalog}>
      <div className={styles.wrapper}>
        <p className={styles.directory}>{directory}</p>
        <p className={styles.category}>{category}</p>
        <Routes>
          <Route path="/*" element={<TabSection />} />
          <Route path="all" element={<Assortment />} />
          <Route path="sofas" element={<Assortment />} />
          <Route path="chairs" element={<Assortment />} />
          <Route path="dressers" element={<Assortment />} />
          <Route path="armchairs" element={<Assortment />} />
        </Routes>
      </div>
    </div>
  )
}

export default Catalog
