import React from "react"
import styles from "./css/Idea.module.css"
const Idea = (props) => {
  return (
    <div className={styles.newProduct}>
      <div className={styles.wrapper}>
        {/* 1 */}
        <div className={styles.itemImage}>
          <img className={styles.image} src={props.image} alt="" />
        </div>
        {/* 2 */}
        <div className={styles.itemDesc}>
          <div className={styles.productName}>{props.name}</div>
        </div>
      </div>
    </div>
  )
}

export default Idea
