import React from "react"
import { useSelector } from "react-redux"
// styles
import styles from "./css/SearchBlockResult.module.css"
import stylesFound from "./css/FoundItem.module.css"
// components
import Product from "./../../../universal/Product"

const SearchBlockResult = () => {
  const found = useSelector((state) => {
    return state.search.products
  })
  return (
    <div className={styles.block}>
      {found?.length > 0 ? (
        found.map((item, i) => (
          <Product key={i} product={item} styles={stylesFound} />
        ))
      ) : (
        <div className={styles.noFound}>
          По вашему запросу ничего не найдено
        </div>
      )}
    </div>
  )
}

export default SearchBlockResult
