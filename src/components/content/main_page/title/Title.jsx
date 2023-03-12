import React from "react"
import ButtonTextLink from "../../../ButtonTextLink"
// styles
import styles from "./css/Title.module.css"

const Title = () => {
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <p className={styles.bigText}>Дизайнерская мебель</p>
        <p className={styles.addition}>Наполни пространство элегантностью</p>
      </div>
      <ButtonTextLink to="catalog" style={styles.button}>
        Смотреть каталог
      </ButtonTextLink>
    </div>
  )
}

export default Title
