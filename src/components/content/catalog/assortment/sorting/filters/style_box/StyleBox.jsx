import React, { memo } from "react"
// styles
import styles from "./css/StyleBox.module.css"

const StyleBox = memo((props) => {
  const mapData = () => {
    const elements = []
    for (let i = 0; i < props.filtres.length; i++) {
      let id = `checkbox_${i}`
      elements.push(
        <div className={styles.option} key={i}>
          <input type="checkbox" id={id} />
          <label htmlFor={id}>
            <p className={styles.noselect}>{props.filtres[i]}</p>
          </label>
        </div>
      )
    }
    return elements
  }
  return (
    <form className={styles.form}>
      {props.filtres.length <= 0 || props.filtres === null ? (
        <div></div>
      ) : (
        mapData()
      )}
    </form>
  )
})

export default StyleBox
