import React from "react"
// styles
import styles from "./css/Sorting.module.css"
import stylesSearch from "./css/SearchBarCatalog.module.css"
// components
import Filters from "./filters/Filters"
import SearchBarCatalog from "./../../search_bar/SearchBarCatalog"

const Sorting = () => {
  return (
    <div className={styles.sorting}>
      <Filters />
      <SearchBarCatalog styles={stylesSearch} />
    </div>
  )
}

export default Sorting
