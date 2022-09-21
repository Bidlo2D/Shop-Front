import React from "react"
import NewProduct from "./NewProduct"
import styles from "./css/NewProductsList.module.css"
const NewProductsList = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Новинки недели</div>
      <div className={styles.list}>
        <div className={styles.arrow}>{"<"}</div>
        {props.products.map((product, index) => (
          <NewProduct key={index} name={product.name} />
        ))}
        <div className={styles.arrow}>{">"}</div>
      </div>
      <div className={styles.button}>Перейти в каталог</div>
    </div>
  )
}

export default NewProductsList
