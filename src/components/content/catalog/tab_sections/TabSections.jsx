import React from "react"
// styles
import stylesSearch from "./css/SearchBarCatalog.module.css"
import styles from "./css/TabSections.module.css"
// components
import SectionsCatalog from "./section_catalog/SectionsCatalog"
import SearchBarCatalog from "../search_bar/SearchBarCatalog"

const TabSections = () => {
  return (
    <div>
      <SectionsCatalog></SectionsCatalog>
      <SearchBarCatalog styles={stylesSearch}>
        <div className={styles.buttonSearch}>Найти</div>
      </SearchBarCatalog>
    </div>
  )
}

export default TabSections
