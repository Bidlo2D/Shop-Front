import React from "react"
// styles
import styles from "./css/StyleBox.module.css"
const StyleBox = (filtres) => {
  const mapData = () => {
    const elements = []
    for (let i = 0; i < filtres.length; i++) {
      elements.push(
        <div>
          <input type="checkbox" id="sd" name="" />
          <label for="checkbox">{filtres[i]}</label>
        </div>
      )
    }
    return elements
  }
  return (
    <form className={styles.form}>
      {filtres.length <= 0 || filtres.image === null ? <div></div> : mapData()}
    </form>
  )
}

export default StyleBox
