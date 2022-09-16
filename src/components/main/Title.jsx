import React from "react"
import styles from "./css/Title.module.css"
const Title = () => {
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <p className={styles.bigText}>Дизайнерская мебель</p>
        <p className={styles.addition}>Наполни пространство элегантностью</p>
      </div>
      <div className={styles.button}>Смотреть каталог</div>
    </div>
  )
}

export default Title
