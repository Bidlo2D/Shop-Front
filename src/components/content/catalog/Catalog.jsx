import React from "react"
// components
import SectionsCatalog from "./section_catalog/SectionsCatalog"
// styles
import styles from "./css/Catalog.module.css"

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.wrapper}>
        <p className={styles.directory}>Главная / Каталог</p>
        <p className={styles.chapter}>Каталог</p>
        <SectionsCatalog></SectionsCatalog>
      </div>
    </div>
  )
}

export default Catalog
