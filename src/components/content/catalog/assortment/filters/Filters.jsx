import { memo } from "react"
// components
import CancelWindow from "./cancel_window/CancelWindow"
import FiltersList from "./filters_list/FiltersList"
// styles
import styles from "./css/Filtres.module.css"
import SortList from "./sort_list/SortList"

const Filters = memo(() => {
  return (
    <div className={styles.filters}>
      <CancelWindow />
      <FiltersList />
      <SortList />
    </div>
  )
})

export default Filters
