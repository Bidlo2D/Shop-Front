import React from "react"
// styles
import styles from "./css/SearchBarCatalog.module.css"
// images
import search from "./images/search.png"

const SearchBarCatalog = () => {
  return (
    <form className={styles.searchBar} action="">
      <div className={styles.wrapper}>
        <img className={styles.imageSearch} src={search} alt="No"></img>
        <input
          className={styles.inputText}
          type="search"
          placeholder="Поиск по каталогу"
        />
      </div>
      <div className={styles.buttonSearch}>Найти</div>
    </form>
  )
}

export default SearchBarCatalog
