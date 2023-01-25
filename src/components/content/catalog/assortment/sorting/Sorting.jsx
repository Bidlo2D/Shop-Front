import React from "react"
// styles
import styles from "./css/Sorting.module.css"
import stylesSearch from "./css/SearchBarCatalog.module.css"
// components
import Filtres from "./filters/Filtres"
import SearchBarCatalog from "./../../search_bar/SearchBarCatalog"

const Sorting = () => {
  return (
    <div className={styles.sorting}>
      <Filtres />
      <SearchBarCatalog styles={stylesSearch} />
    </div>
  )
}

export default Sorting
