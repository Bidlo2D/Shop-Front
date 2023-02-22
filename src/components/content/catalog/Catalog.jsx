import React from "react"
import { Route, Routes, useHref } from "react-router-dom"
// styles
import styles from "./css/Catalog.module.css"
// components
import TabSection from "./tab_sections/TabSections"
import Assortment from "./assortment/Assortment"
import Path from "./path/Path"

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.wrapper}>
        <Path />
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
