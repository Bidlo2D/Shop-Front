// components
import FiltersList from "./filters_list/FiltersList"
import SearchBarCatalog from "./../../search_bar/SearchBarCatalog"
import SortingBy from "./sorting_by/SortingBy"
// styles
import styles from "./css/Filtres.module.css"
import stylesSearch from "./css/SearchBarCatalog.module.css"

const Filters = () => {
  return (
    <div className={styles.filters}>
      <FiltersList />
      <div className={styles.sortingByAndSearch}>
        <SearchBarCatalog styles={stylesSearch} />
        <SortingBy />
      </div>
    </div>
  )
}

export default Filters
