import React from "react"
// images
import search from "../../../../assets/img/search.png"

const SearchBarCatalog = (props) => {
  return (
    <form className={props.styles.searchBar} action="">
      <div className={props.styles.wrapper}>
        <input
          className={props.styles.inputText}
          type="search"
          placeholder="Поиск по каталогу"
        />
        <img className={props.styles.imageSearch} src={search} alt="No"></img>
      </div>
      {props.children}
    </form>
  )
}

export default SearchBarCatalog
