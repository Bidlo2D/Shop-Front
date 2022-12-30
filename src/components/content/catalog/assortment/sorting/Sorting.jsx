import React from "react"
// styles
import styles from "./css/Sorting.module.css"
// components
import Filtres from "./filters/Filtres"

const Sorting = () => {
  return (
    <div className={styles.sorting}>
      <Filtres></Filtres>
    </div>
  )
}

export default Sorting
