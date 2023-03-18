import React from "react"
import { useSelector } from "react-redux"
// styles
import styles from "./css/SearchBlockResult.module.css"
import FoundItem from "./found/FoundItem"

const SearchBlockResult = () => {
  const found = useSelector((state) => {
    return state.search.products
  })
  return (
    <div className={styles.block}>
      {found.length > 0 ? (
        found.map((item, i) => (
          <FoundItem
            key={i}
            id={item.id}
            name={item.name}
            color={item.color}
            image={item.image}
            price={item.price}
          />
        ))
      ) : (
        <div>По вашему запросу ничего не найдено</div>
      )}
    </div>
  )
}

export default SearchBlockResult
