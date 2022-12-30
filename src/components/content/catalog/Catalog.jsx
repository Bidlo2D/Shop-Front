import React from "react"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
// styles
import styles from "./css/Catalog.module.css"
// components
import TabSection from "./tab_sections/TabSections"
import Assortment from "./assortment/Assortment"

const Catalog = () => {
  const title = useSelector((state) => {
    return state.catalog.currentDirectory
  })
  const ctr = useSelector((state) => {
    return state.catalog.currentСategory
  })
  return (
    <div className={styles.catalog}>
      <div className={styles.wrapper}>
        <p className={styles.directory}>{title}</p>
        <p className={styles.category}>{ctr}</p>
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
