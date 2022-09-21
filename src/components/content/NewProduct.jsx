import React from "react"
import styles from "./css/NewProduct.module.css"
const NewProduct = (props) => {
  return <div className={styles.newProduct}>{props.name}</div>
}

export default NewProduct
