import React, { memo } from "react"
// styles
import styles from "./css/ListBox.module.css"

const ListBox = memo((props) => {
  const mapData = () => {
    const elements = []
    for (let i = 0; i < props.filtres.length; i++) {
      let id = `checkbox_${props.filtres[i]}_${i}`
      elements.push(
        <li className={styles.option} key={i}>
          <input type="checkbox" id={id} />
          <label htmlFor={id}>
            <p className={styles.noselect}>{props.filtres[i]}</p>
          </label>
        </li>
      )
    }
    return elements
  }
  return (
    <ul>
      {props.filtres.length <= 0 || props.filtres === null ? (
        <div></div>
      ) : (
        mapData()
      )}
    </ul>
  )
})

export default ListBox
