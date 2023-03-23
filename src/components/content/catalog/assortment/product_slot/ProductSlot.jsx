import React from "react"
import { useSelector } from "react-redux"
// components
import Product from "../../../../universal/Product"
import ProductSkeleton from "./product_skeleton/ProductSkeleton"
// styles
import stylesProduct from "./css/ProductCatalog.module.css"
import styles from "./css/ProductSlot.module.css"
// actions
import { addItem } from "../../../../../redux/reducers/content/bucket/bucketReducer"

const ProductSlot = () => {
  const items = useSelector((state) => {
    return state.assortment.products
  })

  const isLoading = useSelector((state) => {
    return state.assortment.isLoading
  })

  return (
    <div className={styles.productSlot}>
      {isLoading
        ? [...new Array(9)].map((item, i) => <ProductSkeleton key={i} />)
        : items.map((item, i) => (
            <Product
              key={i}
              product={item}
              action={addItem}
              styles={stylesProduct}
            />
          ))}
    </div>
  )
}

export default ProductSlot
