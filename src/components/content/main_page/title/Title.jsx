import React from "react"
import ButtonCatalog from "../../../ButtonCatalog"
// styles
import styles from "./css/Title.module.css"

const Title = () => {
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <p className={styles.bigText}>Дизайнерская мебель</p>
        <p className={styles.addition}>Наполни пространство элегантностью</p>
      </div>
      <ButtonCatalog style={styles.button}>Смотреть каталог</ButtonCatalog>
    </div>
  )
}

export default Title
