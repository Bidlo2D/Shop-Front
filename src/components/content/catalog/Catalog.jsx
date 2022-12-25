import React from "react"
// components
import SectionsCatalog from "./section_catalog/SectionsCatalog"
// styles
import styles from "./css/Catalog.module.css"
import SearchBarCatalog from "./search_bar/SearchBarCatalog"

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.wrapper}>
        <p className={styles.directory}>Главная / Каталог</p>
        <p className={styles.chapter}>Каталог</p>
        <SectionsCatalog></SectionsCatalog>
        <SearchBarCatalog></SearchBarCatalog>
      </div>
    </div>
  )
}

export default Catalog
