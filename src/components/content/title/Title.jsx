import React from "react"
import { useDispatch } from "react-redux"
// styles
import styles from "./css/Title.module.css"

const Title = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <p className={styles.bigText}>Дизайнерская мебель</p>
        <p className={styles.addition}>Наполни пространство элегантностью</p>
      </div>
      <div
        onClick={() => {
          dispatch(changeContent())
        }}
        className={styles.button}
      >
        Смотреть каталог
      </div>
    </div>
  )
}

export default Title
