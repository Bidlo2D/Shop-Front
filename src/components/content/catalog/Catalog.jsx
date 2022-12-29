import React from "react"
import { useSelector } from "react-redux"
// styles
import styles from "./css/Catalog.module.css"

const Catalog = () => {
  const title = useSelector((state) => {
    return state.tabCatalog.currentDirectory
  })
  const ctr = useSelector((state) => {
    return state.tabCatalog.currentСategory
  })
  const tab = useSelector((state) => {
    return state.tabCatalog.currentTab
  })
  return (
    <div className={styles.catalog}>
      <div className={styles.wrapper}>
        <p className={styles.directory}>{title}</p>
        <p className={styles.category}>{ctr}</p>
        {tab}
      </div>
    </div>
  )
}

export default Catalog
